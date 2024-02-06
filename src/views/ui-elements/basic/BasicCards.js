import React from 'react';
import { Row, Col, Button, Card, CardGroup, CardDeck, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

import imgSlide1 from '../../../assets/images/slider/img-slide-1.jpg';
import imgSlide2 from '../../../assets/images/slider/img-slide-2.jpg';
import imgSlide3 from '../../../assets/images/slider/img-slide-3.jpg';
import imgSlide4 from '../../../assets/images/slider/img-slide-4.jpg';
import imgSlide6 from '../../../assets/images/slider/img-slide-6.jpg';
import imgSlide7 from '../../../assets/images/slider/img-slide-7.jpg';

const BasicCards = () => {
    const cardVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

    const cardStyles = cardVariants.map((variant, idx) => (
        <Col key={idx} xl={4} md={6}>
            <Card bg={variant} text={variant !== 'light' ? 'white' : ''}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title as="h5" className={variant !== 'light text-capitalize' ? 'text-white text-capitalize' : 'text-capitalize'}>
                        {variant} Card Title
                    </Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    ));

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://react-bootstrap.github.io/components/cards/"
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6} xl={4}>
                    <h5>Body Content</h5>
                    <hr />
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <h5>Titles, Text, and Links</h5>
                    <hr />
                    <Card>
                        <Card.Body>
                            <Card.Title as="h5">Card Title</Card.Title>
                            <Card.Subtitle as="h6" className="mb-2 text-muted">
                                Card Subtitle
                            </Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Card.Link as={Link} to="#">
                                Card Link
                            </Card.Link>
                            <Card.Link as={Link} to="#">
                                Another Link
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <h5>Header and Footer</h5>
                    <hr />
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Featured</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title as="h5">Special title treatment</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <h5>Left Align (Default)</h5>
                    <hr />
                    <Card>
                        <Card.Body>
                            <Card.Title as="h5">Special title treatment</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <h5>Center Align </h5>
                    <hr />
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title as="h5">Special title treatment</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <h5>Right Align </h5>
                    <hr />
                    <Card className="text-right">
                        <Card.Body>
                            <Card.Title as="h5">Special title treatment</Card.Title>
                            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <h5>Image Cap </h5>
                    <hr />
                    <Card>
                        <Card.Img variant="top" src={imgSlide3} alt="CardImageCap" />
                        <Card.Body>
                            <Card.Title as="h5">Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is
                                a little bit longer.
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <h5>Image Cap [Bottom]</h5>
                    <hr />
                    <Card>
                        <Card.Body>
                            <Card.Title as="h5">Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is
                                a little bit longer.
                            </Card.Text>
                            <Card.Text>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src={imgSlide6} alt="CardImageCapBottom" />
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <h5>Image Overlays</h5>
                    <hr />
                    <Card className="bg-dark text-white">
                        <Card.Img variant="top" src={imgSlide7} alt="CardImageOverlays" />
                        <Card.ImgOverlay>
                            <Card.Title as="h5" className="text-white">
                                Card title
                            </Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is
                                a little bit longer.
                            </Card.Text>
                            <Card.Text>
                                <small className="text-white">Last updated 3 mins ago</small>
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <h5>Card Styles</h5>
                    <hr />
                    <Row>{cardStyles}</Row>
                </Col>
                <Col sm={12}>
                    <h5>Card Groups</h5>
                    <hr />
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={imgSlide4} alt="CardGroup1" />
                            <Card.Body>
                                <Card.Title as="h5">Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content
                                    is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={imgSlide2} alt="CardGroup2" />
                            <Card.Body>
                                <Card.Title as="h5">Card title</Card.Title>
                                <Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={imgSlide1} alt="CardGroup3" />
                            <Card.Body>
                                <Card.Title as="h5">Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This card
                                    has even longer content than the first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Col>
                <Col sm={12}>
                    <h5 className="mt-4">Card Decks</h5>
                    <hr />
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={imgSlide4} alt="CardGroup1" />
                            <Card.Body>
                                <Card.Title as="h5">Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content
                                    is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={imgSlide2} alt="CardGroup2" />
                            <Card.Body>
                                <Card.Title as="h5">Card title</Card.Title>
                                <Card.Text>This card has supporting text below as a natural lead-in to additional content. </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={imgSlide1} alt="CardGroup3" />
                            <Card.Body>
                                <Card.Title as="h5">Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This card
                                    has even longer content than the first to show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </Col>
                <Col sm={12}>
                    <h5 className="mt-4">Card Columns</h5>
                    <hr />
                    <CardColumns>
                        <Card>
                            <Card.Img variant="top" src={imgSlide1} />
                            <Card.Body>
                                <Card.Title as="h5">Card title that wraps to a new line</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural lead-in to additional content. This
                                    content is a little bit longer.
                                </Card.Text>
                                <Button variant="primary">View More</Button>
                                <Button variant="danger">Delete</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <blockquote className="blockquote mb-0 card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={imgSlide3} />
                            <Card.Body>
                                <Card.Title as="h5">Card title</Card.Title>
                                <Card.Text>This card has supporting text below as a natural lead-in to additional content.</Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card text="white" className="text-center theme-bg">
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer text-white">
                                        <small className="">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title as="h5">Card title</Card.Title>
                                <Card.Text>This card has a regular title and short paragraphy of text below it.</Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img src={imgSlide2} />
                        </Card>
                        <Card className="text-right">
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body>
                                <Card.Title as="h5">Card title</Card.Title>
                                <Card.Text>
                                    This is another card with title and supporting text below. This card has some additional content to make
                                    it slightly taller overall.
                                </Card.Text>
                                <Card.Text>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BasicCards;
