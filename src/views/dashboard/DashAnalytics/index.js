import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { BarChart, Bar } from 'recharts';

import user1 from '../../../assets/images/user/user-1.png';
import user2 from '../../../assets/images/user/user-2.png';

import AmChartStatistics6 from './chart/AmChartStatistics6';
import AmChartStatistics11 from './chart/AmChartStatistics11';
import AmChartAge from './chart/AmChartAge';

const dataSaleView = [{ a: 48 }, { a: 30 }, { a: 25 }, { a: 30 }, { a: 20 }, { a: 40 }, { a: 20 }];

const DashAnalytics = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={4} sm={6}>
                    <Card className="user-card">
                        <Card.Body>
                            <h5 className="m-b-15">Register User</h5>
                            <h4 className="f-w-300">1205</h4>
                            <span className="text-muted">
                                <label className="label theme-bg text-white f-12 f-w-400">20%</label>Monthly Increase
                            </span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} sm={6}>
                    <Card className="user-card">
                        <Card.Body>
                            <h5 className="f-w-400 m-b-15">Daily User</h5>
                            <h4 className="f-w-300">467</h4>
                            <span className="text-muted">
                                <label className="label theme-bg text-white f-12 f-w-400">10%</label>Weekly Increase
                            </span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="user-card">
                        <Card.Body>
                            <h5 className="f-w-400 m-b-15">Premium User</h5>
                            <h4 className="f-w-300">346</h4>
                            <span className="text-muted">
                                <label className="label theme-bg text-white f-12 f-w-400">50%</label>Yearly Increase
                            </span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="Active-visitor">
                        <Card.Body className="text-center">
                            <h5 className="mb-3">Active Visitor</h5>
                            <i className="fa fa-users f-30 text-c-green" />
                            <h2 className="f-w-300 mt-3">1,285</h2>
                            <span className="text-muted">Active Visit On Sites</span>
                            <div className="progress mt-3 m-b-40">
                                <div
                                    className="progress-bar progress-c-theme"
                                    role="progressbar"
                                    style={{ width: '75%', height: '7px' }}
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                            <div className="row card-active">
                                <div className="col-md-4 col-6">
                                    <h4>52%</h4>
                                    <span className="text-muted">Desktop</span>
                                </div>
                                <div className="col-md-4 col-6">
                                    <h4>80%</h4>
                                    <span className="text-muted">Mobile</span>
                                </div>
                                <div className="col-md-4 col-12">
                                    <h4>68%</h4>
                                    <span className="text-muted">Tablet</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card className="progress-gender">
                        <Card.Header>
                            <Card.Title as="h5">Age</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartAge height="220px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Row>
                        <Col xl={12} md={6}>
                            <Card className="theme-bg visitor">
                                <Card.Body className="text-center">
                                    <img className="img-female" src={user1} alt="visitor-user" />
                                    <h5 className="text-white m-0">TOTAL VISITORS</h5>
                                    <h3 className="text-white m-t-10 f-w-300">235</h3>
                                    <span className="text-white">20% More than last Month</span>
                                    <img className="img-men" src={user2} alt="visitor-user" />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12} md={6}>
                            <Card>
                                <Card.Body>
                                    <div className="row">
                                        <div className="col">
                                            <i className="feather icon-shopping-cart f-30 text-c-green" />
                                            <h6 className="m-t-50 m-b-0">Last week’s orders</h6>
                                        </div>
                                        <div className="col text-right">
                                            <h3 className="text-c-green f-w-300">589</h3>
                                            <span className="text-muted d-block">New Order</span>
                                            <span className="badge theme-bg text-white m-t-20">1434</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={8}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body className="pb-0">
                            <AmChartStatistics6 height="330px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card className="bg-c-blue">
                        <Card.Header className="borderless">
                            <Card.Title as="h5" className="text-white">
                                Statistics
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="mb-0">
                            <AmChartStatistics11 height="300px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Transactions</Card.Title>
                            <Card.Text className="mt-2">Jun 23 - Jul 23</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h3 className="f-w-300 mb-0 float-left">$59,48</h3>
                                </div>
                                <div className="col-auto">
                                    <BarChart width={80} height={100} data={dataSaleView}>
                                        <Bar barSize={3} dataKey="a" fill="#04a9f5" />
                                    </BarChart>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Transactions</Card.Title>
                            <Card.Text>June - July</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-6">
                                    <BarChart width={80} height={60} data={dataSaleView}>
                                        <Bar barSize={3} dataKey="a" fill="#a389d4" />
                                    </BarChart>
                                    <h3 className="f-w-300 pt-3 mb-0">$80,48</h3>
                                </div>
                                <div className="col-6">
                                    <BarChart width={80} height={60} data={dataSaleView}>
                                        <Bar barSize={3} dataKey="a" fill="#04a9f5" />
                                    </BarChart>
                                    <h3 className="f-w-300 pt-3 mb-0">$40,27</h3>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Transactions</Card.Title>
                            <Card.Text className="mt-2">Jun 23 - Jul 23</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-6">
                                    <BarChart width={80} height={100} data={dataSaleView}>
                                        <Bar barSize={3} dataKey="a" fill="#04a9f5" />
                                    </BarChart>
                                </div>
                                <div className="col-6">
                                    <h3 className="f-w-300 mb-0 float-right">$59,48</h3>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default DashAnalytics;
