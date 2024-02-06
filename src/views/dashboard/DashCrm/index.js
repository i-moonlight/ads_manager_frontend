import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BarChart, Bar, LineChart, Line } from 'recharts';

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';

import AmChartNewsStatistics from './chart/AmChartNewsStatistics';
import AmChartPhoneCalls from './chart/AmChartPhoneCalls';

const dataSaleView = [{ a: 10 }, { a: 20 }, { a: 10 }, { a: 27 }, { a: 10 }, { a: 20 }, { a: 15 }];

const dataMarketsView = [{ a: 10 }, { a: 20 }, { a: 10 }, { a: 27 }, { a: 10 }, { a: 20 }, { a: 15 }];

const DashCrm = () => {
    const tabContent = (
        <React.Fragment>
            <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                <div className="m-r-10 photo-table">
                    <Link to="#">
                        <img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" />
                    </Link>
                </div>
                <div className="media-body">
                    <h6 className="m-0 d-inline">Silje Larsen</h6>
                    <span className="float-right d-flex  align-items-center">
                        <i className="fa fa-caret-up f-22 m-r-10 text-c-green" />
                        3784
                    </span>
                </div>
            </div>
            <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                <div className="m-r-10 photo-table">
                    <Link to="#">
                        <img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" />
                    </Link>
                </div>
                <div className="media-body">
                    <h6 className="m-0 d-inline">Storm Hanse</h6>
                    <span className="float-right d-flex  align-items-center">
                        <i className="fa fa-caret-down f-22 m-r-10 text-c-red" />
                        2739
                    </span>
                </div>
            </div>
            <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                <div className="m-r-10 photo-table">
                    <Link to="#">
                        <img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" />
                    </Link>
                </div>
                <div className="media-body">
                    <h6 className="m-0 d-inline">Frida Thomse</h6>
                    <span className="float-right d-flex  align-items-center">
                        <i className="fa fa-caret-down f-22 m-r-10 text-c-red" />
                        1032
                    </span>
                </div>
            </div>
            <div className="media friendlist-box align-items-center justify-content-center m-b-20">
                <div className="m-r-10 photo-table">
                    <Link to="#">
                        <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" />
                    </Link>
                </div>
                <div className="media-body">
                    <h6 className="m-0 d-inline">Silje Larsen</h6>
                    <span className="float-right d-flex  align-items-center">
                        <i className="fa fa-caret-up f-22 m-r-10 text-c-green" />
                        8750
                    </span>
                </div>
            </div>
            <div className="media friendlist-box align-items-center justify-content-center">
                <div className="m-r-10 photo-table">
                    <Link to="#">
                        <img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" />
                    </Link>
                </div>
                <div className="media-body">
                    <h6 className="m-0 d-inline">Storm Hanse</h6>
                    <span className="float-right d-flex  align-items-center">
                        <i className="fa fa-caret-down f-22 m-r-10 text-c-red" />
                        8750
                    </span>
                </div>
            </div>
        </React.Fragment>
    );
    return (
        <React.Fragment>
            <Row>
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
                                    <BarChart width={100} height={80} data={dataSaleView}>
                                        <Bar barSize={3} dataKey="a" fill="#04a9f5" />
                                    </BarChart>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
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
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">News Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body className="pl-0 pr-0 pb-2">
                            <AmChartNewsStatistics height="225px" />
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
                <Col xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Phone Calls</Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <AmChartPhoneCalls height="380px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8} md={6}>
                    <Card className="Recent-Users">
                        <Card.Header>
                            <Card.Title as="h5">Recent Users</Card.Title>
                        </Card.Header>
                        <Card.Body className="px-0 py-1">
                            <Table responsive hover>
                                <tbody>
                                    <tr className="unread">
                                        <td>
                                            <img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" />
                                        </td>
                                        <td>
                                            <h6 className="mb-1">Isabella Christensen</h6>
                                            <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted">
                                                <i className="fa fa-circle text-c-green f-10 m-r-15" />
                                                11 MAY 12:56
                                            </h6>
                                        </td>
                                        <td>
                                            <Link to="#" className="label theme-bg2 text-white f-12">
                                                Reject
                                            </Link>
                                            <Link to="#" className="label theme-bg text-white f-12">
                                                Approve
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" />
                                        </td>
                                        <td>
                                            <h6 className="mb-1">Mathilde Andersen</h6>
                                            <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted">
                                                <i className="fa fa-circle text-c-red f-10 m-r-15" />
                                                11 MAY 10:35
                                            </h6>
                                        </td>
                                        <td>
                                            <Link to="#" className="label theme-bg2 text-white f-12">
                                                Reject
                                            </Link>
                                            <Link to="#" className="label theme-bg text-white f-12">
                                                Approve
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" />
                                        </td>
                                        <td>
                                            <h6 className="mb-1">Karla Sorensen</h6>
                                            <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted">
                                                <i className="fa fa-circle text-c-green f-10 m-r-15" />9 MAY 17:38
                                            </h6>
                                        </td>
                                        <td>
                                            <Link to="#" className="label theme-bg2 text-white f-12">
                                                Reject
                                            </Link>
                                            <Link to="#" className="label theme-bg text-white f-12">
                                                Approve
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr className="unread">
                                        <td>
                                            <img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" />
                                        </td>
                                        <td>
                                            <h6 className="mb-1">Ida Jorgensen</h6>
                                            <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted f-w-300">
                                                <i className="fa fa-circle text-c-red f-10 m-r-15" />
                                                19 MAY 12:56
                                            </h6>
                                        </td>
                                        <td>
                                            <Link to="#" className="label theme-bg2 text-white f-12">
                                                Reject
                                            </Link>
                                            <Link to="#" className="label theme-bg text-white f-12">
                                                Approve
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6} className="m-b-30 user-activity">
                    <Tabs variant="pills" defaultActiveKey="today" id="uncontrolled-tab-example">
                        <Tab eventKey="today" title="Today">
                            {tabContent}
                        </Tab>
                        <Tab eventKey="week" title="This Week">
                            {tabContent}
                        </Tab>
                        <Tab eventKey="all" title="All">
                            {tabContent}
                        </Tab>
                    </Tabs>
                </Col>
                <Col xl={4}>
                    <Row>
                        <Col md={6} xl={12}>
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
                                                    <Nav.Link eventKey="thu">Thu</Nav.Link>
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
                        <Col md={6} xl={12}>
                            <Card>
                                <Card.Body>
                                    <h2 className="mb-3 f-w-300">$894.39</h2>
                                    <h5 className="text-muted">
                                        <span className="f-14 mr-1">Deposits:</span>$10,000
                                    </h5>
                                    <h5 className="mt-3 text-c-blue mb-4">
                                        <i className="fa fa-caret-down text-c-blue f-22" /> 5.2% ($456)
                                    </h5>
                                    <Button
                                        variant="primary"
                                        className="shadow-2 text-uppercase btn-block"
                                        style={{ maxWidth: '150px', margin: '0 auto' }}
                                    >
                                        add funds
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={4}>
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
                <Col xl={4}>
                    <Row>
                        <Col xl={12} md={6}>
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
                        <Col xl={12} md={6}>
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
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default DashCrm;
