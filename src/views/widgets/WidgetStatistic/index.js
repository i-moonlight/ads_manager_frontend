import React from 'react';
import { Row, Col, Card, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import user1 from '../../../assets/images/user/user-1.png';
import user2 from '../../../assets/images/user/user-2.png';

import shape1 from '../../../assets/images/widget/shape1.png';
import shape2 from '../../../assets/images/widget/shape2.png';
import shape3 from '../../../assets/images/widget/shape3.png';
import shape4 from '../../../assets/images/widget/shape4.png';
import shape5 from '../../../assets/images/widget/shape5.png';
import shape6 from '../../../assets/images/widget/shape6.png';

import { BarChart, Bar, LineChart, Line } from 'recharts';

const dataSaleView = [
    { a: 10 },
    { a: 20 },
    { a: 10 },
    { a: 27 },
    { a: 10 },
    { a: 20 },
    { a: 15 },
    { a: 24 },
    { a: 16 },
    { a: 20 },
    { a: 10 },
    { a: 18 },
    { a: 20 },
    { a: 10 },
    { a: 5 }
];

const dataMarketsView = [{ a: 10 }, { a: 20 }, { a: 10 }, { a: 27 }, { a: 10 }, { a: 20 }, { a: 15 }];

const WidgetStatistic = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Daily Sales</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                        <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />
                                        $249.95
                                    </h3>
                                </div>

                                <div className="col-3 text-right">
                                    <p className="m-b-0">67%</p>
                                </div>
                            </div>
                            <div className="progress m-t-30" style={{ height: '7px' }}>
                                <div
                                    className="progress-bar progress-c-theme"
                                    role="progressbar"
                                    style={{ width: '75%' }}
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Monthly Sales</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                        <i className="feather icon-arrow-down text-c-red f-30 m-r-5" />
                                        $2.942.32
                                    </h3>
                                </div>

                                <div className="col-3 text-right">
                                    <p className="m-b-0">36%</p>
                                </div>
                            </div>
                            <div className="progress m-t-30" style={{ height: '7px' }}>
                                <div
                                    className="progress-bar progress-c-theme2"
                                    role="progressbar"
                                    style={{ width: '35%' }}
                                    aria-valuenow="35"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Sales</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <h3 className="f-w-300">$17,400</h3>
                            <span className="d-block  text-muted text-uppercase">Total Revenue</span>
                            <div className="row">
                                <div className="col-6 m-t-20">
                                    <h6 className="text-muted">472</h6>
                                    <h6 className=" text-muted f-w-300 m-b-0">
                                        Deals Added<span className="float-right f-w-400">69%</span>
                                    </h6>
                                    <div className="progress m-t-10" style={{ height: '7px' }}>
                                        <div
                                            className="progress-bar progress-c-theme"
                                            role="progressbar"
                                            style={{ width: '69%' }}
                                            aria-valuenow="69"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                                <div className="col-6 m-t-20">
                                    <h6 className="text-muted">89</h6>
                                    <h6 className=" text-muted f-w-300 m-b-0">
                                        Deals Won<span className="float-right f-w-400">58%</span>
                                    </h6>
                                    <div className="progress m-t-10" style={{ height: '7px' }}>
                                        <div
                                            className="progress-bar progress-c-theme2"
                                            role="progressbar"
                                            style={{ width: '58%' }}
                                            aria-valuenow="58"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Filter</Card.Title>
                            <Card.Text>Distance Filter</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <h3 className="f-w-300">4 - 25 Miles</h3>
                            <div className="row m-t-30">
                                <div className="col-6 p-r-0">
                                    <Link to="#" className="btn btn-primary text-uppercase btn-block">
                                        add friend
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link to="#" className="btn text-uppercase border btn-block btn-outline-secondary">
                                        message
                                    </Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body className="border-bottom">
                            <div className="row d-flex align-items-center">
                                <div className="col-auto">
                                    <i className="feather icon-zap f-30 text-c-green" />
                                </div>
                                <div className="col">
                                    <h3 className="f-w-300">235</h3>
                                    <span className="d-block text-uppercase">total ideas</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="row d-flex align-items-center">
                                <div className="col-auto">
                                    <i className="feather icon-map-pin f-30 text-c-blue" />
                                </div>
                                <div className="col">
                                    <h3 className="f-w-300">26</h3>
                                    <span className="d-block text-uppercase">total locations</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body className="border-bottom">
                            <div className="row d-flex align-items-center">
                                <div className="col-auto">
                                    <i className="feather icon-sun f-40 text-c-green" />
                                </div>
                                <div className="col">
                                    <h2 className="f-w-300">
                                        26°<span className=" m-r-3 f-14 text-muted">Sunny</span>
                                    </h2>
                                    <span className="d-block text-muted">Monday 12:00 PM</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="row d-flex align-items-center">
                                <div className="col-sm-12 pt-2 pb-1">
                                    <span className="">Wind</span>
                                    <span className="float-right text-muted ">ESE 14 mph</span>
                                </div>
                                <div className="col-sm-12 pt-2 pb-1">
                                    <span className="">Humidity</span>
                                    <span className="float-right text-muted ">78%</span>
                                </div>
                                <div className="col-sm-12 pt-2">
                                    <span className="">Pressure</span>
                                    <span className="float-right text-muted ">27.64 in</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="theme-bg2">
                        <Card.Body>
                            <div className="row d-flex align-items-center">
                                <div className="col-auto">
                                    <i className="feather icon-sun f-40 text-white" />
                                </div>
                                <div className="col">
                                    <h2 className="f-w-300 text-white">
                                        26°<span className=" m-r-3 f-14 text-white">Sunny</span>
                                    </h2>
                                    <span className="d-block text-white">Monday 12:00 PM</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="table-card">
                        <Card.Body className="p-0">
                            <div className="row-table">
                                <div className="col-auto theme-bg text-white p-t-50 p-b-50">
                                    <i className="feather icon-package f-30"></i>
                                </div>
                                <div className="col text-center">
                                    <span className="text-uppercase d-block m-b-10">New Products</span>
                                    <h3 className="f-w-300">235</h3>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="rides-bar">
                        <Card.Body>
                            <div className="row d-flex align-items-center">
                                <div className="col-auto">
                                    <i className="feather icon-shopping-cart f-30 text-white rides-icon"></i>
                                </div>
                                <div className="col">
                                    <h3 className="f-w-300">383 Rides</h3>
                                    <span className="d-block">
                                        Last week 295 <strong className="text-c-green f-w-300">(+88)</strong>
                                    </span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
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
                <Col md={6} xl={4}>
                    <Card className="impression">
                        <Card.Body>
                            <div className="row d-flex align-items-center">
                                <div className="col-auto">
                                    <i className="feather icon-map-pin f-30 text-c-blue" />
                                </div>
                                <div className="col text-right">
                                    <h3 className="f-w-300">235</h3>
                                    <h5 className="d-block text-uppercase text-muted">Impression</h5>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="theme-bg">
                        <Card.Body>
                            <div className="row">
                                <div className="col text-center">
                                    <h3 className="text-white f-w-300 m-b-10">598</h3>
                                    <span className="text-white text-uppercase">Pending Users</span>
                                </div>
                                <div className="col text-right">
                                    <span className="text-white d-block  p-1">Last Month</span>
                                    <span className="text-white d-block  p-1">204</span>
                                    <span className="text-white d-flex align-items-center justify-content-end  p-1">
                                        <i className="fa fa-caret-up text-white f-26 m-r-10" /> 56.68%
                                    </span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
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
                <Col md={6} xl={4}>
                    <Card className="theme-bg">
                        <Card.Body>
                            <h4 className="text-white text-uppercase text-center">Savings Account</h4>
                            <div className="row m-t-10 p-t-20">
                                <div className="col text-center">
                                    <h4 className="text-white f-w-300">$2,456.78</h4>
                                    <p className="text-white d-block">Balance</p>
                                </div>

                                <div className="col text-center">
                                    <h4 className="text-white  f-w-300">$867.00</h4>
                                    <p className="text-white d-block">Expenses</p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="profit-bar">
                        <Card.Body>
                            <div className="row">
                                <div className="col">
                                    <h5 className="f-w-300">Total Profit</h5>
                                    <h3 className="text-c-green f-w-400 m-t-10">$1,783</h3>
                                </div>
                                <div className="col">
                                    <i className="fa fa-credit-card f-20 text-white float-right" />
                                </div>
                            </div>
                            <h6 className="m-t-20 text-muted">
                                <span className="badge theme-bg  text-white m-r-10">+11%</span>From Previous Month{' '}
                            </h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="theme-bg2 assets-value">
                        <Card.Body className="p-0">
                            <div className="bg-img" />
                            <div className="card-block text-center">
                                <i className="fa fa-chart-line text-white f-40 m-b-20" />
                                <h5 className="text-white m-b-12">Total Growth</h5>
                                <h3 className="text-white f-w-300">2,80,500</h3>
                                <span className="text-white">80% More than last Month</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="theme-bg assets-value">
                        <Card.Body className="text-center">
                            <i className="fa fa-users f-50 text-white m-b-20" />
                            <h5 className="text-white m-b-15">Total Assets</h5>
                            <h3 className="text-white f-w-300">3,85,600</h3>
                            <span className="text-white">60% More than last Month</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Project Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-6">
                                    <h2 className="f-w-300 d-flex align-items-center float-left">
                                        4.3 <i className="fa fa-star f-12 m-l-10 text-c-yellow" />
                                    </h2>
                                </div>
                                <div className="col-6">
                                    <h6 className="f-w-300 d-flex  align-items-center float-right">
                                        0.4 <i className="fa fa-caret-up text-c-green f-24 m-l-10" />
                                    </h6>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title className="m-0">Overdue Tasks</Card.Title>
                        </Card.Header>
                        <Card.Body className="border-bottom">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <h2 className="f-w-300 m-0">34</h2>
                                    <span className="text-muted">Last Week 60%</span>
                                </div>
                                <div className="col-4 text-right">
                                    <h5 className="text-c-red f-w-400">10%</h5>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title className="m-0">Tasks to Do</Card.Title>
                        </Card.Header>
                        <Card.Body className="border-bottom">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <h2 className="f-w-300 m-0">25</h2>
                                    <span className="text-muted">Last Week 40%</span>
                                </div>
                                <div className="col-4 text-right">
                                    <h5 className="text-c-green f-w-400">30%</h5>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title className="m-0">Completed Task</Card.Title>
                        </Card.Header>
                        <Card.Body className="border-bottom">
                            <div className="row align-items-center">
                                <div className="col-8">
                                    <h2 className="f-w-300 m-0">19</h2>
                                    <span className="text-muted">Last Week 60%</span>
                                </div>
                                <div className="col-4 text-right">
                                    <h5 className="text-c-red f-w-400">25%</h5>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} xl={4}>
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
                <Col md={6} xl={4}>
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
                <Col md={6} xl={4}>
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
                    <Card>
                        <Card.Body>
                            <h5>Your Total Charges</h5>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-6">
                                    <h3 className="f-w-300 m-t-20">$894.39</h3>
                                    <span>August 31,2017</span>
                                </div>
                                <div className="col-6">
                                    <Link to="#" className="btn btn-primary shadow-2 text-uppercase btn-block">
                                        Pay now
                                    </Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h5>Growth Rate</h5>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-6">
                                    <h2 className="f-w-300 m-t-20">48%</h2>
                                </div>
                                <div className="col-6 text-right">
                                    <i className="fa fa-chart-pie f-30 text-c-green" />
                                </div>
                            </div>
                            <span className="text-muted text-center d-block">From Last Month</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h5 className="mb-4">Your Portfolio Balance</h5>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h3 className="f-w-300">$193,700</h3>
                                </div>
                                <div className="col-auto">
                                    <span className="text-c-green f-18">
                                        15% <i className="feather icon-arrow-up-right f-20" />
                                    </span>
                                </div>
                            </div>
                            <div className="row m-t-25">
                                <div className="col-6">
                                    <Link to="#" className="btn btn-primary  text-uppercase btn-block">
                                        Deposit
                                    </Link>
                                </div>
                                <div className="col-6 p-l-0">
                                    <Link to="#" className="btn text-uppercase border btn-block btn-outline-secondary">
                                        withdraw
                                    </Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h5 className="text-center">Total Leads</h5>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-auto">
                                    <h3 className="f-w-300 m-t-20">
                                        $59,48
                                        <i className="fa fa-caret-up text-c-green f-26 m-l-10" />
                                    </h3>
                                    <span>EARNINGS</span>
                                </div>
                                <div className="col text-right">
                                    <i className="fa fa-chart-pie f-30 text-c-purple" />
                                </div>
                            </div>
                            <div className="leads-progress mt-3">
                                <h6 className="mb-3 text-center">
                                    Organic <span className="ml-4">Purchesed</span>
                                </h6>
                                <div className="progress">
                                    <div
                                        className="progress-bar progress-c-theme2"
                                        role="progressbar"
                                        style={{ width: '30%', height: '10px' }}
                                        aria-valuenow="30"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    />
                                    <div
                                        className="progress-bar progress-c-theme"
                                        role="progressbar"
                                        style={{ width: '36%', height: '10px' }}
                                        aria-valuenow="35"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    />
                                </div>
                                <h6 className="text-muted f-w-300 mt-4">
                                    Organic Leads <span className="float-right">340</span>
                                </h6>
                                <h6 className="text-muted f-w-300 mt-4">
                                    Purchesed Leads <span className="float-right">150</span>
                                </h6>
                                <h6 className="text-muted f-w-300 mt-4">
                                    Blocked Leads <span className="float-right">120</span>
                                </h6>
                                <h6 className="text-muted f-w-300 mt-4 mb-0">
                                    Buy Leads <span className="float-right">245</span>
                                </h6>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="Active-visitor">
                        <Card.Body className="text-center">
                            <h5 className="mb-4">Active Visitor</h5>
                            <i className="fa fa-users f-30 text-c-green"></i>
                            <h2 className="f-w-300 mt-3">1,285</h2>
                            <span className="text-muted">Active Visit On Sites</span>
                            <div className="progress mt-4 m-b-40">
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
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h5 className="text-center">Total Leads</h5>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-auto">
                                    <h3 className="f-w-300 m-t-20">
                                        $73,48
                                        <i className="fa fa-caret-up text-c-green f-26 m-l-10" />
                                    </h3>
                                    <span>EARNINGS</span>
                                </div>
                                <div className="col text-right">
                                    <i className="fa fa-chart-line f-40 text-c-purple" />
                                </div>
                            </div>
                            <div className="leads-progress mt-3">
                                <h6 className="mb-3 text-center">
                                    Quality <span className="ml-4">Delivery</span>
                                </h6>
                                <div className="progress">
                                    <div
                                        className="progress-bar progress-c-theme"
                                        role="progressbar"
                                        style={{ width: '30%', height: '10px' }}
                                        aria-valuenow="30"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    />
                                    <div
                                        className="progress-bar progress-c-theme2"
                                        role="progressbar"
                                        style={{ width: '35%', height: '10px' }}
                                        aria-valuenow="35"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    />
                                </div>
                                <h6 className="text-muted f-w-300 mt-4">
                                    Total Cost <span className="float-right">340</span>
                                </h6>
                                <h6 className="text-muted f-w-300 mt-4">
                                    Quality Of Product <span className="float-right">65%</span>
                                </h6>
                                <h6 className="text-muted f-w-300 mt-4">
                                    Delivery Period <span className="float-right">4 Days</span>
                                </h6>
                                <h6 className="text-muted f-w-300 mt-4 mb-0">
                                    Buy Product <span className="float-right">245</span>
                                </h6>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} xl={4}>
                    <Card className="theme-bg">
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h4 className="text-white">Profit</h4>
                                </div>
                                <div className="col">
                                    <h2 className="text-white text-right f-w-300">$3,764</h2>
                                </div>
                            </div>
                            <div className="m-t-50">
                                <h6 className="text-white">
                                    Monthly Profit <span className="float-right text-white">$340</span>
                                </h6>
                                <h6 className="text-white mt-3">
                                    Weekly Profit <span className="float-right text-whitw">$150</span>
                                </h6>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="theme-bg card-Revenue">
                        <Card.Body>
                            <h5 className="text-white">Total Revenue</h5>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-auto">
                                    <i className="feather icon-file-text f-30 text-white"></i>
                                </div>
                                <div className="col">
                                    <div className="float-right text-white mr-4">
                                        <h6 className="text-white mb-2">This Month</h6>
                                        <span className="d-block mb-2">$2018</span>
                                        <span>+175 (22.5%)</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="theme-bg Invoice-bar">
                        <Card.Body>
                            <div className="invoice-lable text-right">
                                <span>
                                    <label className="label f-14">monthly</label>
                                </span>
                            </div>
                            <div className="row">
                                <div className="col-auto">
                                    <i className="fa fa-file-alt f-30 text-white" />
                                </div>
                                <div className="col">
                                    <h5 className="text-white">Invoices</h5>
                                    <h3 className="text-white">450</h3>
                                    <div className="progress mt-3">
                                        <div
                                            className="progress-bar bg-white"
                                            role="progressbar"
                                            style={{ width: '50%', height: '7px' }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="theme-bg location-sale">
                        <Card.Body>
                            <i className="card-icon fa fa-map-marker text-c-purple f-30" />
                            <h5 className="text-white mt-3">
                                Location Sale{' '}
                                <span className="float-right">
                                    23% <i className="fa fa-arrow-down text-white" />
                                </span>
                            </h5>
                            <h3 className="text-white d-flex align-items-center justify-content-between m-t-50 mb-0">
                                $1372,05 <span className="float-right f-16">+ $23,13 (12%)</span>
                            </h3>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="card-Impression">
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h5 className="mb-3">Impression</h5>
                                    <h3 className="mb-2 f-w-300">1,563</h3>
                                    <span className="text-muted">May 23 - June 01 (2017)</span>
                                </div>
                                <div className="col-auto">
                                    <i className="fa fa-eye text-white f-20" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="card-Impression">
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h5 className="mb-3">Sales Prediction</h5>
                                    <h3 className="mb-2 f-w-300">2,013</h3>
                                    <span className="text-muted">July 01 - June 01 (2016)</span>
                                </div>
                                <div className="col-auto">
                                    <i className="fa fa-shopping-cart text-white f-20" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="card-Impression">
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h5 className="mb-3">Email Sent</h5>
                                    <h3 className="mb-2 f-w-300">1,563</h3>
                                    <span className="text-muted">Sep 23 - Nov 06 (2015)</span>
                                </div>
                                <div className="col-auto">
                                    <i className="fa fa-envelope text-white f-20" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="card-customer">
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h2 className="mb-2 f-w-300">3210</h2>
                                    <h5 className="text-muted mb-0">Happy Customer</h5>
                                </div>
                                <div className="col-auto">
                                    <i className="feather icon-users f-30 text-white theme-bg" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="card-customer">
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h2 className="mb-2 f-w-300">432</h2>
                                    <h5 className="text-muted mb-0">Award Winning</h5>
                                </div>
                                <div className="col-auto">
                                    <i className="feather icon-award f-30 text-white theme-bg2" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="card-customer">
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h2 className="mb-2 f-w-300">4230</h2>
                                    <h5 className="text-muted mb-0">Project Completed</h5>
                                </div>
                                <div className="col-auto">
                                    <i className="feather icon-check-square f-30 text-white theme-bg" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="theme-bg2 ticket-customer">
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-auto">
                                    <h2 className="text-white mb-0 f-w-300">286</h2>
                                </div>
                                <div className="col">
                                    <span className="text-white d-block">+134</span>
                                    <span className="text-white">Since last week</span>
                                </div>
                            </div>
                            <h5 className="text-white f-w-300 mt-4">Ticket Answered</h5>
                            <i className="fa fa-file-alt text-white f-70" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body className="ticket-visitor">
                            <h3 className="mb-2">7210</h3>
                            <h5 className="text-muted f-w-300 mb-4">Visitors</h5>
                            <div className="progress">
                                <div
                                    className="progress-bar progress-c-theme2"
                                    role="progressbar"
                                    style={{ width: '72%', height: '13px' }}
                                    aria-valuenow="72"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    72%
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="theme-bg2">
                        <Card.Body className="customer-visitor">
                            <h2 className="text-white text-right mt-2 f-w-300">3254</h2>
                            <span className="text-white text-right d-block">Customers</span>
                            <i className="fa fa-globe text-white" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="card-social">
                        <Card.Body className="border-bottom">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-auto">
                                    <i className="fab fa-facebook-f text-primary f-36" />
                                </div>
                                <div className="col text-right">
                                    <h3>12,281</h3>
                                    <h5 className="text-c-green mb-0">
                                        +7.2% <span className="text-muted">Total Likes</span>
                                    </h5>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="row align-items-center justify-content-center card-active">
                                <div className="col-6">
                                    <h6 className="text-center m-b-10">
                                        <span className="text-muted m-r-5">Target:</span>35,098
                                    </h6>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-c-theme"
                                            role="progressbar"
                                            style={{ width: '60%', height: '6px' }}
                                            aria-valuenow="60"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <h6 className="text-center  m-b-10">
                                        <span className="text-muted m-r-5">Duration:</span>350
                                    </h6>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-c-theme2"
                                            role="progressbar"
                                            style={{ width: '45%', height: '6px' }}
                                            aria-valuenow="45"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="card-social">
                        <Card.Body className="border-bottom">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-auto">
                                    <i className="fab fa-twitter text-c-blue f-36" />
                                </div>
                                <div className="col text-right">
                                    <h3>11,200</h3>
                                    <h5 className="text-c-purple mb-0">
                                        +6.2% <span className="text-muted">Total Likes</span>
                                    </h5>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="row align-items-center justify-content-center card-active">
                                <div className="col-6">
                                    <h6 className="text-center m-b-10">
                                        <span className="text-muted m-r-5">Target:</span>34,185
                                    </h6>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-c-green"
                                            role="progressbar"
                                            style={{ width: '40%', height: '6px' }}
                                            aria-valuenow="40"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <h6 className="text-center  m-b-10">
                                        <span className="text-muted m-r-5">Duration:</span>800
                                    </h6>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-c-blue"
                                            role="progressbar"
                                            style={{ width: '70%', height: '6px' }}
                                            aria-valuenow="70"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="card-social">
                        <Card.Body className="border-bottom">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-auto">
                                    <i className="fab fa-google text-c-red f-36" />
                                </div>
                                <div className="col text-right">
                                    <h3>10,500</h3>
                                    <h5 className="text-c-blue mb-0">
                                        +5.9% <span className="text-muted">Total Likes</span>
                                    </h5>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body>
                            <div className="row align-items-center justify-content-center card-active">
                                <div className="col-6">
                                    <h6 className="text-center m-b-10">
                                        <span className="text-muted m-r-5">Target:</span>25,998
                                    </h6>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-c-theme"
                                            role="progressbar"
                                            style={{ width: '80%', height: '6px' }}
                                            aria-valuenow="80"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <h6 className="text-center  m-b-10">
                                        <span className="text-muted m-r-5">Duration:</span>900
                                    </h6>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-c-theme2"
                                            role="progressbar"
                                            style={{ width: '50%', height: '6px' }}
                                            aria-valuenow="50"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
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
                <Col md={6} xl={4}>
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
                <Col md={6} xl={4}>
                    <Card className="affilate-offers">
                        <Card.Body>
                            <h5>
                                Affiliate{' '}
                                <span className="float-right">
                                    <i className="card-icon fa fa-anchor f-24" />
                                </span>
                            </h5>
                            <h2 className="mt-4 mb-0 d-flex align-items-center justify-content-between f-w-300">
                                3,789 <label className="label theme-bg text-white f-12 f-w-400 float-right">4+</label>
                            </h2>
                            <h6 className="d-flex align-items-center justify-content-center  mt-3">
                                From First week 13.5% <i className="fa fa-caret-up text-c-green f-26 m-l-10" />
                            </h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="affilate-offers">
                        <Card.Body>
                            <h5>
                                Offers
                                <span className="float-right">
                                    <i className="card-icon fa fa-gift f-24" />
                                </span>
                            </h5>
                            <h2 className="mt-4 mb-0 d-flex align-items-center justify-content-between f-w-300">
                                2,586 <label className="label theme-bg text-white f-12 f-w-400 float-right">10+</label>
                            </h2>
                            <h6 className="d-flex align-items-center justify-content-center mt-3">
                                From Last week 15.5% <i className="fa fa-caret-up text-c-green f-26 m-l-10" />
                            </h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
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
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h2 className="mb-3 f-w-300">$894.39</h2>
                            <h5 className="text-muted">
                                <span className="f-14 mr-1">Deposits:</span>$10,000
                            </h5>
                            <h5 className="mt-3 text-c-blue mb-4">
                                <i className="fa fa-caret-down text-c-blue f-22"></i> 5.2% ($456)
                            </h5>
                            <Link
                                to="#"
                                className="btn btn-primary shadow-2 text-uppercase btn-block"
                                style={{ maxWidth: '150px', margin: '0 auto' }}
                            >
                                add funds
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="theme-bg earning-date">
                        <Card.Header className="borderless">
                            <Card.Title as="h5" className="text-white">
                                Page View
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example bd-example-tabs">
                                <Tab.Container id="left-tabs-example" defaultActiveKey="mon">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="mon">
                                            <h2 className="text-white mb-3 f-w-300">
                                                9,456<i className="feather icon-arrow-up"></i>
                                            </h2>
                                            <span className="text-white mb-4 d-block">TOTAL VIEWS</span>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tue">
                                            <h2 className="text-white mb-3 f-w-300">
                                                8,568<i className="feather icon-arrow-down"></i>
                                            </h2>
                                            <span className="text-white mb-4 d-block">TOTAL VIEWS</span>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="wed">
                                            <h2 className="text-white mb-3 f-w-300">
                                                3,756<i className="feather icon-arrow-up"></i>
                                            </h2>
                                            <span className="text-white mb-4 d-block">TOTAL VIEWS</span>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="thu">
                                            <h2 className="text-white mb-3 f-w-300">
                                                9,635<i className="feather icon-arrow-up"></i>
                                            </h2>
                                            <span className="text-white mb-4 d-block">TOTAL VIEWS</span>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="fri">
                                            <h2 className="text-white mb-3 f-w-300">
                                                23,486<i className="feather icon-arrow-down"></i>
                                            </h2>
                                            <span className="text-white mb-4 d-block">TOTAL VIEWS</span>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sat">
                                            <h2 className="text-white mb-3 f-w-300">
                                                86,789<i className="feather icon-arrow-up"></i>
                                            </h2>
                                            <span className="text-white mb-4 d-block">TOTAL VIEWS</span>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="sun">
                                            <h2 className="text-white mb-3 f-w-300">
                                                93,628<i className="feather icon-arrow-down"></i>
                                            </h2>
                                            <span className="text-white mb-4 d-block">TOTAL VIEWS</span>
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
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Miami, Florida</Card.Title>
                        </Card.Header>
                        <Card.Body className="sale-view">
                            <h3>14,678</h3>
                            <h6 className="text-muted">USD</h6>
                            <span className="text-muted">Today’s Sales</span>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <BarChart width={100} height={80} data={dataSaleView}>
                                        <Bar barSize={3} dataKey="a" fill="#04a9f5" />
                                    </BarChart>
                                </div>
                                <div className="col-auto text-right">
                                    <i className="fas fa-dollar-sign f-30 text-white theme-bg" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Silje Larsen</Card.Title>
                        </Card.Header>
                        <Card.Body className="sale-view">
                            <h3>15,678</h3>
                            <h6 className="text-muted">USD</h6>
                            <span className="text-muted">Weekly Sales</span>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <BarChart width={100} height={80} data={dataSaleView}>
                                        <Bar barSize={3} dataKey="a" fill="#1de9b6" />
                                    </BarChart>
                                </div>
                                <div className="col-auto text-right">
                                    <i className="fab fa-bitcoin f-30 text-white theme-bg" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Ida Jorgensen</Card.Title>
                        </Card.Header>
                        <Card.Body className="sale-view">
                            <h3>50,853</h3>
                            <h6 className="text-muted">USD</h6>
                            <span className="text-muted">Monthly Sales</span>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <BarChart width={100} height={80} data={dataSaleView}>
                                        <Bar barSize={3} dataKey="a" fill="#ff5252" />
                                    </BarChart>
                                </div>
                                <div className="col-auto text-right">
                                    <i className="fa fa-database f-30 text-white theme-bg" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="project-task">
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h5 className="m-0">
                                        <i className="fa fa-edit m-r-10" />
                                        Project Task
                                    </h5>
                                </div>
                                <div className="col-auto">
                                    <label className="label theme-bg text-white f-14 f-w-400 float-right">23% Done</label>
                                </div>
                            </div>
                            <h6 className="text-muted mt-4 mb-3">Complete Task : 6/10</h6>
                            <div className="progress">
                                <div
                                    className="progress-bar progress-c-theme"
                                    role="progressbar"
                                    style={{ width: '60%', height: '6px' }}
                                    aria-valuenow="60"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                            <h6 className="mt-3 mb-0 text-center text-muted">Project Team : 28 Persons</h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h5 className="mb-4">Sales Statistics</h5>
                            <h3 className="mb-4">23,0598</h3>
                            <span className="text-muted d-block">Top selling items statistic by last month</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="card-event">
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h5 className="m-0">Upcoming Event</h5>
                                </div>
                                <div className="col-auto">
                                    <label className="label theme-bg2 text-white f-14 f-w-400 float-right">34%</label>
                                </div>
                            </div>
                            <h2 className="mt-2 f-w-300">
                                45<sub className="text-muted f-14">Competitors</sub>
                            </h2>
                            <h6 className="text-muted mt-3 mb-0">You can participate in event </h6>
                            <i className="fab fa-angellist text-c-purple f-50" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="theme-bg bitcoin-wallet">
                        <Card.Body>
                            <h5 className="text-white mb-2">Bitcoin Wallet</h5>
                            <h2 className="text-white mb-3 f-w-300">$9,302</h2>
                            <span className="text-white d-block">Ratings by Market Capitalization</span>
                            <i className="fab fa-btc f-70 text-white" />
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
                <Col md={6} xl={4}>
                    <Card className="bg-c-blue bitcoin-wallet">
                        <Card.Body>
                            <h5 className="text-white mb-2">Bitcoin Wallet</h5>
                            <h2 className="text-white mb-3 f-w-300">$7,501</h2>
                            <span className="text-white d-block">Ratings by Market Capitalization</span>
                            <i className="fas fa-pound-sign f-70 text-white" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h5 className="m-b-30">Product Summary</h5>
                            <div className="media summary-box mb-4">
                                <div className="photo-table">
                                    <h3 className="m-0 f-w-300">
                                        $1935.26 <i className="fa fa-caret-up text-c-green f-26 m-l-8" />
                                    </h3>
                                    <span>Profit</span>
                                </div>
                                <div className="media-body">
                                    <i className="card-icon feather icon-download float-right f-34" />
                                </div>
                            </div>
                            <div className="media summary-box mb-4">
                                <div className="photo-table">
                                    <h3 className="m-0 f-w-300">
                                        $2356.42 <i className="fa fa-caret-up text-c-green f-26 m-l-8" />
                                    </h3>
                                    <span>Invoiced</span>
                                </div>
                                <div className="media-body">
                                    <i className="card-icon feather icon-download float-right f-34" />
                                </div>
                            </div>
                            <div className="media summary-box mb-4">
                                <div className="photo-table">
                                    <h3 className="m-0 f-w-300">
                                        $4683.96 <i className="fa fa-caret-down text-c-red f-26 m-l-8" />
                                    </h3>
                                    <span>Expenses</span>
                                </div>
                                <div className="media-body">
                                    <i className="card-icon feather icon-download float-right f-34" />
                                </div>
                            </div>
                            <Link
                                to="#"
                                className="btn btn-primary shadow-2 text-uppercase btn-block"
                                style={{ maxWidth: '150px', margin: '0 auto' }}
                            >
                                add friend
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="statistial-visit">
                        <Card.Header>
                            <Card.Title as="h5">Statistical</Card.Title>
                            <Card.Text className="text-muted d-block">Status : live</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <h3 className="f-w-300">4,445,701</h3>
                            <span className="d-block">
                                <i className="fa fa-map-marker m-r-10" />
                                256 Countries, 5667 Cites{' '}
                            </span>
                            <div className="media mt-4">
                                <div className="photo-table">
                                    <h6> Our Overseas visits</h6>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-c-theme"
                                            role="progressbar"
                                            style={{ width: '60%', height: '6px' }}
                                            aria-valuenow="60"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <label className="label theme-bg text-white f-14 f-w-400 float-right">14%</label>
                                </div>
                            </div>
                            <div className="media mt-4">
                                <div className="photo-table">
                                    <h6> Our Overseas visits</h6>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-c-theme2"
                                            role="progressbar"
                                            style={{ width: '60%', height: '6px' }}
                                            aria-valuenow="60"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <label className="label theme-bg2 text-white f-14 f-w-400 float-right">14%</label>
                                </div>
                            </div>
                            <div className="media mt-4">
                                <div className="photo-table">
                                    <h6> Our Overseas visits</h6>
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-c-blue"
                                            role="progressbar"
                                            style={{ width: '60%', height: '6px' }}
                                            aria-valuenow="60"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <label className="label bg-c-blue text-white f-14 f-w-400 float-right">14%</label>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Markets</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="media">
                                <div className="photo-table">
                                    <h6 className="text-muted">
                                        Dash/USD<span className="text-c-green ml-3">2.56%</span>
                                    </h6>
                                    <h6>
                                        1,0452 <span className="ml-2"> USD</span>
                                    </h6>
                                </div>
                                <div className="media-body">
                                    <span className="float-right">
                                        <LineChart width={100} height={40} data={dataMarketsView}>
                                            <Line dataKey="a" dot={false} stroke="#1DE3BE" strokeWidth={3} />
                                        </LineChart>
                                    </span>
                                </div>
                            </div>
                            <div className="media mt-4">
                                <div className="photo-table">
                                    <h6 className="text-muted">
                                        ETH/USD<span className="text-c-red ml-3">-0.87%</span>
                                    </h6>
                                    <h6>
                                        0,0157<span className="ml-2"> USD</span>
                                    </h6>
                                </div>
                                <div className="media-body">
                                    <span className="float-right">
                                        <LineChart width={100} height={40} data={dataMarketsView}>
                                            <Line dataKey="a" dot={false} stroke="#FF4962" strokeWidth={3} />
                                        </LineChart>
                                    </span>
                                </div>
                            </div>
                            <div className="media mt-4">
                                <div className="photo-table">
                                    <h6 className="text-muted">
                                        ZEC/USD<span className="text-c-purple ml-3">1.56%</span>
                                    </h6>
                                    <h6>
                                        2,0764<span className="ml-2"> USD</span>
                                    </h6>
                                </div>
                                <div className="media-body">
                                    <span className="float-right">
                                        <LineChart width={100} height={40} data={dataMarketsView}>
                                            <Line dataKey="a" dot={false} stroke="#8C9CD4" strokeWidth={3} />
                                        </LineChart>
                                    </span>
                                </div>
                            </div>
                            <div className="media mt-4">
                                <div className="photo-table">
                                    <h6 className="text-muted">
                                        BTC/USD<span className="text-c-green ml-3">2.56%</span>
                                    </h6>
                                    <h6>
                                        1,0452<span className="ml-2"> USD</span>
                                    </h6>
                                </div>
                                <div className="media-body">
                                    <span className="float-right">
                                        <LineChart width={100} height={40} data={dataMarketsView}>
                                            <Line dataKey="a" dot={false} stroke="#1DE3BE" strokeWidth={3} />
                                        </LineChart>
                                    </span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h3 className="text-c-green">2,02,150</h3>
                                    <h5>Total Orders</h5>
                                </div>
                                <div className="col text-right">
                                    <img src={shape1} style={{ width: '80px' }} alt="activity-user" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h3 className="text-c-red">8940</h3>
                                    <h5>New Orders</h5>
                                </div>
                                <div className="col text-right">
                                    <img src={shape2} style={{ width: '80px' }} alt="activity-user" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h3 className="text-c-green">$52,510</h3>
                                    <h5>Total Revenue</h5>
                                </div>
                                <div className="col text-right">
                                    <img src={shape3} style={{ width: '80px' }} alt="activity-user" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="theme-bg">
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-auto">
                                    <img src={shape4} alt="activity-user" />
                                </div>
                                <div className="col">
                                    <h2 className="text-white f-w-300">520</h2>
                                    <h5 className="text-white">All Properties</h5>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
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
                <Col md={6} xl={4}>
                    <Card className="theme-bg">
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-auto">
                                    <img src={shape6} alt="activity-user" />
                                </div>
                                <div className="col">
                                    <h2 className="text-white f-w-300">$874</h2>
                                    <h5 className="text-white">Total Earnings</h5>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default WidgetStatistic;
