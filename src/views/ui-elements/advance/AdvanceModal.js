import React, { useState } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import AnimatedModal from '../../../components/Modal/AnimatedModal';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

const AdvanceModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [animation, setAnimation] = useState('flip');

    const animationVariant = ['zoom', 'fade', 'flip', 'door', 'rotate', 'slideUp', 'slideDown', 'slideLeft', 'slideRight'];

    const modal = animationVariant.map((variant, index) => {
        return (
            <Button
                key={index}
                className="text-capitalize"
                onClick={() => {
                    setAnimation(variant);
                    setShowModal(true);
                }}
            >
                {variant}
            </Button>
        );
    });

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://github.com/chenjiahan/rodal"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Animeted Model</Card.Title>
                        </Card.Header>
                        <Card.Body className="btn-page">{modal}</Card.Body>
                    </Card>
                </Col>
            </Row>
            <AnimatedModal visible={showModal} onClose={() => setShowModal(false)} animation={animation}>
                <Card>
                    <Card.Header>
                        <Card.Title as="h5">Modal Dialog 1</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li>
                                <strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what
                                they say.
                            </li>
                            <li>
                                <strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its
                                presence.
                            </li>
                            <li>
                                <strong>Close:</strong> click on the button below to close the modal.
                            </li>
                        </ul>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <button onClick={() => setShowModal(false)} className="btn btn-primary md-close">
                            Close Me!!
                        </button>
                    </Card.Footer>
                </Card>
            </AnimatedModal>
        </React.Fragment>
    );
};

export default AdvanceModal;
