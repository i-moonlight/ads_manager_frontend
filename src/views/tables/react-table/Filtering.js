import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
// A great library for fuzzy filtering/sorting items
import { matchSorter } from 'match-sorter';

import makeData from '../../../data/tableData';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

// Define a default UI for filtering
function GlobalFilter({ preGlobalFilteredRows, globalFilter, setGlobalFilter }) {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <span className="d-flex align-items-center">
            Search:{' '}
            <input
                className="form-control ml-3"
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
                style={{
                    fontSize: '1.1rem',
                    border: '0'
                }}
            />
        </span>
    );
}

// Define a default UI for filtering
function DefaultColumnFilter({ column: { filterValue, preFilteredRows, setFilter } }) {
    const count = preFilteredRows.length;

    return (
        <input
            className="form-control"
            value={filterValue || ''}
            onChange={(e) => {
                setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
            }}
            placeholder={`Search ${count} records...`}
        />
    );
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id } }) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
        const options = new Set();
        preFilteredRows.forEach((row) => {
            options.add(row.values[id]);
        });
        return [...options.values()];
    }, [id, preFilteredRows]);

    // Render a multi-select box
    return (
        <select
            className="form-control"
            value={filterValue}
            onChange={(e) => {
                setFilter(e.target.value || undefined);
            }}
        >
            <option value="">All</option>
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
function SliderColumnFilter({ column: { filterValue, setFilter, preFilteredRows, id } }) {
    // Calculate the min and max
    // using the preFilteredRows

    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        preFilteredRows.forEach((row) => {
            min = Math.min(row.values[id], min);
            max = Math.max(row.values[id], max);
        });
        return [min, max];
    }, [id, preFilteredRows]);

    return (
        <div className="d-flex align-items-center">
            <input
                className="form-control mr-2"
                type="range"
                min={min}
                max={max}
                value={filterValue || min}
                onChange={(e) => {
                    setFilter(parseInt(e.target.value, 10));
                }}
            />
            <Button onClick={() => setFilter(undefined)}>Off</Button>
        </div>
    );
}

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
function NumberRangeColumnFilter({ column: { filterValue = [], preFilteredRows, setFilter, id } }) {
    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
        preFilteredRows.forEach((row) => {
            min = Math.min(row.values[id], min);
            max = Math.max(row.values[id], max);
        });
        return [min, max];
    }, [id, preFilteredRows]);

    return (
        <div
            style={{
                display: 'flex'
            }}
        >
            <input
                className="form-control"
                value={filterValue[0] || ''}
                type="number"
                onChange={(e) => {
                    const val = e.target.value;
                    setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]]);
                }}
                placeholder={`Min (${min})`}
                style={{
                    width: '70px',
                    marginRight: '0.5rem'
                }}
            />
            to
            <input
                className="form-control"
                value={filterValue[1] || ''}
                type="number"
                onChange={(e) => {
                    const val = e.target.value;
                    setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined]);
                }}
                placeholder={`Max (${max})`}
                style={{
                    width: '70px',
                    marginLeft: '0.5rem'
                }}
            />
        </div>
    );
}

function fuzzyTextFilterFn(rows, id, filterValue) {
    return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

// Our table component
function Table({ columns, data }) {
    const filterTypes = React.useMemo(
        () => ({
            // Add a new fuzzyTextFilterFn filter type.
            fuzzyText: fuzzyTextFilterFn,
            // Or, override the default text filter to use
            // "startWith"
            text: (rows, id, filterValue) => {
                return rows.filter((row) => {
                    const rowValue = row.values[id];
                    return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true;
                });
            }
        }),
        []
    );

    const defaultColumn = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: DefaultColumnFilter
        }),
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        visibleColumns,
        preGlobalFilteredRows,
        setGlobalFilter
    } = useTable(
        {
            columns,
            data,
            defaultColumn, // Be sure to pass the defaultColumn option
            filterTypes
        },
        useFilters, // useFilters!
        useGlobalFilter // useGlobalFilter!
    );

    // We don't want to render all of the rows for this example, so cap
    // it for this use case
    const firstPageRows = rows.slice(0, 10);

    return (
        <>
            <BTable striped bordered hover responsive {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                    {/* Render the columns filter UI */}
                                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                                </th>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <th
                            colSpan={visibleColumns.length}
                            style={{
                                textAlign: 'left'
                            }}
                        >
                            <GlobalFilter
                                preGlobalFilteredRows={preGlobalFilteredRows}
                                globalFilter={state.globalFilter}
                                setGlobalFilter={setGlobalFilter}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody {...getTableBodyProps()}>
                    {firstPageRows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </BTable>
        </>
    );
}

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
    return rows.filter((row) => {
        const rowValue = row.values[id];
        return rowValue >= filterValue;
    });
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = (val) => typeof val !== 'number';

function App() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName'
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName',
                        // Use our custom `fuzzyText` filter on this column
                        filter: 'fuzzyText'
                    }
                ]
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Age',
                        accessor: 'age',
                        Filter: SliderColumnFilter,
                        filter: 'equals'
                    },
                    {
                        Header: 'Visits',
                        accessor: 'visits',
                        Filter: NumberRangeColumnFilter,
                        filter: 'between'
                    },
                    {
                        Header: 'Status',
                        accessor: 'status',
                        Filter: SelectColumnFilter,
                        filter: 'includes'
                    },
                    {
                        Header: 'Profile Progress',
                        accessor: 'progress',
                        Filter: SliderColumnFilter,
                        filter: filterGreaterThan
                    }
                ]
            }
        ],
        []
    );

    const data = React.useMemo(() => makeData(1000), []);

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://react-table.tanstack.com/"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Table Filtering</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table columns={columns} data={data} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default App;
