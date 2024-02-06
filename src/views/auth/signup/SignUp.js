import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import RestRegister from './RestRegister';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

const SignUp1 = () => {
    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>
                    <Card className="borderless">
                        <Row className="align-items-center">
                            <Col>
                                <Card.Body className="text-center">

                                    <h4 className="mb-4">
                                        React Datta Able PRO 
                                    </h4>

                                    <div className="mb-4">
                                        <i className="feather icon-user-plus auth-icon" />
                                    </div>

                                    <RestRegister />

                                    <p className="mb-2">
                                        Already have an account?{' '}
                                        <NavLink to="/auth/signin" className="f-w-400">
                                            Login
                                        </NavLink>
                                    </p>

                                    <br />

                                    <p className="mb-0 text-muted">
                                        <a target="_blank" without rel="noreferrer" href="https://appseed.us/product/react-node-js-datta-able-pro">See Product</a> {' '} 
                                        - <a target="_blank" without rel="noreferrer" href="https://appseed.us/support">Get Support</a>
                                    </p>

                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SignUp1;
