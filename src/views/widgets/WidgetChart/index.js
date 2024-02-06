import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';

import AmChartComment from './chart/AmChartComment';
import AmChartSales from './chart/AmChartSales';
import AmChartStatistics from './chart/AmChartStatistics';
import AmChartStatistics1 from './chart/AmChartStatistics1';
import AmChartStatistics2 from './chart/AmChartStatistics2';
import AmChartStatistics3 from './chart/AmChartStatistics3';
import AmChartStatistics4 from './chart/AmChartStatistics4';
import AmChartStatistics5 from './chart/AmChartStatistics5';
import AmChartStatistics6 from './chart/AmChartStatistics6';
import AmChartStatistics7 from './chart/AmChartStatistics7';
import AmChartStatistics8 from './chart/AmChartStatistics8';
import AmChartStatistics9 from './chart/AmChartStatistics9';
import AmChartStatistics10 from './chart/AmChartStatistics10';
import AmChartStatistics11 from './chart/AmChartStatistics11';
import AmChartNewsStatistics from './chart/AmChartNewsStatistics';
import AmChartWebStatistics from './chart/AmChartWebStatistics';
import AmChartEarnings from './chart/AmChartEarnings';
import AmChartEarnings1 from './chart/AmChartEarnings1';
import AmChartReplay from './chart/AmChartReplay';
import AmChartDevices from './chart/AmChartDevices';
import AmChartUserCard from './chart/AmChartUserCard';
import AmChartYearlySummary from './chart/AmChartYearlySummary';
import AmChartActivity from './chart/AmChartActivity';
import AmChartStats from './chart/AmChartStats';
import AmChartWorldUser from './chart/AmChartWorldUser';
import AmChartPhoneCalls from './chart/AmChartPhoneCalls';
import AmChartAge from './chart/AmChartAge';

import { BarChart, Bar } from 'recharts';

const dataSaleView = [{ a: 10 }, { a: 20 }, { a: 10 }, { a: 27 }, { a: 10 }, { a: 20 }, { a: 15 }];

const WidgetChart = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={4}>
                    <Card className="card-command">
                        <Card.Header>
                            <Card.Title as="h5">Commant</Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <AmChartComment />
                        </Card.Body>
                        <Card.Body>
                            <div className="comment-bar">
                                <h6 className="text-uppercase text-muted">
                                    COMMENTERS<span className="text-uppercase float-right">view all</span>
                                </h6>
                                <div className="row align-items-center justify-content-center mt-4">
                                    <div className="col">
                                        <h6 className="mb-0">
                                            <img
                                                className="rounded-circle mr-2 ml-2"
                                                style={{ width: '40px' }}
                                                src={avatar2}
                                                alt="activity-user text-uppercase"
                                            />
                                            <span className="d-block d-sm-inline-block m-t-10">Ida Jorgensen</span>
                                        </h6>
                                    </div>
                                    <div className="col-auto text-right">
                                        <span className="float-right f-14">3 comments</span>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Sales</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartSales />
                            <div className="row text-center mt-3">
                                <div className="col-sm-12">
                                    <h3 className="f-w-300">184</h3>
                                    <span className="text-uppercase">12 Today</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartStatistics />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartStatistics1 height="350px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card className="theme-bg gradientcolor">
                        <Card.Header className="borderless">
                            <Card.Title as="h5" className="text-white">
                                Statistics
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="p-2 text-center">
                                <Link to="#" className="text-white text-uppercase f-w-400">
                                    Month
                                </Link>
                                <Link to="#" className="btn btn-round bg-white text-uppercase mx-3 px-4 f-w-400">
                                    Week
                                </Link>
                                <Link to="#" className="text-white text-uppercase f-w-400">
                                    Day
                                </Link>
                            </div>
                            <div className="my-3 text-center text-white">
                                <Link to="#" className=" d-block mb-1">
                                    $78.89 <span className="feather icon-arrow-up" />
                                </Link>
                                <span>Week2 +15.44</span>
                            </div>
                            <AmChartStatistics2 />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">News Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body className="pl-0 pr-0 pb-2">
                            <AmChartNewsStatistics height="250px" />
                        </Card.Body>
                        <Card.Body className="border-top">
                            <div className="row">
                                <div className="col text-center">
                                    <span
                                        className="theme-bg d-block rounded-circle mx-auto mb-2"
                                        style={{ width: '10px', height: '10px' }}
                                    />
                                    <h6 className="mb-2">53</h6>
                                    <h6 className="mt-2 mb-0">Sport</h6>
                                </div>
                                <div className="col text-center">
                                    <span
                                        className="theme-bg2 d-block rounded-circle mx-auto mb-2"
                                        style={{ width: '10px', height: '10px' }}
                                    />
                                    <h6 className="mb-2">13</h6>
                                    <h6 className="mt-2 mb-0">Music</h6>
                                </div>
                                <div className="col text-center">
                                    <span
                                        className="bg-c-blue d-block rounded-circle mx-auto mb-2"
                                        style={{ width: '10px', height: '10px' }}
                                    />
                                    <h6 className="mb-2">30</h6>
                                    <h6 className="mt-2 mb-0">Travel</h6>
                                </div>
                                <div className="col text-center">
                                    <span
                                        className="bg-c-red d-block rounded-circle mx-auto mb-2"
                                        style={{ width: '10px', height: '10px' }}
                                    />
                                    <h6 className="mb-2">4</h6>
                                    <h6 className="mt-2 mb-0">News</h6>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartStatistics3 />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartStatistics4 />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card className="bg-c-blue">
                        <Card.Header className="borderless">
                            <Card.Title as="h5" className="text-white">
                                Earnings
                            </Card.Title>
                        </Card.Header>
                        <Card.Body style={{ padding: '0 25px' }}>
                            <div className="earning-text mb-4">
                                <h3 className="mb-3 text-white f-w-300">
                                    $4295.36 <i className="feather icon-arrow-up teal accent-3" />
                                </h3>
                                <span className="text-uppercase text-white d-block">Total Earnings</span>
                            </div>
                            <AmChartEarnings height="300px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Earnings</Card.Title>
                            <Card.Text>Mon 15 - Sun 21</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <div className="earning-price mb-4">
                                <h3 className="m-0 f-w-300">$894.39</h3>
                            </div>
                            <AmChartEarnings1 height="300px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Reply</Card.Title>
                            <Card.Text>Time for first reply</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <div className="reply-price">
                                <h3 className="f-w-300">2.43 h</h3>
                                <span className="text-uppercase">average time for first reply</span>
                            </div>
                            <AmChartReplay height="290px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartStatistics5 height="290px" />
                            <div className="row mb-3">
                                <div className="col">
                                    <span className="mb-1 text-muted d-block">23%</span>
                                    <div className="progress" style={{ height: '5px' }}>
                                        <div
                                            className="progress-bar progress-c-green"
                                            role="progressbar"
                                            style={{ width: '23%' }}
                                            aria-valuenow="23"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <span className="mb-1 text-muted d-block">14%</span>
                                    <div className="progress" style={{ height: '5px' }}>
                                        <div
                                            className="progress-bar progress-c-yellow"
                                            role="progressbar"
                                            style={{ width: '14%' }}
                                            aria-valuenow="14"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <span className="mb-1 text-muted d-block">35%</span>
                                    <div className="progress" style={{ height: '5px' }}>
                                        <div
                                            className="progress-bar progress-c-purple"
                                            role="progressbar"
                                            style={{ width: '35%' }}
                                            aria-valuenow="35"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <span className="mb-1 text-muted d-block">28%</span>
                                    <div className="progress" style={{ height: '5px' }}>
                                        <div
                                            className="progress-bar progress-c-blue"
                                            role="progressbar"
                                            style={{ width: '28%' }}
                                            aria-valuenow="28"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card className="pb-0">
                        <Card.Header>
                            <Card.Title as="h5">Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartStatistics6 height="350px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card className="pb-0">
                        <Card.Header>
                            <Card.Title as="h5">Devices</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartDevices />
                            <div className="row">
                                <div className="col-sm-12 pt-3 pb-3 border-top">
                                    <span className="mr-3">
                                        <i className="feather icon-circle text-c-green  mr-2" />
                                        Desktop
                                    </span>
                                    <span className="float-right">41.6 %</span>
                                </div>
                                <div className="col-sm-12 pt-3 pb-3 border-top">
                                    <span className="mr-3">
                                        <i className="feather icon-circle text-c-blue  mr-2" />
                                        Mobile
                                    </span>
                                    <span className="float-right">32.5 %</span>
                                </div>
                                <div className="col-sm-12 pt-3 border-top">
                                    <span className="mr-3">
                                        <i className="feather icon-circle text-c-purple  mr-2" />
                                        Tablet
                                    </span>
                                    <span className="float-right">25.9 %</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card className="pb-0">
                        <Card.Header>
                            <Card.Title as="h5">
                                <img className="rounded-circle m-r-10" style={{ width: '40px' }} src={avatar3} alt="activity-user" /> Jonas
                                Nielsen
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <h3 className="f-w-300">$359,234</h3>
                            <span className="d-block pt-1 pb-3">TOTAL SAVINGS</span>
                            <AmChartUserCard />
                            <div className="client-name">
                                <div className="row">
                                    <div className="col-sm-12 pt-2 pb-2">
                                        <span className="mr-3">
                                            <i className="feather icon-circle text-c-green  mr-2" />
                                            Main wallet
                                        </span>
                                        <span className="float-right text-muted">$194.42</span>
                                    </div>
                                    <div className="col-sm-12 pt-2 pb-2">
                                        <span className="mr-3">
                                            <i className="feather icon-circle text-c-blue  mr-2" />
                                            Travel
                                        </span>
                                        <span className="float-right text-muted">$86.48</span>
                                    </div>
                                    <div className="col-sm-12 pt-2">
                                        <span className="mr-3">
                                            <i className="feather icon-circle text-c-purple  mr-2" />
                                            Food & Drink
                                        </span>
                                        <span className="float-right text-muted">$23.27</span>
                                    </div>
                                </div>
                            </div>
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
                            <AmChartYearlySummary height="300px" />
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={4} md={6}>
                    <Card className="theme-bg2">
                        <Card.Header className="borderless">
                            <Card.Title as="h5" className="text-white">
                                Stats
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row">
                                <div className="col-md-4 col-6 text-center m-b-10">
                                    <h3 className="text-white f-w-300">932</h3>
                                    <span className="d-block text-white">This Month</span>
                                </div>
                                <div className="col-md-4 col-6 text-center m-b-10">
                                    <h3 className="text-white f-w-300">85</h3>
                                    <span className="d-block text-white">This Week</span>
                                </div>
                                <div className="col-md-4 col-12 text-center m-b-10">
                                    <h3 className="text-white f-w-300">26</h3>
                                    <span className="d-block text-white">Today</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="p-0">
                            <AmChartStats />
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
                        <Card.Body>
                            <AmChartStatistics11 height="350px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartStatistics7 />
                            <div className="row">
                                <div className="col-sm-12 pt-2 pb-2">
                                    <span className="mr-3">
                                        <i className="feather icon-circle text-c-green  mr-2" />
                                        page Views
                                    </span>
                                    <span className="float-right">15.5 %</span>
                                </div>
                                <div className="col-sm-12 pt-2 pb-2">
                                    <span className="mr-3">
                                        <i className="feather icon-circle text-c-blue  mr-2" />
                                        page Clicks
                                    </span>
                                    <span className="float-right">23.5 %</span>
                                </div>
                                <div className="col-sm-12 pt-2">
                                    <span className="mr-3">
                                        <i className="feather icon-circle text-c-purple  mr-2" />
                                        page Likes
                                    </span>
                                    <span className="float-right">36.3 %</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Activity</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartActivity />
                            <div className="row text-center">
                                <div className="col-6">
                                    <h6 className="text-uppercase d-block mb-2">max</h6>
                                    <h3 className="f-w-300">9.376</h3>
                                    <h6>Steps</h6>
                                </div>
                                <div className="col-6">
                                    <h6 className="text-uppercase d-block mb-2">min</h6>
                                    <h3 className="font-weight-light">237</h3>
                                    <h6>Steps</h6>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <h3 className="f-w-300">$894.39</h3>
                        </Card.Body>
                        <Card.Body className="p-0">
                            <AmChartStatistics8 height="300px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Statistics</Card.Title>
                            <Card.Text>Last 6 Months</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <AmChartStatistics9 />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Web Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartWebStatistics />
                            <div className="row">
                                <div className="col-sm-12 pt-3 pb-3 mt-3 border-top">
                                    <span className="mr-3">Sales</span>
                                    <span className="float-right">563 / 735</span>
                                </div>
                                <div className="col-sm-12 pt-3 pb-3 border-top">
                                    <span className="mr-3">Clicks</span>
                                    <span className="float-right">76898 / 95442</span>
                                </div>
                                <div className="col-sm-12 pt-3 pb-3 border-top">
                                    <span className="mr-3">Views</span>
                                    <span className="float-right">3682 / 4235</span>
                                </div>
                                <div className="col-sm-12 pt-3 border-top">
                                    <span className="mr-3">Visits</span>
                                    <span className="float-right">2348 / 3749</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartStatistics10 />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Transactions</Card.Title>
                            <Card.Text>Jun 23 - Jul 23</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col">
                                    <h3 className="f-w-300 mb-0 float-left">$59,48</h3>
                                </div>
                                <div className="col-auto">
                                    <BarChart width={100} height={80} data={dataSaleView}>
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
                                    <BarChart width={100} height={80} data={dataSaleView}>
                                        <Bar barSize={3} dataKey="a" fill="#a389d4" />
                                    </BarChart>
                                    <h3 className="f-w-300 pt-3 mb-0">$80,48</h3>
                                </div>
                                <div className="col-6">
                                    <BarChart width={100} height={80} data={dataSaleView}>
                                        <Bar barSize={3} dataKey="a" fill="#04a9f5" />
                                    </BarChart>
                                    <h3 className="f-w-300 pt-3 mb-0">$40,27</h3>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Transactions</Card.Title>
                            <Card.Text>Jun 23 - Jul 23</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-6">
                                    <BarChart width={100} height={80} data={dataSaleView}>
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
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Users from United States</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartWorldUser height="450px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Phone Calls</Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <AmChartPhoneCalls height="350px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card className="progress-gender">
                        <Card.Header>
                            <Card.Title as="h5">Gender</Card.Title>
                            <Card.Text>325 Employees</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <h6 className="m-b-10">
                                Female <span className="float-right">Male</span>
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
                                    style={{ width: '30%', height: '10px' }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                            <h5 className="f-w-300 m-t-20  text-muted">
                                62%<span className="float-right">28%</span>
                            </h5>
                            <h6 className="m-b-10 m-t-20">
                                Female <span className="float-right">Male</span>
                            </h6>
                            <div className="progress">
                                <div
                                    className="progress-bar progress-c-theme2"
                                    role="progressbar"
                                    style={{ width: '40%', height: '10px' }}
                                    aria-valuenow="40"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                                <div
                                    className="progress-bar progress-c-theme"
                                    role="progressbar"
                                    style={{ width: '30%', height: '10px' }}
                                    aria-valuenow="30"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                            <h5 className="f-w-300 m-t-20  text-muted">
                                60%<span className="float-right">50%</span>
                            </h5>
                            <h6 className="m-b-10 m-t-20">
                                Female <span className="float-right">Male</span>
                            </h6>
                            <div className="progress">
                                <div
                                    className="progress-bar progress-c-theme2"
                                    role="progressbar"
                                    style={{ width: '50%', height: '10px' }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                                <div
                                    className="progress-bar progress-c-theme"
                                    role="progressbar"
                                    style={{ width: '52%', height: '10px' }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                            <h5 className="f-w-300 m-t-20  text-muted">
                                50%<span className="float-right">50%</span>
                            </h5>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card className="progress-gender">
                        <Card.Header>
                            <Card.Title as="h5">Age</Card.Title>
                            <Card.Text>Average 40+</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <AmChartAge height="250px" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default WidgetChart;
