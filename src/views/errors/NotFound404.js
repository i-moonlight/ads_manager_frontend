import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Background404 from './404.svg';

const NotFound404 = () => {
    return (
        <React.Fragment>
            <div className="auth-wrapper maintenance">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} className="text-center px-4">
                            <div>
                                <img src={Background404} alt="404 - Page Not Found" />
                            </div>
                            <h5 className="mt-4">Oops! Page not found!</h5>
                            <p className="text-muted">
                                illustration by
                                <Button variant="link" href="https://undraw.co/search" target="_blank" className="p-1 shadow-none">
                                    undraw.co
                                </Button>
                            </p>
                            <Form>
                                <Link to="/">
                                    <Button variant="danger">
                                        <i className="feather icon-refresh-ccw mr-2" />
                                        Reload
                                    </Button>
                                </Link>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default NotFound404;
