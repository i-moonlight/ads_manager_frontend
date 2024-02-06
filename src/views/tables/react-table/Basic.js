import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import BTable from 'react-bootstrap/Table';
import { useTable } from 'react-table';

import makeData from '../../../data/tableData';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data
    });

    // Render the UI for your table
    return (
        <BTable striped bordered hover responsive {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
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
        </BTable>
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
                            <Card.Title as="h5">Basic Table</Card.Title>
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
