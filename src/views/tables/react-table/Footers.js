import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable } from 'react-table';

import makeData from '../../../data/tableData';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } = useTable({
        columns,
        data
    });

    // Render the UI for your table
    return (
        <BTable striped bordered hover responsive {...getTableProps()}>
            <thead>
                {headerGroups.map((group) => (
                    <tr {...group.getHeaderGroupProps()}>
                        {group.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
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
            <tfoot>
                {footerGroups.map((group) => (
                    <tr {...group.getFooterGroupProps()}>
                        {group.headers.map((column) => (
                            <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                        ))}
                    </tr>
                ))}
            </tfoot>
        </BTable>
    );
}

function App() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                Footer: 'Name',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName',
                        Footer: 'First Name'
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName',
                        Footer: 'Last Name'
                    }
                ]
            },
            {
                Header: 'Info',
                Footer: 'Info',
                columns: [
                    {
                        Header: 'Age',
                        accessor: 'age',
                        Footer: 'Age'
                    },
                    {
                        Header: 'Visits',
                        accessor: 'visits',
                        Footer: (info) => {
                            // Only calculate total visits if rows change
                            const total = React.useMemo(() => info.rows.reduce((sum, row) => row.values.visits + sum, 0), [info.rows]);

                            return <>Total: {total}</>;
                        }
                    },
                    {
                        Header: 'Status',
                        accessor: 'status',
                        Footer: 'Status'
                    },
                    {
                        Header: 'Profile Progress',
                        accessor: 'progress',
                        Footer: 'Profile Progress'
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
                            <Card.Title as="h5">Table Footer</Card.Title>
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
