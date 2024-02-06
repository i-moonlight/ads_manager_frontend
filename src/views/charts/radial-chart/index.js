import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import userAvatar from './../../../assets/images/user/avatar-2.jpg';

const RadialChart = () => {
    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Variant of Colors</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div data-label="20%" className="radial-bar radial-bar-20 radial-bar-lg radial-bar-primary m-r-5" />
                            <div data-label="30%" className="radial-bar radial-bar-30 radial-bar-lg radial-bar-success m-r-5" />
                            <div data-label="40%" className="radial-bar radial-bar-40 radial-bar-lg radial-bar-info m-r-5" />
                            <div data-label="50%" className="radial-bar radial-bar-50 radial-bar-lg radial-bar-danger m-r-5" />
                            <div data-label="60%" className="radial-bar radial-bar-60 radial-bar-lg radial-bar-warning m-r-5" />
                            <div data-label="10%" className="radial-bar radial-bar-10 radial-bar-lg" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Different Size</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div data-label="50%" className="radial-bar radial-bar-50 radial-bar-lg m-r-5" />
                            <div data-label="40%" className="radial-bar radial-bar-40 radial-bar-sm m-r-5" />
                            <div data-label="30%" className="radial-bar radial-bar-30 radial-bar-xs" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Radial With Images</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div data-label="50%" className="radial-bar radial-bar-50 radial-bar-lg radial-bar-danger m-r-5">
                                <img src={userAvatar} alt="User-Avatar" />
                            </div>
                            <div data-label="40%" className="radial-bar radial-bar-40 radial-bar-sm radial-bar-warning m-r-5">
                                <img src={userAvatar} alt="User-Avatar" />
                            </div>
                            <div data-label="30%" className="radial-bar radial-bar-30 radial-bar-xs radial-bar-success m-r-5">
                                <img src={userAvatar} alt="User-Avatar" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default RadialChart;
