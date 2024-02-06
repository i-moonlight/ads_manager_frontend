import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable, useGroupBy, useExpanded } from 'react-table';

import makeData from '../../../data/tableData';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

function Table({ columns, data }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data
        },
        useGroupBy,
        useExpanded // useGroupBy would be pretty useless without useExpanded ;)
    );

    // We don't want to render all of the rows for this example, so cap
    // it at 100 for this use case
    const firstPageRows = rows.slice(0, 20);

    return (
        <>
            <Legend />
            <BTable striped bordered hover responsive {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.canGroupBy ? (
                                        // If the column can be grouped, let's add a toggle
                                        <span {...column.getGroupByToggleProps()}>{column.isGrouped ? '🛑 ' : '👊 '}</span>
                                    ) : null}
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {firstPageRows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            // For educational purposes, let's color the
                                            // cell depending on what type it is given
                                            // from the useGroupBy hook
                                            {...cell.getCellProps()}
                                            style={{
                                                background: cell.isGrouped
                                                    ? '#d5f7f0'
                                                    : cell.isAggregated
                                                    ? '#fff0db'
                                                    : cell.isPlaceholder
                                                    ? '#ffdde2'
                                                    : '#fff'
                                            }}
                                        >
                                            {cell.isGrouped ? (
                                                // If it's a grouped cell, add an expander and row count
                                                <>
                                                    <span {...row.getToggleRowExpandedProps()}>{row.isExpanded ? '👇' : '👉'}</span>{' '}
                                                    {cell.render('Cell')} ({row.subRows.length})
                                                </>
                                            ) : cell.isAggregated ? (
                                                // If the cell is aggregated, use the Aggregated
                                                // renderer for cell
                                                cell.render('Aggregated')
                                            ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                                                // Otherwise, just render the regular cell
                                                cell.render('Cell')
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </BTable>
        </>
    );
}

function Legend() {
    return (
        <div
            style={{
                padding: '0.5rem 0'
            }}
        >
            <span
                style={{
                    display: 'inline-block',
                    background: '#d5f7f0',
                    padding: '0.5rem'
                }}
            >
                Grouped
            </span>{' '}
            <span
                style={{
                    display: 'inline-block',
                    background: '#fff0db',
                    padding: '0.5rem'
                }}
            >
                Aggregated
            </span>{' '}
            <span
                style={{
                    display: 'inline-block',
                    background: '#ffdde2',
                    padding: '0.5rem'
                }}
            >
                Repeated Value
            </span>
        </div>
    );
}

// This is a custom aggregator that
// takes in an array of leaf values and
// returns the rounded median
function roundedMedian(leafValues) {
    let min = leafValues[0] || 0;
    let max = leafValues[0] || 0;

    leafValues.forEach((value) => {
        min = Math.min(min, value);
        max = Math.max(max, value);
    });

    return Math.round((min + max) / 2);
}

function App() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName',
                        // Use a two-stage aggregator here to first
                        // count the total rows being aggregated,
                        // then sum any of those counts if they are
                        // aggregated further
                        aggregate: 'count',
                        Aggregated: ({ value }) => `${value} Names`
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName',
                        // Use another two-stage aggregator here to
                        // first count the UNIQUE values from the rows
                        // being aggregated, then sum those counts if
                        // they are aggregated further
                        aggregate: 'uniqueCount',
                        Aggregated: ({ value }) => `${value} Unique Names`
                    }
                ]
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Age',
                        accessor: 'age',
                        // Aggregate the average age of visitors
                        aggregate: 'average',
                        Aggregated: ({ value }) => `${Math.round(value * 100) / 100} (avg)`
                    },
                    {
                        Header: 'Visits',
                        accessor: 'visits',
                        // Aggregate the sum of all visits
                        aggregate: 'sum',
                        Aggregated: ({ value }) => `${value} (total)`
                    },
                    {
                        Header: 'Status',
                        accessor: 'status'
                    },
                    {
                        Header: 'Profile Progress',
                        accessor: 'progress',
                        // Use our custom roundedMedian aggregator
                        aggregate: roundedMedian,
                        Aggregated: ({ value }) => `${value} (med)`
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
                            <Card.Title as="h5">Grouping Table</Card.Title>
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
