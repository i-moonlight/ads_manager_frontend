import React, { useState } from 'react';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import Cropper from 'react-cropper';
import ModuleNotification from '../../components/Widgets/Statistic/Notification';
import 'cropperjs/dist/cropper.css';

import defaultSrc from '../../assets/images/light-box/l1.jpg';

const ImageCropper = () => {
    const [image, setImage] = useState(defaultSrc);
    const [cropData, setCropData] = useState('#');
    const [cropper, setCropper] = useState();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onChange = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const getCropData = () => {
        if (typeof cropper !== 'undefined') {
            setCropData(cropper.getCroppedCanvas().toDataURL());
        }
    };

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-cropper"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <h5>Image Cropper Plugin</h5>
                        </Card.Header>
                        <Card.Body>
                            <Row className="justify-content-between">
                                <Col>
                                    <input type="file" onChange={onChange} />
                                </Col>
                                <Col>
                                    <div className="float-right">
                                        <Button onClick={() => setImage(defaultSrc)}>Use default img</Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} className="mt-3">
                                    <Cropper
                                        style={{ height: 400, width: '100%' }}
                                        initialAspectRatio={1}
                                        preview=".img-preview"
                                        src={image}
                                        viewMode={1}
                                        guides={true}
                                        minCropBoxHeight={10}
                                        minCropBoxWidth={10}
                                        background={false}
                                        responsive={true}
                                        autoCropArea={1}
                                        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                                        onInitialized={(instance) => {
                                            setCropper(instance);
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Button
                        onClick={() => {
                            getCropData();
                            handleShow();
                        }}
                    >
                        Crop Image
                    </Button>
                </Col>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Croped Image</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img style={{ width: '100%', height: 'auto' }} src={cropData} alt="cropped" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        </React.Fragment>
    );
};

export default ImageCropper;
