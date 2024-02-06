import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Gallery from '../../../components/Gallery/SimpleGallery';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

import thumb1 from '../../../assets/images/gallery-grid/img-grd-gal-1.jpg';
import thumb2 from '../../../assets/images/gallery-grid/img-grd-gal-2.jpg';
import thumb3 from '../../../assets/images/gallery-grid/img-grd-gal-3.jpg';
import thumb4 from '../../../assets/images/gallery-grid/img-grd-gal-4.jpg';
import thumb5 from '../../../assets/images/gallery-grid/img-grd-gal-5.jpg';
import thumb6 from '../../../assets/images/gallery-grid/img-grd-gal-6.jpg';

const GalleryGrid = () => {
    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-images-texts-videos"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Image Grid</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={4} md={6} className="mb-4">
                                    <Gallery
                                        images={[{ src: thumb1, thumbnail: thumb1, caption: 'Gradient Able Image 1', useForDemo: true }]}
                                        backdropClosesModal
                                        singleItem
                                    />
                                </Col>
                                <Col xl={4} md={6} className="mb-4">
                                    <Gallery
                                        images={[{ src: thumb2, thumbnail: thumb2, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                        backdropClosesModal
                                        singleItem
                                    />
                                </Col>
                                <Col xl={4} md={6} className="mb-4">
                                    <Gallery
                                        images={[{ src: thumb3, thumbnail: thumb3, caption: 'Gradient Able Image 3', useForDemo: true }]}
                                        backdropClosesModal
                                        singleItem
                                    />
                                </Col>
                                <Col xl={4} md={6} className="mb-4">
                                    <Gallery
                                        images={[{ src: thumb4, thumbnail: thumb4, caption: 'Gradient Able Image 4', useForDemo: true }]}
                                        backdropClosesModal
                                        singleItem
                                    />
                                </Col>
                                <Col xl={4} md={6} className="mb-4">
                                    <Gallery
                                        images={[{ src: thumb5, thumbnail: thumb5, caption: 'Gradient Able Image 5', useForDemo: true }]}
                                        backdropClosesModal
                                        singleItem
                                    />
                                </Col>
                                <Col xl={4} md={6} className="mb-4">
                                    <Gallery
                                        images={[{ src: thumb6, thumbnail: thumb6, caption: 'Gradient Able Image 6', useForDemo: true }]}
                                        backdropClosesModal
                                        singleItem
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Video Grid</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={4} md={6} className="mb-4">
                                    <Gallery videos={['0LjlawWMXCw']} backdropClosesModal singleItem />
                                </Col>
                                <Col xl={4} md={6} className="mb-4">
                                    <Gallery videos={['ZQ264Axbjxg']} backdropClosesModal singleItem />
                                </Col>
                                <Col xl={4} md={6} className="mb-4">
                                    <Gallery videos={['bYbV_PFdfQs']} backdropClosesModal singleItem />
                                </Col>
                                <Col xl={4} md={6} className="mb-4">
                                    <Gallery videos={['IkyZHPnfFnE']} backdropClosesModal singleItem />
                                </Col>
                                <Col xl={4} md={6} className="mb-4">
                                    <Gallery videos={['HjV2aWgavdo']} backdropClosesModal singleItem />
                                </Col>
                                <Col xl={4} md={6} className="mb-4">
                                    <Gallery videos={['Rh03jAsRHQM']} backdropClosesModal singleItem />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default GalleryGrid;
