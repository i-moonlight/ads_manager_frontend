import React from 'react';
import { Row, Col, Card, Tabs, Tab, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';

import AmChartReplay from './chart/AmChartReplay';
import AmChartStatistics5 from './chart/AmChartStatistics5';

const DashProject = () => {
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
                        <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" />
                    </Link>
                </div>
                <div className="media-body">
                    <h6 className="m-0 d-inline">Julie Vad</h6>
                    <span className="float-right d-flex  align-items-center">
                        <i className="fa fa-caret-up f-22 m-r-10 text-c-green" />
                        3544
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
                <Col xl={4}>
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
                            <i className="fa fa-angellist text-c-purple f-50" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Reply</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="reply-price">
                                <h3 className="f-w-300">2.43 h</h3>
                                <span className="text-uppercase">average time for first reply</span>
                            </div>
                            <AmChartReplay height="270px" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartStatistics5 height="245px" />
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
                <Col xl={4} className="m-b-30 user-activity">
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
                <Col xl={4}>
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
                <Col sm={12}>
                    <Card className="user-list">
                        <Card.Header>
                            <Card.Title as="h5">User Project List</Card.Title>
                        </Card.Header>
                        <Card.Body className="pb-0">
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Project</th>
                                        <th>Completed</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" />
                                        </td>
                                        <td>
                                            <h6 className="mb-1">Social Media App</h6>
                                            <p className="m-0">
                                                Assigned to<span className="text-c-green"> Tristan Madsen</span>
                                            </p>
                                        </td>
                                        <td>
                                            <span className="pie_1">326,134</span>
                                        </td>
                                        <td>
                                            <h6 className="m-0">68%</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0">October 26, 2017</h6>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" />
                                        </td>
                                        <td>
                                            <h6 className="mb-1">Newspaper Wordpress Web</h6>
                                            <p className="m-0">
                                                Assigned to<span className="text-c-green"> Marcus Poulsen</span>
                                            </p>
                                        </td>
                                        <td>
                                            <span className="pie_2">110,134</span>
                                        </td>
                                        <td>
                                            <h6 className="m-0">46%</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0">September 4, 2017</h6>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" />
                                        </td>
                                        <td>
                                            <h6 className="mb-1">Dashboard UI Kit Design</h6>
                                            <p className="m-0">
                                                Assigned to<span className="text-c-green"> Felix Johansen</span>
                                            </p>
                                        </td>
                                        <td>
                                            <span className="pie_3">226,134</span>
                                        </td>
                                        <td>
                                            <h6 className="m-0">31%</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0">November 14, 2017</h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" />
                                        </td>
                                        <td>
                                            <h6 className="mb-1">Social Media App</h6>
                                            <p className="m-0">
                                                Assigned to<span className="text-c-green"> Tristan Madsen</span>
                                            </p>
                                        </td>
                                        <td>
                                            <span className="pie_4">500,134</span>
                                        </td>
                                        <td>
                                            <h6 className="m-0">85%</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0">December 14, 2017</h6>
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

export default DashProject;
