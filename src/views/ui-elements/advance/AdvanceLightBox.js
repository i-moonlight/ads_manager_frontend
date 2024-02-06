import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import ReactImageVideoLightbox from 'react-image-video-lightbox';

import Gallery from '../../../components/Gallery/SimpleGallery';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

import image1 from '../../../assets/images/light-box/l1.jpg';
import image2 from '../../../assets/images/light-box/l2.jpg';
import image3 from '../../../assets/images/light-box/l3.jpg';
import image4 from '../../../assets/images/light-box/l4.jpg';
import image5 from '../../../assets/images/light-box/l5.jpg';
import image6 from '../../../assets/images/light-box/l6.jpg';

import thumb1 from '../../../assets/images/light-box/sl1.jpg';
import thumb2 from '../../../assets/images/light-box/sl2.jpg';
import thumb3 from '../../../assets/images/light-box/sl3.jpg';
import thumb4 from '../../../assets/images/light-box/sl4.jpg';
import thumb5 from '../../../assets/images/light-box/sl5.jpg';
import thumb6 from '../../../assets/images/light-box/sl6.jpg';

const AdvanceLightBox = () => {
    const [singleItem] = useState(true);
    const [lightboxPhotoOpen, setLightboxPhotoOpen] = useState(false);
    const [lightboxVideoOpen, setLightboxVideoOpen] = useState(false);

    let lightBoxVideo, lightBoxPhoto;

    if (lightboxPhotoOpen) {
        lightBoxPhoto = (
            <div style={{ height: '350px' }}>
                <ReactImageVideoLightbox
                    data={[
                        { url: image1, type: 'photo', altTag: 'placeholder image' },
                        { url: image2, type: 'photo', altTag: 'placeholder image' },
                        { url: image3, type: 'photo', altTag: 'placeholder image' },
                        { url: image4, type: 'photo', altTag: 'placeholder image' },
                        { url: image5, type: 'photo', altTag: 'placeholder image' }
                    ]}
                    startIndex={0}
                    showResourceCount={true}
                    onCloseCallback={() => setLightboxPhotoOpen(false)}
                />
            </div>
        );
    }

    if (lightboxVideoOpen) {
        lightBoxVideo = (
            <div style={{ height: '350px' }}>
                <ReactImageVideoLightbox
                    data={[
                        { url: 'https://www.youtube.com/embed/IkyZHPnfFnE', type: 'video', altTag: 'placeholder video' },
                        { url: 'https://www.youtube.com/embed/IkyZHPnfFnE', type: 'video', altTag: 'placeholder video' },
                        { url: 'https://www.youtube.com/embed/IkyZHPnfFnE', type: 'video', altTag: 'placeholder video' },
                        { url: 'https://www.youtube.com/embed/IkyZHPnfFnE', type: 'video', altTag: 'placeholder video' },
                        { url: 'https://www.youtube.com/embed/IkyZHPnfFnE', type: 'video', altTag: 'placeholder video' }
                    ]}
                    startIndex={0}
                    showResourceCount={true}
                    onCloseCallback={() => setLightboxVideoOpen(false)}
                />
            </div>
        );
    }

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-image-video-lightbox"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Single Images</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={2} lg={3} sm={4} xs={12}>
                                    <Gallery
                                        images={[{ src: image1, thumbnail: thumb1, caption: 'Gradient Able Image 1', useForDemo: true }]}
                                        backdropClosesModal
                                        singleItem={singleItem}
                                    />
                                </Col>
                                <Col xl={2} lg={3} sm={4} xs={12}>
                                    <Gallery
                                        images={[{ src: image2, thumbnail: thumb2, caption: 'Gradient Able Image 2', useForDemo: true }]}
                                        backdropClosesModal
                                        singleItem={singleItem}
                                    />
                                </Col>
                                <Col xl={2} lg={3} sm={4} xs={12}>
                                    <Gallery
                                        images={[{ src: image3, thumbnail: thumb3, caption: 'Gradient Able Image 3', useForDemo: true }]}
                                        backdropClosesModal
                                        singleItem={singleItem}
                                    />
                                </Col>
                                <Col xl={2} lg={3} sm={4} xs={12}>
                                    <Gallery
                                        images={[{ src: image4, thumbnail: thumb4, caption: 'Gradient Able Image 4', useForDemo: true }]}
                                        backdropClosesModal
                                        singleItem={singleItem}
                                    />
                                </Col>
                                <Col xl={2} lg={3} sm={4} xs={12}>
                                    <Gallery
                                        images={[{ src: image5, thumbnail: thumb5, caption: 'Gradient Able Image 5', useForDemo: true }]}
                                        backdropClosesModal
                                        singleItem={singleItem}
                                    />
                                </Col>
                                <Col xl={2} lg={3} sm={4} xs={12}>
                                    <Gallery
                                        images={[{ src: image6, thumbnail: thumb6, caption: 'Gradient Able Image 6', useForDemo: true }]}
                                        backdropClosesModal
                                        singleItem={singleItem}
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Image Gallery</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Gallery
                                images={[
                                    { src: image1, thumbnail: thumb1, caption: 'Gallery Image 1', useForDemo: true },
                                    { src: image2, thumbnail: thumb2, caption: 'Gallery Image 2', useForDemo: true },
                                    { src: image3, thumbnail: thumb3, caption: 'Gallery Image 3', useForDemo: true },
                                    { src: image4, thumbnail: thumb4, caption: 'Gallery Image 4', useForDemo: true },
                                    { src: image5, thumbnail: thumb5, caption: 'Gallery Image 5', useForDemo: true },
                                    { src: image6, thumbnail: thumb6, caption: 'Gallery Image 6', useForDemo: true }
                                ]}
                                backdropClosesModal
                            />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Video Gallery</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Gallery
                                videos={['0LjlawWMXCw', 'ZQ264Axbjxg', 'bYbV_PFdfQs', 'IkyZHPnfFnE', 'HjV2aWgavdo', 'Rh03jAsRHQM']}
                                backdropClosesModal
                            />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Inline Gallery</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <Button onClick={() => setLightboxPhotoOpen(true)}>Inline Photo Gallery</Button>
                                    {lightBoxPhoto}
                                </Col>
                                <Col md={6}>
                                    <Button onClick={() => setLightboxVideoOpen(true)}>Inline Video Gallery</Button>
                                    {lightBoxVideo}
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AdvanceLightBox;
