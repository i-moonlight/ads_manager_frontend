import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable, useSortBy } from 'react-table';

import makeData from '../../../data/tableData';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

function Table({ columns, data }) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data
        },
        useSortBy
    );

    // We don't want to render all 2000 rows for this example, so cap
    // it at 20 for this use case
    const firstPageRows = rows.slice(0, 20);

    return (
        <>
            <BTable striped bordered hover responsive {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                // Add the sorting props to control sorting. For this example
                                // we can add them into the header props
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {/* Add a sort direction indicator */}
                                    <span>
                                        {column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <span className="feather icon-arrow-down text-muted float-right mt-1" />
                                            ) : (
                                                <span className="feather icon-arrow-up text-muted float-right mt-1" />
                                            )
                                        ) : (
                                            ''
                                        )}
                                    </span>
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
                        accessor: 'lastName'
                    }
                ]
            },
            {
                Header: 'Info',
                columns: [
                    {
                        Header: 'Age',
                        accessor: 'age'
                    },
                    {
                        Header: 'Visits',
                        accessor: 'visits'
                    },
                    {
                        Header: 'Status',
                        accessor: 'status'
                    },
                    {
                        Header: 'Profile Progress',
                        accessor: 'progress'
                    }
                ]
            }
        ],
        []
    );

    const data = React.useMemo(() => makeData(10), []);

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
                            <Card.Title as="h5">Column Sorting</Card.Title>
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
