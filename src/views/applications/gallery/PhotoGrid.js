import React, { useState, useCallback } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Gallery from 'react-photo-gallery';
import { Modal, ModalGateway } from 'react-images';
import { photos } from './gallery';
import LightBox from '../../../components/Gallery/LightBox';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

const PhotoGrid = () => {
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
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-photo-gallery"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Gallery photos={photos} onClick={openLightbox} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <LightBox currentImage={currentImage} photos={photos} />
                    </Modal>
                ) : null}
            </ModalGateway>
        </React.Fragment>
    );
};

export default PhotoGrid;
