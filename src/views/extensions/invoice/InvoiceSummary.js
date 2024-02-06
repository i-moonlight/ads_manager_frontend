import React from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

import ReChartSalesExpenses from './chart/ReChartSalesExpenses';

const InvoiceSummary = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Sales and Expenses</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ReChartSalesExpenses />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Sales, Receipt and Dues</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive className="mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Sales</th>
                                        <th>Receipt</th>
                                        <th>Dues</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Today</th>
                                        <td>$250.00</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">This Week</th>
                                        <td>$380.00</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">This Month</th>
                                        <td>$450.00</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">This Year</th>
                                        <td>$600.00</td>
                                        <td>the Bird</td>
                                        <td>@facebook</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total</th>
                                        <td>$600.00</td>
                                        <td>the Bird</td>
                                        <td>@google</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Recent Orders</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive className="mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Order No.</th>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>54822</td>
                                        <td>Product 1</td>
                                        <td>2</td>
                                        <td>
                                            <label className="label label-md label-danger">$80.00</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>54823</td>
                                        <td>Product 2</td>
                                        <td>1</td>
                                        <td>
                                            <label className="label label-md label-success">$75.00</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>54824</td>
                                        <td>Product 3</td>
                                        <td>3</td>
                                        <td>
                                            <label className="label label-md label-warning">$99.00</label>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default InvoiceSummary;
