import React, { useRef } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

import imgSlide1 from '../../../assets/images/slider/img-slide-1.jpg';
import imgSlide2 from '../../../assets/images/slider/img-slide-2.jpg';
import imgSlide3 from '../../../assets/images/slider/img-slide-3.jpg';
import imgSlide4 from '../../../assets/images/slider/img-slide-4.jpg';
import imgSlide5 from '../../../assets/images/slider/img-slide-5.jpg';
import imgSlide6 from '../../../assets/images/slider/img-slide-6.jpg';
import imgSlide7 from '../../../assets/images/slider/img-slide-7.jpg';

const AdvanceSlider = () => {
    const slider = useRef(null);
    const sliderNav = useRef(null);

    const next = () => {
        slider.current.slickNext();
    };

    const previous = () => {
        slider.current.slickPrev();
    };

    const nextNav = () => {
        sliderNav.current.slickNext();
    };

    const previousNav = () => {
        sliderNav.current.slickPrev();
    };

    const settingsBasic = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '500px',
        autoplay: true,
        autoplaySpeed: 5000
    };

    const settingsMultiResponsive = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const settingsDots = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000
    };

    const settingsButtons = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const settingsNavButtonDots = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        /*autoplay: true,
        autoplaySpeed: 1500,*/
        appendDots: (dots) => (
            <div
                className="pc-dots"
                style={{
                    backgroundColor: '#000',
                    padding: '8px',
                    bottom: '-33px'
                }}
            >
                <ul className="p-0 m-0"> {dots} </ul>
            </div>
        ),
        customPaging: (i) => <div className="pc-dot">{i + 1}</div>
    };

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-slick"
                    />
                </Col>
            </Row>
            <Row className="btn-page">
                <Col md={12} xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Basic Slider</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Slider {...settingsBasic}>
                                <div>
                                    <img className="d-block w-100" src={imgSlide1} alt="Slide1" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide3} alt="Slide3" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide2} alt="Slide2" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide4} alt="Slide4" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide5} alt="Slide5" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide6} alt="Slide6" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide7} alt="Slide7" />
                                </div>
                            </Slider>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Only Dots with Fade</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Slider {...settingsDots}>
                                <div>
                                    <img className="d-block w-100" src={imgSlide1} alt="Slide1" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide3} alt="Slide3" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide2} alt="Slide2" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide4} alt="Slide4" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide5} alt="Slide5" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide6} alt="Slide6" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide7} alt="Slide7" />
                                </div>
                            </Slider>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Custom Buttons and Dots</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Slider {...settingsNavButtonDots} ref={slider}>
                                <div>
                                    <img className="d-block w-100" src={imgSlide1} alt="Slide1" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide3} alt="Slide3" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide2} alt="Slide2" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide4} alt="Slide4" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide5} alt="Slide5" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide6} alt="Slide6" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide7} alt="Slide7" />
                                </div>
                            </Slider>
                            <div className="mt-5 text-center">
                                <Button size="sm" onClick={previous}>
                                    Previous
                                </Button>
                                <Button size="sm" onClick={next}>
                                    Next
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Only Nav Buttons</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Slider {...settingsButtons} ref={sliderNav}>
                                <div>
                                    <img className="d-block w-100" src={imgSlide1} alt="Slide1" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide3} alt="Slide3" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide2} alt="Slide2" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide4} alt="Slide4" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide5} alt="Slide5" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide6} alt="Slide6" />
                                </div>
                                <div>
                                    <img className="d-block w-100" src={imgSlide7} alt="Slide7" />
                                </div>
                            </Slider>
                            <div className="text-center">
                                <Button size="sm" onClick={previousNav}>
                                    <i className="feather icon-chevron-left m-0" />
                                </Button>
                                <Button size="sm" onClick={nextNav}>
                                    <i className="feather icon-chevron-right m-0" />
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Multi-Items with Responsive Slider</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Slider {...settingsMultiResponsive}>
                                <div className="p-10">
                                    <img className="w-100" src={imgSlide1} alt="Slide1" />
                                </div>
                                <div className="p-10">
                                    <img className="w-100" src={imgSlide3} alt="Slide3" />
                                </div>
                                <div className="p-10">
                                    <img className="w-100" src={imgSlide2} alt="Slide2" />
                                </div>
                                <div className="p-10">
                                    <img className="w-100" src={imgSlide4} alt="Slide4" />
                                </div>
                                <div className="p-10">
                                    <img className="w-100" src={imgSlide5} alt="Slide5" />
                                </div>
                                <div className="p-10">
                                    <img className="w-100" src={imgSlide6} alt="Slide6" />
                                </div>
                                <div className="p-10">
                                    <img className="w-100" src={imgSlide7} alt="Slide7" />
                                </div>
                            </Slider>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AdvanceSlider;
