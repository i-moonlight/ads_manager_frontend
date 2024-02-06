import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col, Card, Dropdown, Carousel, Button } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import { Modal, ModalGateway } from 'react-images';

import { photos } from './gallery';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../assets/images/user/avatar-4.jpg';
import avatar5 from '../../assets/images/user/avatar-5.jpg';

import bg1 from '../../assets/images/profile/bg-1.jpg';
import bg2 from '../../assets/images/profile/bg-2.jpg';
import bg3 from '../../assets/images/profile/bg-3.jpg';

import slider5 from '../../assets/images/widget/slider5.jpg';
import slider7 from '../../assets/images/widget/slider7.jpg';
import slider6 from '../../assets/images/widget/slider6.jpg';

import coverImage from '../../assets/images/profile/cover.jpg';
import LightBox from '../../components/Gallery/LightBox';

const UserProfile = () => {
    const [activeProfileTab, setActiveProfileTab] = useState('home');
    const [isPersonalEdit, setIsPersonalEdit] = useState(false);
    const [isContactEdit, setIsContactEdit] = useState(false);
    const [isOtherEdit, setIsOtherEdit] = useState(false);

    const profileTabClass = 'nav-link text-reset';
    const profileTabActiveClass = 'nav-link text-reset active';

    const profilePanClass = 'tab-pane fade';
    const profilePanActiveClass = 'tab-pane fade show active';

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <React.Fragment>
            <Card className="user-profile user-card mb-4 p-0">
                <Card.Header className="border-0 p-0 pb-0 pt-10">
                    <div className="cover-img-block">
                        <img src={coverImage} className="img-fluid" alt="" />
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
                <Card.Body className="py-0">
                    <div className="user-about-block m-0">
                        <Row>
                            <Col md={4} className="text-center mt-n5">
                                <div className="change-profile text-center">
                                    <Dropdown className="w-auto d-inline-block">
                                        <Dropdown.Toggle as="a" variant="link" id="dropdown-basic">
                                            <div className="profile-dp">
                                                <div className="position-relative d-inline-block">
                                                    <img className="img-radius img-fluid wid-100" src={avatar5} alt="User" />
                                                </div>
                                                <div className="overlay">
                                                    <span>change</span>
                                                </div>
                                            </div>
                                            <div className="certificated-badge">
                                                <i className="fas fa-certificate text-c-blue bg-icon" />
                                                <i className="fas fa-check front-icon text-white" />
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
                                <h5 className="mb-1">Lary Doe</h5>
                                <p className="mb-2 text-muted">UI/UX Designer</p>
                            </Col>
                            <Col md={8} className="mt-md-4">
                                <Row>
                                    <Col>
                                        <Link to="#" className="mb-1 text-muted d-flex align-items-end text-h-primary">
                                            <i className="feather icon-globe mr-2 f-18" />
                                            www.codedthemescom
                                        </Link>
                                        <div className="clearfix" />
                                        <a href="mailto:demo@domain.com" className="mb-1 text-muted d-flex align-items-end text-h-primary">
                                            <i className="feather icon-mail mr-2 f-18" />
                                            demo@domain.com
                                        </a>
                                        <div className="clearfix" />
                                        <Link to="#" className="mb-1 text-muted d-flex align-items-end text-h-primary">
                                            <i className="feather icon-phone mr-2 f-18" />
                                            +1 9999-999-999
                                        </Link>
                                    </Col>
                                    <Col>
                                        <div className="media">
                                            <i className="feather icon-map-pin mr-2 mt-1 f-18" />
                                            <div className="media-body">
                                                <p className="mb-0 text-muted">4289 Calvin Street</p>
                                                <p className="mb-0 text-muted">Baltimore, near MD Tower Maryland,</p>
                                                <p className="mb-0 text-muted">Maryland (21201)</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <ul className="nav nav-tabs profile-tabs nav-fill" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <Link
                                            to="#"
                                            className={activeProfileTab === 'home' ? profileTabActiveClass : profileTabClass}
                                            onClick={() => {
                                                setActiveProfileTab('home');
                                            }}
                                            id="home-tab"
                                        >
                                            <i className="feather icon-home mr-2" />
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="#"
                                            className={activeProfileTab === 'profile' ? profileTabActiveClass : profileTabClass}
                                            onClick={() => {
                                                setActiveProfileTab('profile');
                                            }}
                                            id="profile-tab"
                                        >
                                            <i className="feather icon-user mr-2" />
                                            Profile
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="#"
                                            className={activeProfileTab === 'contact' ? profileTabActiveClass : profileTabClass}
                                            onClick={() => {
                                                setActiveProfileTab('contact');
                                            }}
                                            id="contact-tab"
                                        >
                                            <i className="feather icon-phone mr-2" />
                                            My Contacts
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to="#"
                                            className={activeProfileTab === 'gallery' ? profileTabActiveClass : profileTabClass}
                                            onClick={() => {
                                                setActiveProfileTab('gallery');
                                            }}
                                            id="gallery-tab"
                                        >
                                            <i className="feather icon-image mr-2" />
                                            Gallery
                                        </Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Card.Body>
            </Card>
            <Row>
                <Col md={8} className="order-md-2">
                    <div className="tab-content">
                        <div className={activeProfileTab === 'home' ? profilePanActiveClass : profilePanClass} id="home">
                            <Card>
                                <Card.Header>
                                    <h5 className="font-weight-normal">
                                        <Link to="#" className="text-h-primary text-reset">
                                            <b className="font-weight-bolder">Josephin Doe</b>
                                        </Link>{' '}
                                        posted on your timeline
                                    </h5>
                                    <p className="mb-0 text-muted">50 minutes ago</p>
                                </Card.Header>
                                <Link to="#">
                                    <img src={bg1} alt="" className="img-fluid" />
                                </Link>
                                <Card.Body>
                                    <Link to="#" className="text-h-primary">
                                        <h6>The new Lorem Ipsum is simply</h6>
                                    </Link>
                                    <p className="text-muted mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                        and scrambled it to make a type specimen book.
                                    </p>
                                </Card.Body>
                                <Card.Body className="border-top border-bottom">
                                    <ul className="list-inline m-0">
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-danger text-h-danger">
                                                <i className="feather icon-heart-on mr-2" />
                                                Like
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-muted text-h-primary">
                                                <i className="feather icon-message-square mr-2" />
                                                Comment
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-muted text-h-primary">
                                                <i className="feather icon-share-2 mr-2" />
                                                Share
                                            </Link>
                                        </li>
                                    </ul>
                                </Card.Body>
                                <Card.Body>
                                    <Row className="justify-content-between mb-4">
                                        <Col sm="auto">
                                            <Link to="#" className="text-muted text-h-primary">
                                                Comment (50)
                                            </Link>
                                        </Col>
                                        <Col sm="auto">
                                            <Link to="#" className="text-muted text-h-primary">
                                                See All
                                            </Link>
                                        </Col>
                                    </Row>
                                    <div className="media mb-0">
                                        <img src={avatar2} alt="user" className="img-radius wid-30 align-top m-r-15" />
                                        <div className="media-body">
                                            <Link to="#">
                                                <h6 className="mb-0 text-h-primary">Alex Thompson</h6>
                                            </Link>
                                            <p className="m-b-0">
                                                Looking Very nice type and scrambled
                                                <Link to="#" className="text-muted text-h-danger ml-1">
                                                    <small>Like</small>
                                                </Link>
                                                <Link to="#" className="text-muted text-h-primary ml-1">
                                                    <small>Comment</small>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="media mb-0">
                                        <img src={avatar3} alt="user" className="img-radius wid-30 align-top m-r-15" />
                                        <div className="media-body">
                                            <Link to="#">
                                                <h6 className="mb-0 text-h-primary">Alex Thompson</h6>
                                            </Link>
                                            <p className="m-b-0">
                                                Nice Pic printing and typesetting industry
                                                <Link to="#" className="text-muted text-h-danger ml-1">
                                                    <small>Like</small>
                                                </Link>
                                                <Link to="#" className="text-muted text-h-primary ml-1">
                                                    <small>Comment</small>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="media mb-0">
                                        <img src={avatar1} alt="user" className="img-radius wid-40 align-top m-r-15" />
                                        <div className="media-body">
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control form-control border-0 shadow-none px-0"
                                                    placeholder="Write comment hear !. . ."
                                                />
                                                <div className="input-group-append">
                                                    <Button variant="primary">
                                                        <i className="feather icon-message-circle" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <h5 className="font-weight-normal">
                                        <Link to="#" className="text-h-primary text-reset">
                                            <b className="font-weight-bolder">Josephin Doe</b>
                                        </Link>{' '}
                                        posted on your timeline
                                    </h5>
                                    <p className="mb-0 text-muted">50 minutes ago</p>
                                </Card.Header>
                                <Link to="#">
                                    <img src={bg2} alt="" className="img-fluid" />
                                </Link>
                                <Card.Body>
                                    <Link to="#" className="text-h-primary">
                                        <h6>The new Lorem Ipsum is simply</h6>
                                    </Link>
                                    <p className="text-muted mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                        and scrambled it to make a type specimen book.
                                    </p>
                                </Card.Body>
                                <Card.Body className="border-top border-bottom">
                                    <ul className="list-inline m-0">
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-muted text-h-danger">
                                                <i className="feather icon-heart-on mr-2" />
                                                Like
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-muted text-h-primary">
                                                <i className="feather icon-message-square mr-2" />
                                                Comment
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-muted text-h-primary">
                                                <i className="feather icon-share-2 mr-2" />
                                                Share
                                            </Link>
                                        </li>
                                    </ul>
                                </Card.Body>
                                <Card.Body>
                                    <Row className="justify-content-between mb-4">
                                        <Col sm="auto">
                                            <Link to="#" className="text-muted text-h-primary">
                                                Comment (50)
                                            </Link>
                                        </Col>
                                        <Col sm="auto">
                                            <Link to="#" className="text-muted text-h-primary">
                                                See All
                                            </Link>
                                        </Col>
                                    </Row>
                                    <div className="media mb-0">
                                        <img src={avatar3} alt="user" className="img-radius wid-30 align-top m-r-15" />
                                        <div className="media-body">
                                            <Link to="#">
                                                <h6 className="mb-0 text-h-primary">Alex Thompson</h6>
                                            </Link>
                                            <p className="m-b-0">
                                                Nice Pic printing and typesetting industry
                                                <Link to="#" className="text-muted text-h-danger ml-1">
                                                    <small>Like</small>
                                                </Link>
                                                <Link to="#" className="text-muted text-h-primary ml-1">
                                                    <small>Comment</small>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="media mb-0">
                                        <img src={avatar1} alt="user" className="img-radius wid-40 align-top m-r-15" />
                                        <div className="media-body">
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control form-control border-0 shadow-none px-0"
                                                    placeholder="Write comment hear !. . ."
                                                />
                                                <div className="input-group-append">
                                                    <Button variant="primary">
                                                        <i className="feather icon-message-circle" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <h5 className="font-weight-normal">
                                        <Link to="#" className="text-h-primary text-reset">
                                            <b className="font-weight-bolder">Josephin Doe</b>
                                        </Link>{' '}
                                        posted on your timeline
                                    </h5>
                                    <p className="mb-0 text-muted">50 minutes ago</p>
                                </Card.Header>
                                <Link to="#">
                                    <img src={bg3} alt="" className="img-fluid" />
                                </Link>
                                <Card.Body>
                                    <Link to="#" className="text-h-primary">
                                        <h6>The new Lorem Ipsum is simply</h6>
                                    </Link>
                                    <p className="text-muted mb-0">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                        and scrambled it to make a type specimen book.
                                    </p>
                                </Card.Body>
                                <Card.Body className="border-top border-bottom">
                                    <ul className="list-inline m-0">
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-muted text-h-danger">
                                                <i className="feather icon-heart-on mr-2" />
                                                Like
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-muted text-h-primary">
                                                <i className="feather icon-message-square mr-2" />
                                                Comment
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-muted text-h-primary">
                                                <i className="feather icon-share-2 mr-2" />
                                                Share
                                            </Link>
                                        </li>
                                    </ul>
                                </Card.Body>
                                <Card.Body>
                                    <Row className="justify-content-between mb-4">
                                        <Col sm="auto">
                                            <Link to="#" className="text-muted text-h-primary">
                                                Comment (0)
                                            </Link>
                                        </Col>
                                        <Col sm="auto">
                                            <Link to="#" className="text-muted text-h-primary">
                                                See All
                                            </Link>
                                        </Col>
                                    </Row>
                                    <div className="media mb-0">
                                        <img src={avatar1} alt="user" className="img-radius wid-40 align-top m-r-15" />
                                        <div className="media-body">
                                            <div className="input-group mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control form-control border-0 shadow-none px-0"
                                                    placeholder="Write comment hear !. . ."
                                                />
                                                <div className="input-group-append">
                                                    <Button variant="primary">
                                                        <i className="feather icon-message-circle" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className={activeProfileTab === 'profile' ? profilePanActiveClass : profilePanClass} id="profile">
                            <Card>
                                <Card.Body className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">Personal details</h5>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="rounded m-0 float-right"
                                        onClick={() => setIsPersonalEdit(!isPersonalEdit)}
                                    >
                                        <i className={isPersonalEdit ? 'feather icon-x' : 'feather icon-edit'} />
                                    </Button>
                                </Card.Body>
                                <Card.Body
                                    className={
                                        isPersonalEdit ? 'border-top pro-det-edit collapse' : 'border-top pro-det-edit collapse show'
                                    }
                                >
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Full Name</label>
                                        <Col sm={9}>Lary Doe</Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Gender</label>
                                        <Col sm={9}>Male</Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Birth Date</label>
                                        <Col sm={9}>16-12-1994</Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Martial Status</label>
                                        <Col sm={9}>Unmarried</Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Location</label>
                                        <Col sm={9}>
                                            <p className="mb-0 text-muted">4289 Calvin Street</p>
                                            <p className="mb-0 text-muted">Baltimore, near MD Tower Maryland,</p>
                                            <p className="mb-0 text-muted">Maryland (21201)</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body
                                    className={
                                        isPersonalEdit ? 'border-top pro-det-edit collapse show' : 'border-top pro-det-edit collapse'
                                    }
                                >
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Full Name</label>
                                        <Col sm={9}>
                                            <input type="text" className="form-control" placeholder="Full Name" defaultValue="Lary Doe" />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Gender</label>
                                        <Col sm={9}>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input
                                                    type="radio"
                                                    id="customRadioInline1"
                                                    name="customRadioInline1"
                                                    className="custom-control-input"
                                                    defaultValue="male"
                                                    defaultChecked
                                                />
                                                <label className="custom-control-label" htmlFor="customRadioInline1">
                                                    Male
                                                </label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input
                                                    type="radio"
                                                    id="customRadioInline2"
                                                    name="customRadioInline1"
                                                    className="custom-control-input"
                                                    defaultValue="female"
                                                />
                                                <label className="custom-control-label" htmlFor="customRadioInline2">
                                                    Female
                                                </label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Birth Date</label>
                                        <Col sm={9}>
                                            <input type="date" className="form-control" defaultValue="1994-12-16" />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Martial Status</label>
                                        <Col sm={9}>
                                            <select className="form-control" id="exampleFormControlSelect1">
                                                <option defaultValue="">Select Marital Status</option>
                                                <option defaultValue="married">Married</option>
                                                <option defaultValue="unmarried" defaultChecked>
                                                    Unmarried
                                                </option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Location</label>
                                        <Col sm={9}>
                                            <textarea
                                                className="form-control"
                                                defaultValue="4289 Calvin Street,  Baltimore, near MD Tower Maryland, Maryland (21201)"
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label" />
                                        <Col sm={9}>
                                            <Button type="submit" variant="primary" onClick={() => setIsPersonalEdit(!isPersonalEdit)}>
                                                Save
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">Contact Information</h5>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="rounded m-0 float-right"
                                        onClick={() => setIsContactEdit(!isContactEdit)}
                                    >
                                        <i className={isContactEdit ? 'feather icon-x' : 'feather icon-edit'} />
                                    </Button>
                                </Card.Body>
                                <Card.Body
                                    className={isContactEdit ? 'border-top pro-det-edit collapse' : 'border-top pro-det-edit collapse show'}
                                >
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Mobile Number</label>
                                        <Col sm={9}>+1 9999-999-999</Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Email Address</label>
                                        <Col sm={9}>demo@domain.com</Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Twitter</label>
                                        <Col sm={9}>twitter@phonixcoded</Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Skype</label>
                                        <Col sm={9}>skype@phonixcoded</Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body
                                    className={isContactEdit ? 'border-top pro-det-edit collapse show' : 'border-top pro-det-edit collapse'}
                                >
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Mobile Number</label>
                                        <Col sm={9}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Full Name"
                                                defaultValue="+1 9999-999-999"
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Email Address</label>
                                        <Col sm={9}>
                                            <input type="text" className="form-control" placeholder="Ema" defaultValue="demo@domain.com" />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Twitter</label>
                                        <Col sm={9}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Twitter"
                                                defaultValue="twitter@domain.com"
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Skype</label>
                                        <Col sm={9}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Skype"
                                                defaultValue="skype@domain.com"
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label" />
                                        <Col sm={9}>
                                            <Button type="submit" variant="primary" onClick={() => setIsContactEdit(!isContactEdit)}>
                                                Save
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body className="d-flex align-items-center justify-content-between">
                                    <h5 className="mb-0">Other Information</h5>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="rounded m-0 float-right"
                                        onClick={() => setIsOtherEdit(!isOtherEdit)}
                                    >
                                        <i className={isOtherEdit ? 'feather icon-x' : 'feather icon-edit'} />
                                    </Button>
                                </Card.Body>
                                <Card.Body
                                    className={isOtherEdit ? 'border-top pro-det-edit collapse' : 'border-top pro-det-edit collapse show'}
                                >
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Occupation</label>
                                        <Col sm={9}>Designer</Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Skills</label>
                                        <Col sm={9}>C#, Javascript, Scss</Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Jobs</label>
                                        <Col sm={9}>Codedthemes</Col>
                                    </Row>
                                </Card.Body>
                                <Card.Body
                                    className={isOtherEdit ? 'border-top pro-det-edit collapse show' : 'border-top pro-det-edit collapse'}
                                >
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Occupation</label>
                                        <Col sm={9}>
                                            <input type="text" className="form-control" placeholder="Full Name" defaultValue="Designer" />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Skills</label>
                                        <Col sm={9}>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Skill"
                                                defaultValue="C#, Javascript, Scss"
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label font-weight-bolder">Jobs</label>
                                        <Col sm={9}>
                                            <input type="text" className="form-control" placeholder="Skill" defaultValue="Codedtehemes" />
                                        </Col>
                                    </Row>
                                    <Row className="form-group">
                                        <label className="col-sm-3 col-form-label" />
                                        <Col sm={9}>
                                            <Button type="submit" variant="primary" onClick={() => setIsOtherEdit(!isOtherEdit)}>
                                                Save
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className={activeProfileTab === 'contact' ? profilePanActiveClass : profilePanClass} id="contact">
                            <Row>
                                <Col md={6}>
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
                                <Col md={6}>
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
                                <Col md={6}>
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
                            </Row>
                        </div>

                        <div className={activeProfileTab === 'gallery' ? profilePanActiveClass : profilePanClass} id="gallery">
                            <Gallery photos={photos} onClick={openLightbox} />
                            <ModalGateway>
                                {viewerIsOpen ? (
                                    <Modal onClose={closeLightbox}>
                                        <LightBox currentImage={currentImage} photos={photos} />
                                    </Modal>
                                ) : null}
                            </ModalGateway>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="order-md-1">
                    <Card>
                        <Card.Header className="d-flex align-items-center justify-content-between">
                            <h5 className="mb-0">Friends</h5>
                            <span className="badge badge-light-primary float-right">100+</span>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <img
                                            src={avatar1}
                                            alt="user"
                                            className="img-radius mb-2 wid-50"
                                            data-toggle="tooltip"
                                            title="Joseph William"
                                        />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <img
                                            src={avatar2}
                                            alt="user"
                                            className="img-radius mb-2 wid-50"
                                            data-toggle="tooltip"
                                            title="Sara Soudein"
                                        />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <img
                                            src={avatar3}
                                            alt="user"
                                            className="img-radius mb-2 wid-50"
                                            data-toggle="tooltip"
                                            title="John Doe"
                                        />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <img
                                            src={avatar4}
                                            alt="user"
                                            className="img-radius mb-2 wid-50"
                                            data-toggle="tooltip"
                                            title="Joseph William"
                                        />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <img
                                            src={avatar5}
                                            alt="user"
                                            className="img-radius wid-50"
                                            data-toggle="tooltip"
                                            title="Sara Soudein"
                                        />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <img
                                            src={avatar1}
                                            alt="user"
                                            className="img-radius wid-50"
                                            data-toggle="tooltip"
                                            title="Joseph William"
                                        />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <img
                                            src={avatar2}
                                            alt="user"
                                            className="img-radius wid-50"
                                            data-toggle="tooltip"
                                            title="Sara Soudein"
                                        />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="#">
                                        <img
                                            src={avatar3}
                                            alt="user"
                                            className="img-radius wid-50"
                                            data-toggle="tooltip"
                                            title="John Doe"
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className="new-cust-card">
                        <Card.Header>
                            <Card.Title as="h5">Message</Card.Title>
                        </Card.Header>
                        <div style={{ height: '415px' }}>
                            <PerfectScrollbar>
                                <Card.Body className="p-b-0">
                                    <div className="align-middle m-b-25">
                                        <img src={avatar1} alt="user" className="img-radius align-top m-r-15" />
                                        <div className="d-inline-block">
                                            <Link to="#">
                                                <h6>Alex Thompson</h6>
                                            </Link>
                                            <p className="m-b-0">Cheers!</p>
                                            <span className="status active" />
                                        </div>
                                    </div>
                                    <div className="align-middle m-b-25">
                                        <img src={avatar2} alt="user" className="img-radius align-top m-r-15" />
                                        <div className="d-inline-block">
                                            <Link to="#">
                                                <h6>John Doue</h6>
                                            </Link>
                                            <p className="m-b-0">stay hungry stay foolish!</p>
                                            <span className="status active" />
                                        </div>
                                    </div>
                                    <div className="align-middle m-b-25">
                                        <img src={avatar3} alt="user" className="img-radius align-top m-r-15" />
                                        <div className="d-inline-block">
                                            <Link to="#">
                                                <h6>Alex Thompson</h6>
                                            </Link>
                                            <p className="m-b-0">Cheers!</p>
                                            <span className="status deactive">
                                                <i className="far fa-clock m-r-10" />
                                                30 min ago
                                            </span>
                                        </div>
                                    </div>
                                    <div className="align-middle m-b-25">
                                        <img src={avatar4} alt="user" className="img-radius align-top m-r-15" />
                                        <div className="d-inline-block">
                                            <Link to="#">
                                                <h6>John Doue</h6>
                                            </Link>
                                            <p className="m-b-0">Cheers!</p>
                                            <span className="status deactive">
                                                <i className="far fa-clock m-r-10" />
                                                10 min ago
                                            </span>
                                        </div>
                                    </div>
                                    <div className="align-middle m-b-25">
                                        <img src={avatar5} alt="user" className="img-radius align-top m-r-15" />
                                        <div className="d-inline-block">
                                            <Link to="#">
                                                <h6>Shirley Hoe</h6>
                                            </Link>
                                            <p className="m-b-0">stay hungry stay foolish!</p>
                                            <span className="status active" />
                                        </div>
                                    </div>
                                    <div className="align-middle m-b-25">
                                        <img src={avatar1} alt="user" className="img-radius align-top m-r-15" />
                                        <div className="d-inline-block">
                                            <Link to="#">
                                                <h6>John Doue</h6>
                                            </Link>
                                            <p className="m-b-0">Cheers!</p>
                                            <span className="status active" />
                                        </div>
                                    </div>
                                    <div className="align-middle m-b-25">
                                        <img src={avatar2} alt="user" className="img-radius align-top m-r-15" />
                                        <div className="d-inline-block">
                                            <Link to="#">
                                                <h6>James Alexander</h6>
                                            </Link>
                                            <p className="m-b-0">stay hungry stay foolish!</p>
                                            <span className="status active" />
                                        </div>
                                    </div>
                                    <div className="align-middle m-b-25">
                                        <img src={avatar3} alt="user" className="img-radius align-top m-r-15" />
                                        <div className="d-inline-block">
                                            <Link to="#">
                                                <h6>John Doue</h6>
                                            </Link>
                                            <p className="m-b-0">Cheers!</p>
                                            <span className="status deactive">
                                                <i className="far fa-clock m-r-10" />
                                                10 min ago
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </PerfectScrollbar>
                        </div>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default UserProfile;
