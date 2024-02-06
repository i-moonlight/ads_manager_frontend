import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import dashboard1 from '../../../assets/images/widget/dashborad-1.jpg';
import dashboard2 from '../../../assets/images/widget/dashborad-2.jpg';
import dashboard3 from '../../../assets/images/widget/dashborad-3.jpg';
import dashboard4 from '../../../assets/images/widget/dashborad-4.jpg';
import dashboard5 from '../../../assets/images/widget/dashborad-5.jpg';

import emoticon from '../../../assets/images/widget/emoticon.jpg';

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';

import visaBack from '../../../assets/images/widget/visa-background.png';
import visaLogo from '../../../assets/images/widget/visa-logo.png';

import masterBack from '../../../assets/images/widget/master-background.png';
import masterLogo from '../../../assets/images/widget/master-logo.png';

import ruPayBack from '../../../assets/images/widget/rupay-background.png';
import ruPayLogo from '../../../assets/images/widget/rupay-logo.png';

const WidgetUser = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Img variant="top" src={dashboard1} />
                        <Card.Body>
                            <h5>Dashboard UI Kit</h5>
                            <span className="text-muted">By Creative Studio Form</span>
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
                        <Card.Body>
                            <Card.Img src={dashboard2} />
                            <h5 className="m-t-35">Dashboard UI Kit</h5>
                            <span className="text-muted">By Creative Studio Form</span>
                            <p className="border-top m-b-20 p-t-10 m-t-20" />
                            <div className="row">
                                <div className="col">
                                    <h5>$5236.42</h5>
                                    <span>BUDGET</span>
                                </div>
                                <div className="col">
                                    <h5>9 May 2017</h5>
                                    <span>DEADLINE</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <Card.Img src={dashboard3} />
                            <h5 className="m-t-35">Dashboard UI Kit</h5>
                            <span className="text-muted d-block m-b-30">By Creative Studio Form</span>
                            <h6 className="m-b-0">
                                $2356.23 <span className="float-right">$3200.00</span>
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
                            <div className="row m-t-30">
                                <div className="col-6 p-r-0">
                                    <Link to="#" className="btn btn-primary  text-uppercase btn-block">
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
                        <Card.Body>
                            <Row className="align-items-center justify-content-center">
                                <Col sm="auto">
                                    <Card.Img src={dashboard5} />
                                </Col>
                                <Col>
                                    <h5 className="m-t-35">Dashboard UI Kit</h5>
                                    <h6 className="m-b-0">
                                        $2356.23 <span className="float-right">$32</span>
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
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body className="p-sm-0">
                            <Row className="align-items-center justify-content-center">
                                <Col sm="auto">
                                    <Card.Img src={dashboard4} />
                                </Col>
                                <Col className="pt-3 pt-sm-0 pl-3 pl-sm-0">
                                    <h4>
                                        $59,48 <i className="fa fa-caret-up text-c-green f-22 m-l-5" />
                                    </h4>
                                    <span>EARNINGS</span>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <Row className="align-items-center justify-content-center">
                                <Col sm="auto">
                                    <Card.Img src={dashboard5} />
                                </Col>
                                <Col>
                                    <h5 className="m-t-35">Dashboard UI Kit</h5>
                                    <h6 className="m-b-0">
                                        $2463.23 <span className="float-right">$64</span>
                                    </h6>
                                    <div className="progress m-t-10" style={{ height: '7px' }}>
                                        <div
                                            className="progress-bar progress-c-theme2"
                                            role="progressbar"
                                            style={{ width: '40%' }}
                                            aria-valuenow="40"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="dashboard-kit">
                        <Card.Body>
                            <h5>Dashboard UI Kit</h5>
                            <span className="text-muted">By Creative Studio Form</span>
                            <Card.Img className="mt-4" width="100%" src={dashboard1} />
                            <ul className="design-image">
                                <li>
                                    <button className="btn bg-muted">
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
                                <li className="text-muted">+63</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header className="borderless">
                            <Card.Title as="h5">Post with emoticons</Card.Title>
                            <Card.Text className="text-muted d-block">May 12, 2017</Card.Text>
                        </Card.Header>
                        <Card.Body className="post-emoticon">
                            <Card.Img width="100%" src={emoticon} />
                            <ul>
                                <li className="m-r-25">
                                    <i className="far fa-smile f-26 text-c-green m-r-10" />
                                    235
                                </li>
                                <li className="m-r-25">
                                    <i className="far fa-smile f-26 text-c-purple m-r-10" />
                                    95
                                </li>
                                <li className="m-r-0">
                                    <i className="far fa-smile f-26 text-c-red m-r-10" />
                                    18
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body className="p-0">
                            <Card.Img src={dashboard2} />
                            <div className="ux-designer">
                                <button className="btn btn-primary">
                                    <i className="fa fa-plus f-14 mr-0" />
                                </button>
                                <h5>Alma Christensen</h5>
                                <span>UX Designer</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="theme-bg2 visa-top">
                        <Card.Header className="borderless">
                            <Card.Title as="h5" className="text-white float-left">
                                John Doe
                            </Card.Title>
                            <img src={visaLogo} className="img-fluid float-right" alt="card title" />
                        </Card.Header>
                        <Card.Body className="visa">
                            <h6 className="f-w-600 text-white ">
                                VALID <span className="f-w-300 m-l-10">05/17</span>
                            </h6>
                            <h3 className="f-w-300 text-white m-t-25 m-b-0">4883 2359 9932 3445</h3>
                            <span className="text-white">5346</span>
                            <img src={visaBack} className="img-fluid" alt="card back" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="theme-bg visa-top">
                        <Card.Header className="borderless">
                            <Card.Title as="h5" className="text-white float-left">
                                Villads Johansen
                            </Card.Title>
                            <img src={masterLogo} className="img-fluid float-right" alt="card title" />
                        </Card.Header>
                        <Card.Body className="visa">
                            <h6 className="f-w-600 text-white ">
                                NOT VALID <span className="f-w-300 m-l-10">10/17</span>
                            </h6>
                            <h3 className="f-w-300 text-white m-t-25 m-b-0">5635 2489 8596 3445</h3>
                            <span className="text-white">1025</span>
                            <img src={masterBack} className="img-fluid" alt="card back" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="bg-c-blue visa-top">
                        <Card.Header className="borderless">
                            <Card.Title as="h5" className="text-white float-left">
                                Silje Larsen
                            </Card.Title>
                            <img src={ruPayLogo} className="img-fluid float-right" alt="card title" />
                        </Card.Header>
                        <Card.Body className="visa">
                            <h6 className="f-w-600 text-white ">
                                VALID <span className="f-w-300 m-l-10">09/18</span>
                            </h6>
                            <h3 className="f-w-300 text-white m-t-25 m-b-0">7895 2359 1534 6548</h3>
                            <span className="text-white">7852</span>
                            <img src={ruPayBack} className="img-fluid" alt="card back" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="loction-user">
                        <Card.Body className="p-0">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-auto">
                                    <img
                                        className="img-fluid rounded-circle"
                                        style={{ width: '80px' }}
                                        src={avatar3}
                                        alt="dashboard-user"
                                    />
                                </div>
                                <div className="col">
                                    <h5>Villads Johansen</h5>
                                    <span>
                                        <i className="fa fa-map-marker f-18 m-r-5" /> Berlin, Germany
                                    </span>
                                </div>
                            </div>
                            <div className="border-top" />
                            <div className="loction-progress">
                                <h6 className="m-b-10">
                                    Twitter<span className="float-right">Google +</span>
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
                                    Facebook <span className="float-right">Youtube</span>
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
                                    60%<span className="float-right">40%</span>
                                </h5>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <div className="text-center m-b-30">
                                <img className="img-fluid rounded-circle" src={avatar2} alt="dashboard-user" />
                                <h5 className="mt-3">Mille Jensen</h5>
                                <span className="d-block">Ninja Level 14</span>
                            </div>
                            <h6 className=" m-b-0">
                                754 Points <span className="float-right">1000</span>
                            </h6>
                            <div className="progress m-t-10" style={{ height: '7px' }}>
                                <div
                                    className="progress-bar progress-c-theme"
                                    role="progressbar"
                                    style={{ width: '70%' }}
                                    aria-valuenow="70"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
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
                    <Card className="user-designer">
                        <Card.Body className="text-center">
                            <h5>Alma Christensen</h5>
                            <span className="d-block mb-4">UX Designer</span>
                            <img className="img-fluid rounded-circle" style={{ width: '70px' }} src={avatar2} alt="dashboard-user" />
                            <div className="row m-t-30">
                                <div className="col-md-4 col-6">
                                    <h5>974</h5>
                                    <span className="text-muted">IMAGES</span>
                                </div>
                                <div className="col-md-4 col-6">
                                    <h5>35.7k</h5>
                                    <span className="text-muted">LIKES</span>
                                </div>
                                <div className="col-md-4 col-12">
                                    <h5>236</h5>
                                    <span className="text-muted">FOLLOW</span>
                                </div>
                            </div>
                            <div className="designer m-t-30">
                                <Link to="#" className="btn btn-primary shadow-2 text-uppercase btn-block">
                                    add friend
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card className="Design-sprint theme-bg2">
                        <Card.Header className="borderless">
                            <Card.Title as="h5" className="text-white">
                                Project Design Sprint
                            </Card.Title>
                            <Card.Text className="d-block f-w-300 text-white">11 MAY 10:35</Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-white f-w-300">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                            </p>
                            <p className="text-white f-w-300">
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                            </p>
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
                    <Card>
                        <Card.Body>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-auto">
                                    <img
                                        className="img-fluid rounded-circle"
                                        style={{ width: '70px' }}
                                        src={avatar2}
                                        alt="dashboard-user"
                                    />
                                </div>
                                <div className="col">
                                    <h5>Alma Christensen</h5>
                                    <span>UX Designer</span>
                                </div>
                            </div>
                            <ul className="task-list">
                                <li>
                                    <i className="task-icon bg-c-green" />
                                    <h6>
                                        Anton Knudsen<span className="float-right text-muted">14 MAY</span>
                                    </h6>
                                    <p className="text-muted">Lorem ipsum is dolorem…</p>
                                </li>
                                <li>
                                    <i className="task-icon bg-c-green" />
                                    <h6>
                                        Anton Knudsen<span className="float-right text-muted">14 MAY</span>
                                    </h6>
                                    <p className="text-muted">Lorem ipsum is dolorem…</p>
                                </li>
                                <li>
                                    <i className="task-icon bg-c-green" />
                                    <h6>
                                        Anton Knudsen<span className="float-right text-muted">14 MAY</span>
                                    </h6>
                                    <p className="text-muted">Lorem ipsum is dolorem…</p>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body className="p-0">
                            <div className="text-center project-main">
                                <img className="img-fluid rounded-circle" src={avatar3} alt="dashboard-user" />
                                <h5 className="mt-4">Alma Christensen</h5>
                                <span>UX Designer</span>
                                <div className="row m-t-30">
                                    <div className="col-6 p-r-0">
                                        <Link to="#" className="btn btn-primary  text-uppercase btn-block">
                                            add friend
                                        </Link>
                                    </div>
                                    <div className="col-6">
                                        <Link to="#" className="btn text-uppercase border btn-block btn-outline-secondary">
                                            message
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="border-top" />
                            <div className="project-main">
                                <div className="row text-center">
                                    <div className="col-md-4 col-6">
                                        <h6 className="text-muted">
                                            <i className="fa fa-star m-r-5" /> 4.8
                                        </h6>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <h6 className="text-muted">
                                            <i className="fa fa-map-marker m-r-5" />
                                            USA
                                        </h6>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <h6 className="text-muted m-0">
                                            <i className="fas fa-file-alt m-r-5" /> 28 Task
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default WidgetUser;
