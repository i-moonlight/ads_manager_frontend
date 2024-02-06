import React from 'react';
import { Row, Col, Card, Table, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AmChartEarnings1 from './chart/AmChartEarnings1';
import AmChartYearlySummary from './chart/AmChartYearlySummary';

import shape5 from '../../../assets/images/widget/shape5.png';

const DashEcommerce = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={4}>
                    <Card className="Online-Order">
                        <Card.Body>
                            <h5>Online Orders</h5>
                            <h6 className="text-muted d-flex align-items-center justify-content-between m-t-30">
                                Delivery Orders<span className="float-right f-18 text-c-green">237 / 400</span>
                            </h6>
                            <div className="progress mt-3">
                                <div
                                    className="progress-bar progress-c-theme"
                                    role="progressbar"
                                    style={{ width: '65%', height: '6px' }}
                                    aria-valuenow="65"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                            <span className="text-muted mt-2 d-block">37% Done</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="Online-Order">
                        <Card.Body>
                            <h5>Pending Orders</h5>
                            <h6 className="text-muted d-flex align-items-center justify-content-between m-t-30">
                                pending Orders<span className="float-right f-18 text-c-purple">100 / 500</span>
                            </h6>
                            <div className="progress mt-3">
                                <div
                                    className="progress-bar progress-c-theme2"
                                    role="progressbar"
                                    style={{ width: '50%', height: '6px' }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                            <span className="text-muted mt-2 d-block">20% pending</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="Online-Order">
                        <Card.Body>
                            <h5>Return Orders</h5>
                            <h6 className="text-muted d-flex align-items-center justify-content-between m-t-30">
                                Return Orders<span className="float-right f-18 text-c-blue">50 / 400</span>
                            </h6>
                            <div className="progress mt-3">
                                <div
                                    className="progress-bar progress-c-blue"
                                    role="progressbar"
                                    style={{ width: '40%', height: '6px' }}
                                    aria-valuenow="40"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                            <span className="text-muted mt-2 d-block">10% Return</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card className="pb-0">
                        <Card.Header>
                            <Card.Title as="h5">Yearly Summary</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row pb-3">
                                <div className="col-md-4 col-6 text-center m-b-15">
                                    <h3 className="f-w-300">$2356.4</h3>
                                    <span>Invoiced</span>
                                </div>
                                <div className="col-md-4 col-6 text-center m-b-15">
                                    <h3 className="f-w-300">$1935.6</h3>
                                    <span>Profit</span>
                                </div>
                                <div className="col-md-4 col-12 text-center m-b-15">
                                    <h3 className="f-w-300">$468.9</h3>
                                    <span>Expenses</span>
                                </div>
                            </div>
                            <AmChartYearlySummary height="270px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card className="theme-bg earning-date">
                        <Card.Header className="borderless">
                            <Card.Title as="h5" className="text-white">
                                Earnings
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example bd-example-tabs">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="mon">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="mon">
                                            <h2 className="text-white mb-3 f-w-300">
                                                359,234<i className="feather icon-arrow-up"></i>
                                            </h2>
                                            <span className="text-white mb-4 d-block">TOTAL EARNINGS</span>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tue">
                                            <h2 className="text-white mb-3 f-w-300">
                                                222,586<i className="feather icon-arrow-down"></i>
                                            </h2>
                                            <span className="text-white mb-4 d-block">TOTAL EARNINGS</span>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="wed">
                                            <h2 className="text-white mb-3 f-w-300">
                                                859,745<i className="feather icon-arrow-up"></i>
                                            </h2>
                                            <span className="text-white mb-4 d-block">TOTAL EARNINGS</span>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="thu">
                                            <h2 className="text-white mb-3 f-w-300">
                                                785,684<i className="feather icon-arrow-up"></i>
                                            </h2>
                                            <span className="text-white mb-4 d-block">TOTAL EARNINGS</span>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fri">
                                            <h2 className="text-white mb-3 f-w-300">
                                                123,486<i className="feather icon-arrow-down"></i>
                                            </h2>
                                            <span className="text-white mb-4 d-block">TOTAL EARNINGS</span>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sat">
                                            <h2 className="text-white mb-3 f-w-300">
                                                762,963<i className="feather icon-arrow-up"></i>
                                            </h2>
                                            <span className="text-white mb-4 d-block">TOTAL EARNINGS</span>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sun">
                                            <h2 className="text-white mb-3 f-w-300">
                                                984,632<i className="feather icon-arrow-down"></i>
                                            </h2>
                                            <span className="text-white mb-4 d-block">TOTAL EARNINGS</span>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    <Nav variant="pills" className="align-items-center justify-content-center">
                                        <Nav.Item>
                                            <Nav.Link eventKey="mon">Mon</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tue">Tue</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="wed">Wed</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="thu">thu</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="fri">Fri</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="sat">Sat</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="sun">Sun</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Tab.Container>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="theme-bg2">
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-auto">
                                    <img src={shape5} alt="activity-user" />
                                </div>
                                <div className="col">
                                    <h2 className="text-white f-w-300">375</h2>
                                    <h5 className="text-white">Sale Product</h5>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8} md={6}>
                    <Card className="code-table">
                        <Card.Header>
                            <Card.Title as="h5">Full Width Table</Card.Title>
                        </Card.Header>
                        <Card.Body className="pb-0">
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th>Id Number</th>
                                        <th>Code</th>
                                        <th>Date</th>
                                        <th>Budget</th>
                                        <th>Status</th>
                                        <th className="text-right">Ratings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h6 className="mb-1">#467</h6>
                                        </td>
                                        <td>
                                            <h6 className="mb-1">8765482</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">November 14, 2017</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">$874.23</h6>
                                        </td>
                                        <td>
                                            <Link to="#" className="label theme-bg f-12 text-white">
                                                Active
                                            </Link>
                                        </td>
                                        <td className="text-right">
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-c-yellow" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-c-yellow" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-c-yellow" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-c-yellow" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-black-50" />
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <h6 className="mb-1">#466</h6>
                                        </td>
                                        <td>
                                            <h6 className="mb-1">2366482</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">November 13, 2017</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">$235.34</h6>
                                        </td>
                                        <td>
                                            <Link to="#" className="label theme-bg2 f-12 text-white">
                                                Not Active
                                            </Link>
                                        </td>
                                        <td className="text-right">
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-c-yellow" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-c-yellow" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-c-yellow" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-black-50" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-black-50" />
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <h6 className="mb-1">#465</h6>
                                        </td>
                                        <td>
                                            <h6 className="mb-1">8832638</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">October 14, 2017</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">$233.46</h6>
                                        </td>
                                        <td>
                                            <Link to="#" className="label theme-bg f-12 text-white">
                                                Active
                                            </Link>
                                        </td>
                                        <td className="text-right">
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-c-yellow" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-c-yellow" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-black-50" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-black-50" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-black-50" />
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 className="mb-1">#464</h6>
                                        </td>
                                        <td>
                                            <h6 className="mb-1">9632638</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">December 17, 2017</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">$133.46</h6>
                                        </td>
                                        <td>
                                            <Link to="#" className="label theme-bg2 f-12 text-white">
                                                Not Active
                                            </Link>
                                        </td>
                                        <td className="text-right">
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-c-yellow" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-black-50" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-black-50" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-black-50" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-black-50" />
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 className="mb-1">#463</h6>
                                        </td>
                                        <td>
                                            <h6 className="mb-1">3332538</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">July 14, 2017</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">$244.46</h6>
                                        </td>
                                        <td>
                                            <Link to="#" className="label theme-bg f-12 text-white">
                                                Active
                                            </Link>
                                        </td>
                                        <td className="text-right">
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-c-yellow" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-c-yellow" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-c-yellow" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-black-50" />
                                            </Link>
                                            <Link to="#">
                                                <i className="fa fa-star f-18 text-black-50" />
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Earnings</Card.Title>
                            <Card.Text>Mon 15 - Sun 21</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <div className="earning-price mb-4">
                                <h3 className="m-0 f-w-300">$894.39</h3>
                            </div>
                            <AmChartEarnings1 height="235px" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default DashEcommerce;
