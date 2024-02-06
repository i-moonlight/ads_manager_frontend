import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import UserList from './WdgetDataUserList';

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';

const WidgetData = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row align-items-center justify-content-center m-b-20">
                                <div className="col-6">
                                    <h2 className="f-w-300 d-flex align-items-center float-left m-0">
                                        4.7 <i className="fa fa-star f-10 m-l-10 text-c-yellow" />
                                    </h2>
                                </div>
                                <div className="col-6">
                                    <h6 className="d-flex  align-items-center float-right m-0">
                                        0.4 <i className="fa fa-caret-up text-c-green f-22 m-l-10" />
                                    </h6>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-12">
                                    <h6 className="align-items-center float-left">
                                        <i className="fa fa-star f-10 m-r-10 text-c-yellow" />5
                                    </h6>
                                    <h6 className="align-items-center float-right">384</h6>
                                    <div className="progress m-t-30 m-b-20" style={{ height: '6px' }}>
                                        <div
                                            className="progress-bar progress-c-theme"
                                            role="progressbar"
                                            style={{ width: '70%' }}
                                            aria-valuenow="70"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>

                                <div className="col-xl-12">
                                    <h6 className="align-items-center float-left">
                                        <i className="fa fa-star f-10 m-r-10 text-c-yellow" />4
                                    </h6>
                                    <h6 className="align-items-center float-right">145</h6>
                                    <div className="progress m-t-30  m-b-15" style={{ height: '6px' }}>
                                        <div
                                            className="progress-bar progress-c-theme"
                                            role="progressbar"
                                            style={{ width: '35%' }}
                                            aria-valuenow="35"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>

                                <div className="col-xl-12">
                                    <h6 className="align-items-center float-left">
                                        <i className="fa fa-star f-10 m-r-10 text-c-yellow" />3
                                    </h6>
                                    <h6 className="align-items-center float-right">24</h6>
                                    <div className="progress m-t-30  m-b-15" style={{ height: '6px' }}>
                                        <div
                                            className="progress-bar progress-c-theme"
                                            role="progressbar"
                                            style={{ width: '25%' }}
                                            aria-valuenow="25"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>

                                <div className="col-xl-12">
                                    <h6 className="align-items-center float-left">
                                        <i className="fa fa-star f-10 m-r-10 text-c-yellow" />2
                                    </h6>
                                    <h6 className="align-items-center float-right">1</h6>
                                    <div className="progress m-t-30  m-b-15" style={{ height: '6px' }}>
                                        <div
                                            className="progress-bar progress-c-theme"
                                            role="progressbar"
                                            style={{ width: '10%' }}
                                            aria-valuenow="10"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <h6 className="align-items-center float-left">
                                        <i className="fa fa-star f-10 m-r-10 text-c-yellow" />1
                                    </h6>
                                    <h6 className="align-items-center float-right">0</h6>
                                    <div className="progress m-t-30  m-b-0" style={{ height: '6px' }}>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{ width: '0%' }}
                                            aria-valuenow="0"
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
                    <Card className="chat-sanders">
                        <Card.Header className="borderless">
                            <Card.Title as="h5" className="text-white">
                                Chat with Kristina Sanders
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="m-t-30 p-0">
                            <div className="scroll-widget" id="chat-scroll">
                                <PerfectScrollbar>
                                    <div style={{ padding: '0 30px 35px 30px' }}>
                                        <p className="text-center text-muted">JUN 23 3:46PM</p>
                                        <div className="row m-b-20 received-chat align-items-end">
                                            <div className="col-auto p-r-0">
                                                <h5 className="text-white d-flex align-items-center theme-bg2 justify-content-center">k</h5>
                                            </div>
                                            <div className="col">
                                                <div className="msg">
                                                    <h6 className="m-b-0">How may i help you?</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row m-b-20 send-chat align-items-end">
                                            <div className="col text-right">
                                                <div className="msg">
                                                    <h6 className="m-b-0 text-white">I need support for my ticket XXX.</h6>
                                                </div>
                                            </div>
                                            <div className="col-auto p-l-0">
                                                <h5 className="text-white d-flex align-items-center theme-bg justify-content-center">Y</h5>
                                            </div>
                                        </div>
                                        <div className="row m-b-20 received-chat align-items-end">
                                            <div className="col-auto p-r-0">
                                                <h5 className="text-white d-flex align-items-center  theme-bg2 justify-content-center">
                                                    k
                                                </h5>
                                            </div>
                                            <div className="col">
                                                <div className="msg">
                                                    <h6 className="m-b-0">Our support staff will contact you soon..</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row m-b-0 send-chat align-items-end">
                                            <div className="col text-right">
                                                <div className="msg">
                                                    <h6 className="m-b-0 text-white">Nice to meet you!</h6>
                                                </div>
                                            </div>
                                            <div className="col-auto p-l-0">
                                                <h5 className="text-white d-flex align-items-center theme-bg justify-content-center">Y</h5>
                                            </div>
                                        </div>
                                    </div>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                        <Card.Footer className="p-0">
                            <div className="right-icon-control">
                                <div className="input-group input-group-button p-10">
                                    <input type="text" className="form-control border-0 text-muted" placeholder="Write your message" />
                                    <div className="input-group-append">
                                        <button className="btn" type="button">
                                            <i className="fa f-20 fa-paper-plane"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">User List</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <UserList avatar={avatar1} name="Silje Larsen" caption="Invertory System" />
                            <UserList avatar={avatar2} name="Storm Hansen" caption="System Analytic" />
                            <UserList avatar={avatar3} name="Frida Thomsen" caption="Last login 21/03/2017" />
                            <UserList avatar={avatar1} name="Aksel Andersen" caption="Last seen 23/05/2017" />
                            <div className="row m-t-35">
                                <div className="col-6 p-r-0">
                                    <Link to="#" className="btn btn-primary text-uppercase btn-block">
                                        add friend
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <Link to="#" className="btn text-uppercase border btn-block btn-outline-secondary p-15">
                                        message
                                    </Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Notifications</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row">
                                <div className="col-sm-12 m-b-30">
                                    <div className="widget-timeline">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fa fa-circle text-c-green f-10 m-r-10" />
                                                <Link to="#">
                                                    <img
                                                        className="rounded-circle"
                                                        style={{ width: '40px' }}
                                                        src={avatar1}
                                                        alt="chat-user"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block">The Quick Brown Fox Jumps</h6>
                                                <p className="m-b-0 text-muted">Lorem Ipsum is simply dummy text of…</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 m-b-30">
                                    <div className="widget-timeline">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fa fa-circle text-c-yellow f-10 m-r-10" />
                                                <Link to="#">
                                                    <img
                                                        className="rounded-circle"
                                                        style={{ width: '40px' }}
                                                        src={avatar2}
                                                        alt="chat-user"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block">Over The Lazy Dog</h6>
                                                <p className="m-b-0 text-muted">Lorem Ipsum is simply dummy text of…</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 m-b-30">
                                    <div className="widget-timeline">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fa fa-circle text-c-blue f-10 m-r-10" />
                                                <Link to="#">
                                                    <img
                                                        className="rounded-circle"
                                                        style={{ width: '40px' }}
                                                        src={avatar3}
                                                        alt="chat-user"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block">The Quick Brown Fox</h6>
                                                <p className="m-b-0 text-muted">Lorem Ipsum is simply dummy text of…</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 m-b-0">
                                    <div className="widget-timeline">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fa fa-circle text-c-blue f-10 m-r-10" />
                                                <Link to="#">
                                                    <img
                                                        className="rounded-circle"
                                                        style={{ width: '40px' }}
                                                        src={avatar2}
                                                        alt="chat-user"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block">The Quick Brown Fox Jumps</h6>
                                                <p className="m-b-0 text-muted">Lorem Ipsum is simply dummy text of…</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="to-do">
                        <Card.Header>
                            <Card.Title as="h5">To-Do</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row">
                                <div className="col-sm-12 m-b-30">
                                    <div className="widget-todo">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fa fa-circle text-c-green f-10 mr-2" />
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block">Today 15:30</h6>
                                                <p className="m-b-0 text-muted">Meeting with Sara and Cristiane</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 m-b-30">
                                    <div className="widget-todo">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fa fa-circle text-c-green f-10 mr-2" />
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block">Today 19:15</h6>
                                                <p className="m-b-0 text-muted">Soccer game with family</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 m-b-30">
                                    <div className="widget-todo">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fa fa-circle text-c-blue f-10 mr-2" />
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block">Tomorrow 08:45</h6>
                                                <p className="m-b-0 text-muted">Check all emails</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 m-b-0">
                                    <div className="widget-todo">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fa fa-circle text-c-green f-10 mr-2" />
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block">Tomorrow 02:45</h6>
                                                <p className="m-b-0 text-muted">Soccer game with family</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="to-do-button">
                                    <button className="btn btn-primary btn-round">
                                        <i className="fa fa-plus f-14 mr-0" />
                                    </button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
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
                <Col md={6} xl={4}>
                    <Card className="lazy-dog">
                        <Card.Header>
                            <Card.Title as="h5">Do you know Datta Able is released?</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Datta Able comes with Bootstrap 4 & Angular 7+ and React. It is best kind of own Dashboard categoty.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="Design-sprint theme-bg2">
                        <Card.Header className="borderless">
                            <Card.Title as="h5" className="text-white">
                                Do you know Datta Able is released?
                            </Card.Title>
                            <Card.Text className="d-block text-white">11 MAY 10:35</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <ul className="design-image">
                                <li>
                                    <button className="btn bg-white">
                                        <i className="fa fa-plus f-14 mr-0" />
                                    </button>
                                </li>
                                <li>
                                    <img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="chat-user" />
                                </li>
                                <li>
                                    <img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="chat-user" />
                                </li>
                                <li>
                                    <img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="chat-user" />
                                </li>
                                <li className="text-white">+63</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="widget-content">
                        <Card.Body>
                            <div className="row">
                                <div className="col-sm-12 m-b-20">
                                    <div className="widget-lorem">
                                        <div className="media align-items-center justify-content-center receive-bar">
                                            <div className="mr-3 photo-table">
                                                <h5 className="theme-bg text-white d-flex align-items-center justify-content-center">Q</h5>
                                            </div>
                                            <div className="media-body">
                                                <h4>What is Lorem Ipsum?</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 m-b-0">
                                    <div className="widget-lorem">
                                        <div className="media send-bar">
                                            <div className="mr-3 photo-table">
                                                <h5 className="text-white d-flex theme-bg2 align-items-center justify-content-center">A</h5>
                                            </div>
                                            <div className="media-body">
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                    has been the industry's standard dummy text ever since the 1500s
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={12}>
                    <Card className="social-media">
                        <Card.Header>
                            <Card.Title as="h5">Social Media Comparison</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row">
                                <div className="col-xl-12 mb-4">
                                    <h6 className="m-b-20 text-center">
                                        Facebook <span className="ml-4">Twitter</span>
                                    </h6>
                                    <div className="progress">
                                        <h5 className="m-r-20 m-b-0">67%</h5>
                                        <div
                                            className="progress-bar progress-c-theme2"
                                            role="progressbar"
                                            style={{ width: '40%', height: '12px' }}
                                            aria-valuenow="40"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                        <div
                                            className="progress-bar progress-c-theme"
                                            role="progressbar"
                                            style={{ width: '40%', height: '12px' }}
                                            aria-valuenow="40"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                        <h5 className="m-l-20 m-b-0">23%</h5>
                                    </div>
                                    <h6 className="m-t-20 text-center text-muted">
                                        5326 <span className="m-l-15">234</span>
                                    </h6>
                                </div>
                                <div className="col-xl-12  mb-4">
                                    <h6 className="m-b-20 text-center">
                                        Pinterest <span className="ml-4">Instagram</span>
                                    </h6>
                                    <div className="progress">
                                        <h5 className="m-r-20 m-b-0">46%</h5>
                                        <div
                                            className="progress-bar progress-c-theme2"
                                            role="progressbar"
                                            style={{ width: '30%', height: '12px' }}
                                            aria-valuenow="30"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                        <div
                                            className="progress-bar progress-c-theme"
                                            role="progressbar"
                                            style={{ width: '35%', height: '12px' }}
                                            aria-valuenow="35"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                        <h5 className="m-l-20 m-b-0">54%</h5>
                                    </div>
                                    <h6 className="m-t-20 text-center text-muted">
                                        2856 <span className="m-l-15">5258</span>
                                    </h6>
                                </div>
                                <div className="col-xl-12  mb-0">
                                    <h6 className="m-b-20 text-center">
                                        YouTube <span className="ml-4">Vimeo</span>
                                    </h6>
                                    <div className="progress">
                                        <h5 className="m-r-20 m-b-0">59%</h5>
                                        <div
                                            className="progress-bar progress-c-theme2"
                                            role="progressbar"
                                            style={{ width: '30%', height: '12px' }}
                                            aria-valuenow="30"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                        <div
                                            className="progress-bar progress-c-theme"
                                            role="progressbar"
                                            style={{ width: '40%', height: '12px' }}
                                            aria-valuenow="40"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                        <h5 className="m-l-20 m-b-0">41%</h5>
                                    </div>
                                    <h6 className="m-t-20 text-center text-muted">
                                        2989 <span className="m-l-15">2873</span>
                                    </h6>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default WidgetData;
