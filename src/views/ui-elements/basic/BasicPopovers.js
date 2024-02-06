import React from 'react';
import { Row, Col, Card, Button, OverlayTrigger, Popover } from 'react-bootstrap';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

const BasicPopovers = () => {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Popover</Popover.Title>
            <Popover.Content>
                And here's some <strong>amazing</strong> content. It's very engaging.
            </Popover.Content>
        </Popover>
    );

    return (
        <React.Fragment>
            <Row className="btn-page">
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://react-bootstrap.netlify.app/components/overlays/#popovers"
                    />
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Popover</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                <Button variant="light">Top</Button>
                            </OverlayTrigger>
                            <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                                <Button variant="primary">Left</Button>
                            </OverlayTrigger>
                            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                <Button variant="success">Right</Button>
                            </OverlayTrigger>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <Button variant="warning">Bottom</Button>
                            </OverlayTrigger>
                            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                                <Button variant="primary">HTML Popover</Button>
                            </OverlayTrigger>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BasicPopovers;
