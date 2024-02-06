import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import AmChartStatistics1 from './chart/AmChartStatistics1';
import AmChartStatistics8 from './chart/AmChartStatistics8';
import AmChartWorldUser from './chart/AmChartWorldUser';

const DashCrypto = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={4}>
                    <Card className="theme-bg bitcoin-wallet">
                        <Card.Body>
                            <h5 className="text-white mb-2">Bitcoin Wallet</h5>
                            <h2 className="text-white mb-3 f-w-300">$9,302</h2>
                            <span className="text-white d-block">Ratings by Market Capitalization</span>
                            <i className="fab fa-bitcoin f-70 text-white" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="theme-bg2 bitcoin-wallet">
                        <Card.Body>
                            <h5 className="text-white mb-2">Bitcoin Wallet</h5>
                            <h2 className="text-white mb-3 f-w-300">$8,101</h2>
                            <span className="text-white d-block">Ratings by Market Capitalization</span>
                            <i className="fas fa-dollar-sign f-70 text-white" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xl={4}>
                    <Card className="bg-c-blue bitcoin-wallet">
                        <Card.Body>
                            <h5 className="text-white mb-2">Bitcoin Wallet</h5>
                            <h2 className="text-white mb-3 f-w-300">$7,501</h2>
                            <span className="text-white d-block">Ratings by Market Capitalization</span>
                            <i className="fa fa-database f-70 text-white" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartStatistics1 height="330px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="note-bar">
                        <Card.Header>
                            <Card.Title as="h5">Notifications</Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <Link to="#" className="media friendlist-box">
                                <div className="mr-3 photo-table">
                                    <i className="fa fa-bell f-30" />
                                </div>
                                <div className="media-body">
                                    <h6>New order received</h6>
                                    <span className="f-12 float-right text-muted">12.56</span>
                                    <p className="text-muted m-0">2 unread notification</p>
                                </div>
                            </Link>
                            <Link to="#" className="media friendlist-box border-top">
                                <div className="mr-3 photo-table">
                                    <i className="fa fa-bell f-30" />
                                </div>
                                <div className="media-body">
                                    <h6>New user register</h6>
                                    <span className="f-12 float-right text-muted">12.36</span>
                                    <p className="text-muted m-0">xx messages</p>
                                </div>
                            </Link>
                            <Link to="#" className="media friendlist-box border-top">
                                <div className="mr-3 photo-table">
                                    <i className="fa fa-bell f-30" />
                                </div>
                                <div className="media-body">
                                    <h6>New order register</h6>
                                    <span className="f-12 float-right text-muted">11.45</span>
                                    <p className="text-muted m-0">2 read notification</p>
                                </div>
                            </Link>
                            <div className="media friendlist-box border-top">
                                <div className="mr-3 photo-table">
                                    <i className="fa fa-bell f-30" />
                                </div>
                                <div className="media-body">
                                    <h6>New order prepend</h6>
                                    <span className="f-12 float-right text-muted">9.39</span>
                                    <p className="text-muted m-0">xx messages</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Users From United States</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartWorldUser height="350px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <h3 className="f-w-300">$894.39</h3>
                        </Card.Body>
                        <Card.Body className="p-0">
                            <AmChartStatistics8 height="310px" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default DashCrypto;
