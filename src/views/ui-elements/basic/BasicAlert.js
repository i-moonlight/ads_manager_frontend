import React, { useState } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

import Card from '../../../components/Card/MainCard';

const alertVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

const BasicAlert = () => {
    const [showAlert, setShowAlert] = useState(alertVariants);

    const basicAlert = alertVariants.map((variant, idx) => (
        <Alert key={idx} variant={variant}>
            A simple {variant} alert—check it out!
        </Alert>
    ));

    const linkAlert = alertVariants.map((variant, idx) => (
        <Alert key={idx} variant={variant}>
            A simple {variant} alert with{' '}
            <Alert.Link as={Link} to="#">
                an example link
            </Alert.Link>
            . Give it a click if you like.
        </Alert>
    ));

    const dismissingAlert = alertVariants.map((variant, idx) => (
        <Alert
            show={showAlert.findIndex((item) => item === variant) > -1}
            dismissible
            key={idx}
            variant={variant}
            onClick={() => setShowAlert(showAlert.filter((item) => item !== variant))}
        >
            Holy guacamole! You should check in on some of those fields below.
        </Alert>
    ));

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://react-bootstrap.github.io/components/alerts/"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card title="Basic">{basicAlert}</Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card title="Link Alert">{linkAlert}</Card>
                </Col>
                <Col>
                    <Card title="Dismissing">{dismissingAlert}</Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card title="Additional Content">
                        <Alert variant="success">
                            <Alert.Heading as="h4">Well done!</Alert.Heading>
                            <p>
                                Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer
                                so that you can see how spacing within an alert works with this kind of content.
                            </p>
                            <hr />
                            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                        </Alert>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BasicAlert;
