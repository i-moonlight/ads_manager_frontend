import React from 'react';
import { Row, Col, Card, Carousel } from 'react-bootstrap';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

import imgSlide1 from '../../../assets/images/slider/img-slide-1.jpg';
import imgSlide2 from '../../../assets/images/slider/img-slide-2.jpg';
import imgSlide3 from '../../../assets/images/slider/img-slide-3.jpg';
import imgSlide4 from '../../../assets/images/slider/img-slide-4.jpg';
import imgSlide5 from '../../../assets/images/slider/img-slide-5.jpg';
import imgSlide6 from '../../../assets/images/slider/img-slide-6.jpg';
import imgSlide7 from '../../../assets/images/slider/img-slide-7.jpg';

const BasicCarousels = () => {
    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://react-bootstrap.github.io/components/carousel/"
                    />
                </Col>
            </Row>
            <Row>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Basic Carousel</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Carousel controls={false} indicators={false}>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide1} alt="Slide1" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide2} alt="Slide2" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide3} alt="Slide3" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide4} alt="Slide4" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide5} alt="Slide5" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide6} alt="Slide6" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide7} alt="Slide7" />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Carousel Controls</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Carousel indicators={false}>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide2} alt="Slide2" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide3} alt="Slide3" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide4} alt="Slide4" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide5} alt="Slide5" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide6} alt="Slide6" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide7} alt="Slide7" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide1} alt="Slide1" />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Carousel Indicators</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Carousel>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide4} alt="Slide4" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide5} alt="Slide5" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide6} alt="Slide6" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide7} alt="Slide7" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide3} alt="Slide3" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide1} alt="Slide2" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide3} alt="Slide3" />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Carousel Crossfade</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Carousel fade={true} indicators={false} interval={3000}>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide4} alt="Slide4" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide5} alt="Slide5" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide6} alt="Slide6" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide7} alt="Slide7" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide3} alt="Slide3" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide1} alt="Slide2" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide3} alt="Slide3" />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Carousel With Captions</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Carousel interval={3000}>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide2} alt="Slide2" />
                                    <Carousel.Caption>
                                        <h5 className="text-white">First slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide3} alt="Slide3" />
                                    <Carousel.Caption>
                                        <h5 className="text-white">Second slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide4} alt="Slide4" />
                                    <Carousel.Caption>
                                        <h5 className="text-white">Third slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide5} alt="Slide5" />
                                    <Carousel.Caption>
                                        <h5 className="text-white">Forth slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide6} alt="Slide6" />
                                    <Carousel.Caption>
                                        <h5 className="text-white">Fifth slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide7} alt="Slide7" />
                                    <Carousel.Caption>
                                        <h5 className="text-white">Sixth slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={imgSlide1} alt="Slide1" />
                                    <Carousel.Caption>
                                        <h5 className="text-white">Seventh slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BasicCarousels;
