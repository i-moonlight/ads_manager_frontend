import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Breadcrumb from '../../layouts/AdminLayout/Breadcrumb';

const ChangePassword = () => {
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
                        <Row className="align-items-center text-center">
                            <Col>
                                <Card.Body className="card-body">
                                    <div className="mb-4">
                                        <i className="feather icon-lock auth-icon" />
                                    </div>
                                    <h3 className="mb-4 f-w-400">Change Password</h3>
                                    <div className="input-group mb-2">
                                        <input type="password" className="form-control" placeholder="Current Password" />
                                    </div>
                                    <div className="input-group mb-2">
                                        <input type="password" className="form-control" placeholder="New Password" />
                                    </div>
                                    <div className="input-group mb-4">
                                        <input type="password" className="form-control" placeholder="Re-Type New Password" />
                                    </div>
                                    <button className="btn btn-primary mb-4">Change password</button>
                                    <p className="mb-0 text-muted">
                                        Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink>
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

export default ChangePassword;
