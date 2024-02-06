import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Carousel, Dropdown, Row, Tab, Tabs, Button } from 'react-bootstrap';

import imgAvatar1 from '../../assets/images/user/img-avatar-1.jpg';
import imgAvatar2 from '../../assets/images/user/img-avatar-2.jpg';
import imgAvatar3 from '../../assets/images/user/img-avatar-3.jpg';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';
import avatar5 from '../../assets/images/user/avatar-5.jpg';
import cover from '../../assets/images/user/cover.jpg';

import slider5 from '../../assets/images/widget/slider5.jpg';
import slider7 from '../../assets/images/widget/slider7.jpg';
import slider6 from '../../assets/images/widget/slider6.jpg';

import userBlurBg from '../../assets/images/widget/user-blur-bg.png';
import imgRound1 from '../../assets/images/widget/img-round1.jpg';
import profilePerson1 from '../../assets/images/widget/profile-person1.jpg';

const UserCard = () => {
    return (
        <React.Fragment>
            <Row>
                <Col sm={12} className="tab-user-card">
                    <Tabs variant="pills" defaultActiveKey="simple" id="uncontrolled-tab-example">
                        <Tab eventKey="simple" title="SIMPLE">
                            <Row className="mb-n4">
                                <Col xl={4} md={6}>
                                    <h6 className="text-center my-3">Simple</h6>
                                    <Card className="user-card user-card-1">
                                        <Card.Header className="border-0 p-2 pb-0">
                                            <div className="cover-img-block">
                                                <img src={slider5} alt="" className="img-fluid" />
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <div className="user-about-block text-center">
                                                <Row className="align-items-end">
                                                    <Col />
                                                    <Col>
                                                        <img className="img-radius img-fluid wid-80" src={avatar2} alt="User" />
                                                    </Col>
                                                    <Col />
                                                </Row>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="mb-1 mt-3">Josephin Doe</h6>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-0">been the industry's standard</p>
                                            </div>
                                            <hr className="wid-80 b-wid-3 my-4" />
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center my-3">With option</h6>
                                    <Card className="user-card user-card-1">
                                        <Card.Header className="border-0 p-2 pb-0">
                                            <div className="cover-img-block">
                                                <img src={slider7} alt="" className="img-fluid" />
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <div className="user-about-block text-center">
                                                <Row className="align-items-end">
                                                    <Col className="text-left pb-3">
                                                        <Link to="#">
                                                            <i className="icon feather icon-star text-c-yellow f-20" />
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <img className="img-radius img-fluid wid-80" src={avatar1} alt="User" />
                                                    </Col>
                                                    <Col className="text-right pb-3">
                                                        <Dropdown>
                                                            <Dropdown.Toggle
                                                                variant="link"
                                                                id="dropdown-basic"
                                                                className="drp-icon text-muted"
                                                            >
                                                                <i className="feather icon-more-horizontal" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Another action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Something else
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="mb-1 mt-3">Lary Doe</h6>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-0">been the industry's standard</p>
                                            </div>
                                            <hr className="wid-80 b-wid-3 my-4" />
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center my-3">Option selected</h6>
                                    <Card className="user-card user-card-1">
                                        <Card.Header className="border-0 p-2 pb-0">
                                            <div className="cover-img-block">
                                                <img src={slider6} alt="" className="img-fluid" />
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <div className="user-about-block text-center">
                                                <Row className="align-items-end">
                                                    <Col className="text-left pb-3">
                                                        <Link to="#" className="text-c-yellow">
                                                            <i className="icon feather icon-star-on text-c-yellow f-20" />
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <img className="img-radius img-fluid wid-80" src={avatar3} alt="User" />
                                                    </Col>
                                                    <Col className="text-right pb-3">
                                                        <Dropdown>
                                                            <Dropdown.Toggle
                                                                variant="link"
                                                                id="dropdown-basic"
                                                                className="drp-icon text-muted"
                                                            >
                                                                <i className="feather icon-more-horizontal" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Another action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Something else
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="mb-1 mt-3">Sara Soudein</h6>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-0">been the industry's standard</p>
                                            </div>
                                            <hr className="wid-80 b-wid-3 my-4" />
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* <Col xl={4} md={6}>
                                    <h6 className="text-center my-3">Slider</h6>
                                    <Card className='user-card user-card-1'>
                                        <Card.Header className='border-0 p-2 pb-0'>
                                            <div className="cover-img-block">
                                                <Carousel indicators={false}>
                                                    <Carousel.Item>
                                                        <img src={slider5} alt="" className="img-fluid"/>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img src={slider6} alt="" className="img-fluid"/>
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img src={slider7} alt="" className="img-fluid"/>
                                                    </Carousel.Item>
                                                </Carousel>
                                            </div>
                                        </Card.Header>
                                        <Card.Body className='pt-0'>
                                            <div className="user-about-block text-center">
                                                <Row className="align-items-end">
                                                    <Col className='text-left pb-3'>
                                                        <Link to='#' className='text-c-yellow'><i className="icon feather icon-star text-c-yellow f-20"/></Link>
                                                    </Col>
                                                    <Col><img className="img-radius img-fluid wid-80" src={avatar4} alt="User"/></Col>
                                                    <Col className='text-right pb-3'>
                                                        <Dropdown>
                                                            <Dropdown.Toggle variant="link" id="dropdown-basic" className='drp-icon text-muted'>
                                                                <i className="feather icon-more-horizontal"/>
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item as={Link} to='#'>Action</Dropdown.Item>
                                                                <Dropdown.Item as={Link} to='#'>Another action</Dropdown.Item>
                                                                <Dropdown.Item as={Link} to='#'>Something else</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="mb-1 mt-3">Joseph William</h6>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-0">been the industry's standard</p>
                                            </div>
                                            <hr className="wid-80 b-wid-3 my-4"/>
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col> */}
                                <Col xl={4} md={6}>
                                    <h6 className="text-center my-3">Certificated badge</h6>
                                    <Card className="user-card user-card-1">
                                        <Card.Header className="border-0 p-2 pb-0">
                                            <div className="cover-img-block">
                                                <img src={slider6} alt="" className="img-fluid" />
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <div className="user-about-block text-center">
                                                <Row className="align-items-end">
                                                    <Col className="text-left pb-3">
                                                        <Link to="#" className="text-c-yellow">
                                                            <i className="icon feather icon-star-on text-c-yellow f-20" />
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <div className="position-relative d-inline-block">
                                                            <img className="img-radius img-fluid wid-80" src={avatar5} alt="User" />
                                                            <div className="certificated-badge">
                                                                <i className="fas fa-certificate text-c-blue bg-icon" />
                                                                <i className="fas fa-check front-icon text-white" />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col className="text-right pb-3">
                                                        <Dropdown>
                                                            <Dropdown.Toggle
                                                                variant="link"
                                                                id="dropdown-basic"
                                                                className="drp-icon text-muted"
                                                            >
                                                                <i className="feather icon-more-horizontal" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Another action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Something else
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="mb-1 mt-3">Suzen</h6>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-0">been the industry's standard</p>
                                            </div>
                                            <hr className="wid-80 b-wid-3 my-4" />
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center my-3">Hover data</h6>
                                    <Card className="user-card user-card-1">
                                        <Card.Header className="border-0 p-2 pb-0">
                                            <div className="cover-img-block">
                                                <img src={slider7} alt="" className="img-fluid" />
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <div className="user-about-block text-center">
                                                <Row className="align-items-end">
                                                    <Col />
                                                    <Col>
                                                        <div className="position-relative d-inline-block">
                                                            <img className="img-radius img-fluid wid-80" src={avatar1} alt="User" />
                                                            <div className="certificated-badge">
                                                                <i className="fas fa-certificate text-c-blue bg-icon" />
                                                                <i className="fas fa-check front-icon text-white" />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col />
                                                </Row>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="mb-1 mt-3">John Doe</h6>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-0">been the industry's standard</p>
                                            </div>
                                            <hr className="wid-80 b-wid-3 my-4" />
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                        <Card.Body className="hover-data text-white btn-page">
                                            <div className="">
                                                <h4 className="text-white">Hire Me?</h4>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-3">been the industry's standard</p>
                                                <Button variant="warning" className="waves-effect waves-light">
                                                    <i className="feather icon-link" /> Meating
                                                </Button>
                                                <Button variant="danger" className="waves-effect waves-light">
                                                    <i className="feather icon-download" /> Resume
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="clip-image" title="CLIP IMAGE">
                            <Row className="mb-n4">
                                <Col xl={4} md={6}>
                                    <h6 className="text-center my-3">Left</h6>
                                    <Card className="user-card user-card-2 shape-left">
                                        <Card.Header className="border-0 p-2 pb-0">
                                            <div className="cover-img-block">
                                                <img src={slider5} alt="" className="img-fluid" />
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <div className="user-about-block text-center">
                                                <Row className="align-items-end">
                                                    <Col className="text-left pb-3">
                                                        <Link to="#" className="text-c-yellow">
                                                            <i className="icon feather icon-star-on text-c-yellow f-20" />
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <img className="img-radius img-fluid wid-80" src={avatar1} alt="User" />
                                                    </Col>
                                                    <Col className="text-right pb-3">
                                                        <Dropdown>
                                                            <Dropdown.Toggle
                                                                variant="link"
                                                                id="dropdown-basic"
                                                                className="drp-icon text-muted"
                                                            >
                                                                <i className="feather icon-more-horizontal" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Another action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Something else
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="mb-1 mt-3">Lary Doe</h6>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-0">been the industry's standard</p>
                                            </div>
                                            <hr className="wid-80 b-wid-3 my-4" />
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center my-3">Center</h6>
                                    <Card className="user-card user-card-2 shape-center">
                                        <Card.Header className="border-0 p-2 pb-0">
                                            <div className="cover-img-block">
                                                <img src={slider6} alt="" className="img-fluid" />
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <div className="user-about-block text-center">
                                                <Row className="align-items-end">
                                                    <Col className="text-left pb-3">
                                                        <Link to="#" className="text-c-yellow">
                                                            <i className="icon feather icon-star-on text-c-yellow f-20" />
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <img className="img-radius img-fluid wid-80" src={avatar2} alt="User" />
                                                    </Col>
                                                    <Col className="text-right pb-3">
                                                        <Dropdown>
                                                            <Dropdown.Toggle
                                                                variant="link"
                                                                id="dropdown-basic"
                                                                className="drp-icon text-muted"
                                                            >
                                                                <i className="feather icon-more-horizontal" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Another action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Something else
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="mb-1 mt-3">Josephin Doe</h6>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-0">been the industry's standard</p>
                                            </div>
                                            <hr className="wid-80 b-wid-3 my-4" />
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center my-3">Right</h6>
                                    <Card className="user-card user-card-2 shape-right">
                                        <Card.Header className="border-0 p-2 pb-0">
                                            <div className="cover-img-block">
                                                <img src={slider7} alt="" className="img-fluid" />
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <div className="user-about-block text-center">
                                                <Row className="align-items-end">
                                                    <Col className="text-left pb-3">
                                                        <Link to="#" className="text-c-yellow">
                                                            <i className="icon feather icon-star-on text-c-yellow f-20" />
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <img className="img-radius img-fluid wid-80" src={avatar3} alt="User" />
                                                    </Col>
                                                    <Col className="text-right pb-3">
                                                        <Dropdown>
                                                            <Dropdown.Toggle
                                                                variant="link"
                                                                id="dropdown-basic"
                                                                className="drp-icon text-muted"
                                                            >
                                                                <i className="feather icon-more-horizontal" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Another action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Something else
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="mb-1 mt-3">Sara Soudein</h6>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-0">been the industry's standard</p>
                                            </div>
                                            <hr className="wid-80 b-wid-3 my-4" />
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center my-3">Left slider</h6>
                                    <Card className="user-card user-card-2 shape-left">
                                        <Card.Header className="border-0 p-2 pb-0">
                                            <div className="cover-img-block">
                                                <Carousel indicators={false}>
                                                    <Carousel.Item>
                                                        <img src={slider5} alt="" className="img-fluid" />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img src={slider6} alt="" className="img-fluid" />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img src={slider7} alt="" className="img-fluid" />
                                                    </Carousel.Item>
                                                </Carousel>
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <div className="user-about-block text-center">
                                                <Row className="align-items-end">
                                                    <Col className="text-left pb-3">
                                                        <Link to="#" className="text-c-yellow">
                                                            <i className="icon feather icon-star text-c-yellow f-20" />
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <img className="img-radius img-fluid wid-80" src={avatar4} alt="User" />
                                                    </Col>
                                                    <Col className="text-right pb-3">
                                                        <Dropdown>
                                                            <Dropdown.Toggle
                                                                variant="link"
                                                                id="dropdown-basic"
                                                                className="drp-icon text-muted"
                                                            >
                                                                <i className="feather icon-more-horizontal" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Another action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Something else
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="mb-1 mt-3">Joseph William</h6>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-0">been the industry's standard</p>
                                            </div>
                                            <hr className="wid-80 b-wid-3 my-4" />
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center my-3">Center slider</h6>
                                    <Card className="user-card user-card-2 shape-center">
                                        <Card.Header className="border-0 p-2 pb-0">
                                            <div className="cover-img-block">
                                                <Carousel indicators={false}>
                                                    <Carousel.Item>
                                                        <img src={slider6} alt="" className="img-fluid" />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img src={slider7} alt="" className="img-fluid" />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img src={slider5} alt="" className="img-fluid" />
                                                    </Carousel.Item>
                                                </Carousel>
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <div className="user-about-block text-center">
                                                <Row className="align-items-end">
                                                    <Col className="text-left pb-3">
                                                        <Link to="#" className="text-c-yellow">
                                                            <i className="icon feather icon-star text-c-yellow f-20" />
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <img className="img-radius img-fluid wid-80" src={avatar5} alt="User" />
                                                    </Col>
                                                    <Col className="text-right pb-3">
                                                        <Dropdown>
                                                            <Dropdown.Toggle
                                                                variant="link"
                                                                id="dropdown-basic"
                                                                className="drp-icon text-muted"
                                                            >
                                                                <i className="feather icon-more-horizontal" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Another action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Something else
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="mb-1 mt-3">Suzen</h6>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-0">been the industry's standard</p>
                                            </div>
                                            <hr className="wid-80 b-wid-3 my-4" />
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center my-3">Right slider</h6>
                                    <Card className="user-card user-card-2 shape-right">
                                        <Card.Header className="border-0 p-2 pb-0">
                                            <div className="cover-img-block">
                                                <Carousel indicators={false}>
                                                    <Carousel.Item>
                                                        <img src={slider7} alt="" className="img-fluid" />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img src={slider5} alt="" className="img-fluid" />
                                                    </Carousel.Item>
                                                    <Carousel.Item>
                                                        <img src={slider6} alt="" className="img-fluid" />
                                                    </Carousel.Item>
                                                </Carousel>
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <div className="user-about-block text-center">
                                                <Row className="align-items-end">
                                                    <Col className="text-left pb-3">
                                                        <Link to="#" className="text-c-yellow">
                                                            <i className="icon feather icon-star text-c-yellow f-20" />
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <img className="img-radius img-fluid wid-80" src={avatar1} alt="User" />
                                                    </Col>
                                                    <Col className="text-right pb-3">
                                                        <Dropdown>
                                                            <Dropdown.Toggle
                                                                variant="link"
                                                                id="dropdown-basic"
                                                                className="drp-icon text-muted"
                                                            >
                                                                <i className="feather icon-more-horizontal" />
                                                            </Dropdown.Toggle>

                                                            <Dropdown.Menu>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Another action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Something else
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="mb-1 mt-3">John Doe</h6>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-0">been the industry's standard</p>
                                            </div>
                                            <hr className="wid-80 b-wid-3 my-4" />
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="footer" title="FOOTER">
                            <Row className="mb-n4">
                                <Col xl={4} md={6}>
                                    <h6 className="text-center my-3">Footer gray</h6>
                                    <Card className="user-card user-card-1 support-bar">
                                        <Card.Header className="border-0 p-2 pb-0">
                                            <div className="cover-img-block">
                                                <img src={slider7} alt="" className="img-fluid" />
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <div className="user-about-block text-center">
                                                <Row className="align-items-end">
                                                    <Col className="text-left pb-3">
                                                        <Link to="#" className="text-c-yellow">
                                                            <i className="icon feather icon-star-on text-c-yellow f-20" />
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <div className="position-relative d-inline-block">
                                                            <img className="img-radius img-fluid wid-80" src={avatar1} alt="User" />
                                                            <div className="certificated-badge">
                                                                <i className="fas fa-certificate text-c-blue bg-icon" />
                                                                <i className="fas fa-check front-icon text-white" />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col className="text-right pb-3">
                                                        <Dropdown>
                                                            <Dropdown.Toggle
                                                                variant="link"
                                                                id="dropdown-basic"
                                                                className="drp-icon text-muted"
                                                            >
                                                                <i className="feather icon-more-horizontal" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Another action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Something else
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="mb-1 mt-3">Lary Doe</h6>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-0">been the industry's standard</p>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="bg-secondary text-white">
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1 text-white">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1 text-white">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1 text-white">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center my-3">Footer white</h6>
                                    <Card className="user-card user-card-1 support-bar">
                                        <Card.Header className="border-0 p-2 pb-0">
                                            <div className="cover-img-block">
                                                <img src={slider6} alt="" className="img-fluid" />
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <div className="user-about-block text-center">
                                                <Row className="align-items-end">
                                                    <Col className="text-left pb-3">
                                                        <Link to="#" className="text-c-yellow">
                                                            <i className="icon feather icon-star-on text-c-yellow f-20" />
                                                        </Link>
                                                    </Col>
                                                    <Col>
                                                        <div className="position-relative d-inline-block">
                                                            <img className="img-radius img-fluid wid-80" src={avatar2} alt="User" />
                                                            <div className="certificated-badge">
                                                                <i className="fas fa-certificate text-c-blue bg-icon" />
                                                                <i className="fas fa-check front-icon text-white" />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col className="text-right pb-3">
                                                        <Dropdown>
                                                            <Dropdown.Toggle
                                                                variant="link"
                                                                id="dropdown-basic"
                                                                className="drp-icon text-muted"
                                                            >
                                                                <i className="feather icon-more-horizontal" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Another action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Something else
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="text-center">
                                                <h6 className="mb-1 mt-3">Lary Doe</h6>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-0">been the industry's standard</p>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center my-3">Social link</h6>
                                    <Card className="user-card user-card-2 support-bar1 shape-right">
                                        <Card.Header className="border-0 p-2 pb-0">
                                            <div className="cover-img-block">
                                                <img src={slider5} alt="" className="img-fluid" />
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <div className="user-about-block text-center">
                                                <Row className="align-items-center">
                                                    <Col>
                                                        <Row className="align-items-center">
                                                            <Col sm="auto" className="pr-0">
                                                                <img className="img-radius img-fluid wid-80" src={avatar3} alt="User" />
                                                            </Col>
                                                            <Col>
                                                                <h6 className="mb-1">Sara Soudein</h6>
                                                                <p className="mb-0">UI/UX Designer</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col sm="auto">
                                                        <Dropdown>
                                                            <Dropdown.Toggle
                                                                variant="link"
                                                                id="dropdown-basic"
                                                                className="drp-icon text-muted"
                                                            >
                                                                <i className="feather icon-more-horizontal" />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Another action
                                                                </Dropdown.Item>
                                                                <Dropdown.Item as={Link} to="#">
                                                                    Something else
                                                                </Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="mt-3">
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-0">been the industry's standard</p>
                                            </div>
                                            <ul className="list-inline f-20 mt-3 mb-0">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="text-facebook">
                                                        <i className="fab fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="text-twitter">
                                                        <i className="fab fa-twitter" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="text-dribbble">
                                                        <i className="fab fa-dribbble" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="text-pinterest">
                                                        <i className="fab fa-pinterest" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="text-youtube">
                                                        <i className="fab fa-youtube" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="text-googleplus">
                                                        <i className="fab fa-google-plus-g" />
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="text-linkedin">
                                                        <i className="fab fa-linkedin-in" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="social" title="SOCIAL">
                            <Row className="mb-n4">
                                <Col sm={12}>
                                    <h6 className="text-center mb-3">Social profile</h6>
                                    <Card className="user-card user-card-2 shape-right">
                                        <Card.Header className="border-0 p-2 pb-0">
                                            <div className="cover-img-block">
                                                <img src={cover} alt="" className="img-fluid" />
                                                <div className="overlay" />
                                                <div className="change-cover">
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant="link" id="dropdown-basic" className="drp-icon text-white">
                                                            <i className="feather icon-camera" />
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item as={Link} to="#">
                                                                <i className="feather icon-upload-cloud mr-2" />
                                                                upload new
                                                            </Dropdown.Item>
                                                            <Dropdown.Item as={Link} to="#">
                                                                <i className="feather icon-image mr-2" />
                                                                from photos
                                                            </Dropdown.Item>
                                                            <Dropdown.Item as={Link} to="#">
                                                                <i className="feather icon-film mr-2" />
                                                                upload video
                                                            </Dropdown.Item>
                                                            <Dropdown.Item as={Link} to="#">
                                                                <i className="feather icon-trash-2 mr-2" />
                                                                remove
                                                            </Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </Card.Header>
                                        <Card.Body className="pt-0">
                                            <div className="user-about-block">
                                                <Row className="align-items-center">
                                                    <Col sm="auto" className="pr-0">
                                                        <div className="change-profile">
                                                            <Dropdown>
                                                                <Dropdown.Toggle variant="link" id="dropdown-basic">
                                                                    <div className="profile-dp">
                                                                        <img
                                                                            className="img-radius img-fluid wid-100"
                                                                            src={avatar1}
                                                                            alt="User"
                                                                        />
                                                                        <div className="overlay">
                                                                            <span>change</span>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item as={Link} to="#">
                                                                        <i className="feather icon-upload-cloud mr-2" />
                                                                        upload new
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item as={Link} to="#">
                                                                        <i className="feather icon-image mr-2" />
                                                                        from photos
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item as={Link} to="#">
                                                                        <i className="feather icon-film mr-2" />
                                                                        upload video
                                                                    </Dropdown.Item>
                                                                    <Dropdown.Item as={Link} to="#">
                                                                        <i className="feather icon-trash-2 mr-2" />
                                                                        remove
                                                                    </Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </Col>
                                                    <Col>
                                                        <h6 className="mb-1">Lary Doe</h6>
                                                        <p className="mb-0">UI/UX Designer</p>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center mb-3">Badge</h6>
                                    <Card className="user-card user-card-3 support-bar1">
                                        <Card.Body>
                                            <div className="text-center">
                                                <div className="position-relative d-inline-block">
                                                    <img className="img-radius img-fluid wid-150" src={imgAvatar3} alt="User" />
                                                    <div className="certificated-badge" title="Certificated">
                                                        <i className="fas fa-certificate text-c-blue bg-icon" />
                                                        <i className="fas fa-medal front-icon text-white" />
                                                    </div>
                                                </div>
                                                <h3 className="mb-1 mt-3 f-w-400">Joseph William</h3>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="bg-light">
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center mb-3">Social link 1</h6>
                                    <Card className="user-card user-card-3 support-bar1">
                                        <Card.Body>
                                            <div className="text-center">
                                                <div className="position-relative d-inline-block">
                                                    <img className="img-radius img-fluid wid-150" src={imgAvatar1} alt="User" />
                                                    <h3 className="mb-1 mt-3 f-w-400">Sara Soudein</h3>
                                                    <p className="mb-3 text-muted">UI/UX Designer</p>
                                                    <ul className="list-inline f-20 mt-3 mb-0">
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-facebook">
                                                                <i className="fab fa-facebook-f" />
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-twitter">
                                                                <i className="fab fa-twitter" />
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-dribbble">
                                                                <i className="fab fa-dribbble" />
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-pinterest">
                                                                <i className="fab fa-pinterest" />
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-youtube">
                                                                <i className="fab fa-youtube" />
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-googleplus">
                                                                <i className="fab fa-google-plus-g" />
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-linkedin">
                                                                <i className="fab fa-linkedin-in" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="bg-light">
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center mb-3">Social link 2 on hover</h6>
                                    <Card className="user-card user-card-3 support-bar1 social-hover">
                                        <Card.Body>
                                            <div className="text-center">
                                                <img className="img-radius img-fluid wid-150" src={imgAvatar2} alt="User" />
                                                <h3 className="mb-1 mt-3 f-w-400">Suzen</h3>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <ul className="list-unstyled f-20 mb-0 social-top-link">
                                                    <li className="list-item">
                                                        <Link to="#" className="text-facebook">
                                                            <i className="fab fa-facebook-f" />
                                                        </Link>
                                                    </li>
                                                    <li className="list-item">
                                                        <Link to="#" className="text-twitter">
                                                            <i className="fab fa-twitter" />
                                                        </Link>
                                                    </li>
                                                    <li className="list-item">
                                                        <Link to="#" className="text-dribbble">
                                                            <i className="fab fa-dribbble" />
                                                        </Link>
                                                    </li>
                                                    <li className="list-item">
                                                        <Link to="#" className="text-pinterest">
                                                            <i className="fab fa-pinterest" />
                                                        </Link>
                                                    </li>
                                                    <li className="list-item">
                                                        <Link to="#" className="text-youtube">
                                                            <i className="fab fa-youtube" />
                                                        </Link>
                                                    </li>
                                                    <li className="list-item">
                                                        <Link to="#" className="text-googleplus">
                                                            <i className="fab fa-google-plus-g" />
                                                        </Link>
                                                    </li>
                                                    <li className="list-item">
                                                        <Link to="#" className="text-linkedin">
                                                            <i className="fab fa-linkedin-in" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="bg-light">
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="other" title="OTHER">
                            <Row className="mb-n4">
                                <Col xl={4} md={6}>
                                    <h6 className="text-center mb-3">User Card</h6>
                                    <Card className="user-card user-card-3 support-bar1">
                                        <Card.Body>
                                            <div className="text-center">
                                                <div className="position-relative d-inline-block">
                                                    <img className="img-radius img-fluid wid-150" src={imgAvatar1} alt="User" />
                                                    <h3 className="mb-1 mt-3 f-w-400">Sara Soudein</h3>
                                                    <p className="mb-3 text-muted">UI/UX Designer</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="bg-light">
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center mb-3">Hover Data</h6>
                                    <Card className="user-card user-card-3 support-bar1 social-hover">
                                        <Card.Body>
                                            <div className="text-center">
                                                <img className="img-radius img-fluid wid-150" src={imgAvatar2} alt="User" />
                                                <h3 className="mb-1 mt-3 f-w-400">Jully Doe</h3>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="bg-light">
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                        <Card.Body className="hover-data text-white">
                                            <div className="btn-page">
                                                <h4 className="text-white">Hire Me?</h4>
                                                <p className="mb-1">Lorem Ipsum is simply dummy text</p>
                                                <p className="mb-3">been the industry's standard</p>
                                                <Button variant="warning" className="waves-effect waves-light">
                                                    <i className="feather icon-link" /> Meating
                                                </Button>
                                                <Button variant="danger" className="waves-effect waves-light">
                                                    <i className="feather icon-download" /> Resume
                                                </Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center mb-3">Badge</h6>
                                    <Card className="user-card user-card-3 support-bar1">
                                        <Card.Body>
                                            <div className="text-center">
                                                <div className="position-relative d-inline-block">
                                                    <img className="img-radius img-fluid wid-150" src={imgAvatar3} alt="User" />
                                                    <div className="certificated-badge" title="Certificated">
                                                        <i className="fas fa-certificate text-c-blue bg-icon" />
                                                        <i className="fas fa-medal front-icon text-white" />
                                                    </div>
                                                </div>
                                                <h3 className="mb-1 mt-3 f-w-400">Suzen</h3>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="bg-light">
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center mb-3">Social link</h6>
                                    <Card className="user-card user-card-3 support-bar1">
                                        <Card.Body>
                                            <div className="text-center">
                                                <div className="position-relative d-inline-block">
                                                    <img className="img-radius img-fluid wid-150" src={imgAvatar1} alt="User" />
                                                    <h3 className="mb-1 mt-3 f-w-400">Josephin Doe</h3>
                                                    <p className="mb-3 text-muted">UI/UX Designer</p>
                                                    <ul className="list-inline f-20 mt-3 mb-0">
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-facebook">
                                                                <i className="fab fa-facebook-f" />
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-twitter">
                                                                <i className="fab fa-twitter" />
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-dribbble">
                                                                <i className="fab fa-dribbble" />
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-pinterest">
                                                                <i className="fab fa-pinterest" />
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-youtube">
                                                                <i className="fab fa-youtube" />
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-googleplus">
                                                                <i className="fab fa-google-plus-g" />
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link to="#" className="text-linkedin">
                                                                <i className="fab fa-linkedin-in" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="bg-light">
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center mb-3">Social link on hover</h6>
                                    <Card className="user-card user-card-3 support-bar1 social-hover">
                                        <Card.Body>
                                            <div className="text-center">
                                                <img className="img-radius img-fluid wid-150" src={imgAvatar3} alt="User" />
                                                <h3 className="mb-1 mt-3 f-w-400">Joseph William</h3>
                                                <p className="mb-3 text-muted">UI/UX Designer</p>
                                                <ul className="list-unstyled f-20 mb-0 social-top-link">
                                                    <li className="list-item">
                                                        <Link to="#" className="text-facebook">
                                                            <i className="fab fa-facebook-f" />
                                                        </Link>
                                                    </li>
                                                    <li className="list-item">
                                                        <Link to="#" className="text-twitter">
                                                            <i className="fab fa-twitter" />
                                                        </Link>
                                                    </li>
                                                    <li className="list-item">
                                                        <Link to="#" className="text-dribbble">
                                                            <i className="fab fa-dribbble" />
                                                        </Link>
                                                    </li>
                                                    <li className="list-item">
                                                        <Link to="#" className="text-pinterest">
                                                            <i className="fab fa-pinterest" />
                                                        </Link>
                                                    </li>
                                                    <li className="list-item">
                                                        <Link to="#" className="text-youtube">
                                                            <i className="fab fa-youtube" />
                                                        </Link>
                                                    </li>
                                                    <li className="list-item">
                                                        <Link to="#" className="text-googleplus">
                                                            <i className="fab fa-google-plus-g" />
                                                        </Link>
                                                    </li>
                                                    <li className="list-item">
                                                        <Link to="#" className="text-linkedin">
                                                            <i className="fab fa-linkedin-in" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="bg-light">
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">37</h6>
                                                    <p className="mb-0">Mails</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center mb-3">User card</h6>
                                    <Card>
                                        <div className="widget-profile-card-1">
                                            <img className="img-fluid" src={slider7} alt="User" />
                                            <div className="middle-user">
                                                <img className="img-fluid img-thumbnail" src={userBlurBg} alt="Profile" />
                                            </div>
                                        </div>
                                        <Card.Body className="text-center">
                                            <h3>Lary Doe</h3>
                                            <p>Web Designer</p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a, rem accusantium
                                                recusandae beatae.
                                            </p>
                                        </Card.Body>
                                        <Card.Footer className="bg-inverse">
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">400</h6>
                                                    <p className="mb-0">Designs</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">90</h6>
                                                    <p className="mb-0">Projects</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">70</h6>
                                                    <p className="mb-0">Development</p>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center mb-3">User profile</h6>
                                    <Card className="widget-profile-card-2">
                                        <img className="img-fluid" src={slider5} alt="User" />
                                        <Card.Body className="text-center">
                                            <img
                                                className="img-fluid img-thumbnail img-radius user-img m-b-20 m-t-10"
                                                src={imgRound1}
                                                alt="User"
                                            />
                                            <h3>Jenny Joe</h3>
                                            <p>Web Designer</p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a, rem accusantium
                                                recusandae beatae.
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center mb-3">User profile</h6>
                                    <Card>
                                        <div className="widget-profile-card-3">
                                            <img className="img-fluid img-thumbnail" src={imgRound1} alt="User" />
                                        </div>
                                        <Card.Body className="text-center">
                                            <h3>John Doe</h3>
                                            <p>Web Designer</p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci a, rem accusantium
                                                recusandae beatae.
                                            </p>
                                        </Card.Body>
                                        <Card.Footer className="bg-inverse">
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">400</h6>
                                                    <p className="mb-0">Designs</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">90</h6>
                                                    <p className="mb-0">Projects</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">70</h6>
                                                    <p className="mb-0">Development</p>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center mb-3">Background profile image</h6>
                                    <Card>
                                        <div className="profile-card">
                                            <img className="img-fluid" src={profilePerson1} alt="User" />
                                            <Card.Body className="text-center">
                                                <h3 className="text-white">John Steve</h3>
                                                <p>UI/UX Designer at CreativesCastle Studio</p>
                                                <Button variant="info" className="waves-effect waves-light">
                                                    + Follow
                                                </Button>
                                            </Card.Body>
                                        </div>
                                        <Card.Footer className="bg-inverse">
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">134</h6>
                                                    <p className="mb-0">Shots</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">13,227</h6>
                                                    <p className="mb-0">Shots</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">488</h6>
                                                    <p className="mb-0">Shots</p>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col xl={4} md={6}>
                                    <h6 className="text-center mb-3">Background cover image</h6>
                                    <Card>
                                        <Card.Body className="p-0">
                                            <div className="widget-main-card blur-user-card">
                                                <img className="img-fluid" src={userBlurBg} alt="User" />
                                                <h3 className="text-white">Linda Fox</h3>
                                                <p>UI Designer at CreativesCastle Studio</p>
                                                <Button variant="info" className="waves-effect waves-light m-t-30">
                                                    + Follow
                                                </Button>
                                                <Card.Footer className="bg-inverse mt-4">
                                                    <Row className="text-center">
                                                        <Col>
                                                            <h4 className="mb-1 text-white">134</h4>
                                                            <span className="mb-0">Shots</span>
                                                        </Col>
                                                        <Col>
                                                            <h4 className="mb-1 text-white">13,227</h4>
                                                            <span className="mb-0">Shots</span>
                                                        </Col>
                                                        <Col>
                                                            <h4 className="mb-1 text-white">488</h4>
                                                            <span className="mb-0">Shots</span>
                                                        </Col>
                                                    </Row>
                                                </Card.Footer>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={5} md={6}>
                                    <h6 className="text-center mb-3">User settings</h6>
                                    <Card>
                                        <Card.Header>
                                            <Row className="align-items-center">
                                                <Col>
                                                    <Row className="align-items-center">
                                                        <Col sm="auto" className="pr-0">
                                                            <img className="img-radius img-fluid wid-60" src={avatar2} alt="User" />
                                                        </Col>
                                                        <Col>
                                                            <h6 className="mb-1">Josephin Doe</h6>
                                                            <p className="mb-0">UI/UX Designer</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                                <Col sm="auto">
                                                    <Button variant="primary" className="waves-effect waves-light">
                                                        Edit
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Card.Header>
                                        <Card.Body>
                                            <Row className="text-center">
                                                <Col>
                                                    <h6 className="mb-1">69</h6>
                                                    <p className="mb-0">Shots</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">2749</h6>
                                                    <p className="mb-0">Followers</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">678</h6>
                                                    <p className="mb-0">Following</p>
                                                </Col>
                                                <Col>
                                                    <h6 className="mb-1">78</h6>
                                                    <p className="mb-0">Like</p>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Row className="align-items-center">
                                                <Col>
                                                    <Link to="#">
                                                        <i className="feather icon-mail" /> Message
                                                    </Link>
                                                </Col>
                                                <Col sm="auto">
                                                    <Button variant="secondary" size="sm" className="waves-effect waves-light m-0">
                                                        Follow
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default UserCard;
