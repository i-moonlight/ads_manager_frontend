import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';

const WidgetTable = () => {
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
    const tabContent1 = (
        <React.Fragment>
            <div className="widget-timeline m-b-25">
                <div className="media">
                    <div className="mr-3 photo-table">
                        <i className="fa fa-circle text-c-green f-10 m-r-10" />
                        <Link to="#">
                            <img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="chat-user" />
                        </Link>
                    </div>
                    <div className="media-body">
                        <h6 className="d-inline-block">The Quick Brown Fox Jumps</h6>
                        <p className="m-b-0 text-muted">Lorem Ipsum is simply dummy text of…</p>
                    </div>
                </div>
            </div>
            <div className="widget-timeline m-b-25">
                <div className="media">
                    <div className="mr-3 photo-table">
                        <i className="fa fa-circle text-c-yellow f-10 m-r-10" />
                        <Link to="#">
                            <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="chat-user" />
                        </Link>
                    </div>
                    <div className="media-body">
                        <h6 className="d-inline-block">Over The Lazy Dog</h6>
                        <p className="m-b-0 text-muted">Lorem Ipsum is simply dummy text of…</p>
                    </div>
                </div>
            </div>
            <div className="widget-timeline m-b-25">
                <div className="media">
                    <div className="mr-3 photo-table">
                        <i className="fa fa-circle text-c-purple f-10 m-r-10" />
                        <Link to="#">
                            <img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="chat-user" />
                        </Link>
                    </div>
                    <div className="media-body">
                        <h6 className="d-inline-block">The Quick Brown Fox</h6>
                        <p className="m-b-0 text-muted">Lorem Ipsum is simply dummy text of…</p>
                    </div>
                </div>
            </div>
            <div className="widget-timeline">
                <div className="media">
                    <div className="mr-3 photo-table">
                        <i className="fa fa-circle text-c-blue f-10 m-r-10" />
                        <Link to="#">
                            <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="chat-user" />
                        </Link>
                    </div>
                    <div className="media-body">
                        <h6 className="d-inline-block">The Quick Brown Fox Jumps</h6>
                        <p className="m-b-0 text-muted">Lorem Ipsum is simply dummy text of…</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <Row>
                <Col xl={8}>
                    <Card className="User-Activity">
                        <Card.Header>
                            <Card.Title as="h5">User Activity</Card.Title>
                        </Card.Header>
                        <Card.Body className="pb-0">
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Activity</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th className="text-right" />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <h6 className="m-0">
                                                <img
                                                    className="rounded-circle m-r-10"
                                                    style={{ width: '40px' }}
                                                    src={avatar1}
                                                    alt="activity-user"
                                                />
                                                Ida Jorgensen
                                            </h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0">The quick brown fox</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0">3:28 PM</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0 text-c-green">Done</h6>
                                        </td>
                                        <td className="text-right">
                                            <i className="fa fa-circle text-c-green f-10" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <h6 className="m-0">
                                                <img
                                                    className="rounded-circle  m-r-10"
                                                    style={{ width: '40px' }}
                                                    src={avatar2}
                                                    alt="activity-user"
                                                />
                                                Albert Andersen
                                            </h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0">Jumps over the lazy</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0">2:37 PM</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0 text-c-red">Missed</h6>
                                        </td>
                                        <td className="text-right">
                                            <i className="fa fa-circle text-c-red f-10" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <h6 className="m-0">
                                                <img
                                                    className="rounded-circle  m-r-10"
                                                    style={{ width: '40px' }}
                                                    src={avatar3}
                                                    alt="activity-user"
                                                />
                                                Silje Larsen
                                            </h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0">Dog the quick brown</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0">10:23 AM</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0 text-c-purple">Delayed</h6>
                                        </td>
                                        <td className="text-right">
                                            <i className="fa fa-circle text-c-purple f-10" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h6 className="m-0">
                                                <img
                                                    className="rounded-circle  m-r-10"
                                                    style={{ width: '40px' }}
                                                    src={avatar1}
                                                    alt="activity-user"
                                                />
                                                Ida Jorgensen
                                            </h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0">The quick brown fox</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0">4:28 PM</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-0 text-c-green">Done</h6>
                                        </td>
                                        <td className="text-right">
                                            <i className="fa fa-circle text-c-green f-10" />
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
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
                <Col sm={12}>
                    <Card className="Application-list">
                        <Card.Header>
                            <Card.Title as="h5">Application list</Card.Title>
                        </Card.Header>
                        <Card.Body className="pb-0">
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Application</th>
                                        <th>Installs</th>
                                        <th>Created</th>
                                        <th>Budget</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img className="rounded-circle" style={{ width: '50px' }} src={avatar2} alt="activity-user" />
                                        </td>
                                        <td>
                                            <h6 className="mb-1">Facebook</h6>
                                            <p className="m-0">Apple</p>
                                        </td>
                                        <td>
                                            <h6 className="mb-1">523.423</h6>
                                            <p className="text-c-green m-0">+ 84 Daily</p>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">Feb 11 2017</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">$16,244</h6>
                                        </td>
                                        <td>
                                            <Link to="#" className="text-white label theme-bg f-12">
                                                Active
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <img className="rounded-circle" style={{ width: '50px' }} src={avatar1} alt="activity-user" />
                                        </td>
                                        <td>
                                            <h6 className="mb-1">Twitter</h6>
                                            <p className="m-0">CS Form</p>
                                        </td>
                                        <td>
                                            <h6 className="mb-1">7.239</h6>
                                            <p className="text-muted m-0">+ 5 Daily</p>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">Jan 19 2017</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">$3,937</h6>
                                        </td>
                                        <td>
                                            <Link to="#" className="label theme-bg2 f-12 text-white">
                                                Not Active
                                            </Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <img className="rounded-circle" style={{ width: '50px' }} src={avatar3} alt="activity-user" />
                                        </td>
                                        <td>
                                            <h6 className="mb-1">Instagram</h6>
                                            <p className="m-0">Microsoft</p>
                                        </td>
                                        <td>
                                            <h6 className="mb-1">5.877</h6>
                                            <p className="text-c-green m-0">+ 12 Daily</p>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">Aug 04 2017</h6>
                                        </td>
                                        <td>
                                            <h6 className="m-b-0">$28,039</h6>
                                        </td>
                                        <td>
                                            <Link to="#" className="label bg-c-blue f-12 text-white">
                                                Paused
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card className="user-list">
                        <Card.Header>
                            <Card.Title as="h5">User Project List</Card.Title>
                        </Card.Header>
                        <Card.Body className="pb-0">
                            <Table responsive hover>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>project</th>
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
                <Col xl={4} className="m-b-30 user-activity">
                    <Tabs variant="pills" defaultActiveKey="developer" id="uncontrolled-tab-example">
                        <Tab eventKey="developer" title="Developer">
                            {tabContent1}
                        </Tab>
                        <Tab eventKey="designer" title="Designer">
                            {tabContent1}
                        </Tab>
                        <Tab eventKey="all" title="All">
                            {tabContent1}
                        </Tab>
                    </Tabs>
                </Col>
                <Col sm={12}>
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
                <Col sm={12}>
                    <Card className="Recent-Users">
                        <Card.Header>
                            <Card.Title as="h5">Recent Users</Card.Title>
                        </Card.Header>
                        <Card.Body className="pb-0">
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
                                    <tr className="unread">
                                        <td>
                                            <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" />
                                        </td>
                                        <td>
                                            <h6 className="mb-1">Albert Andersen</h6>
                                            <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted">
                                                <i className="fa fa-circle text-c-green f-10 m-r-15" />
                                                21 July 12:56
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
            </Row>
        </React.Fragment>
    );
};

export default WidgetTable;
