import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Breadcrumb from '../../layouts/AdminLayout/Breadcrumb';

import avatar from '../../assets/images/user/avatar-3.jpg';

const ProfileSettings = () => {
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
                                    <h3 className="mb-4">Profile Settings</h3>
                                    <img src={avatar} className="img-radius mb-4" alt="User-Profile" />
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="User Name" />
                                    </div>
                                    <div className="text-left">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="customControlValidation2"
                                                name="radio-stacked"
                                                required=""
                                                defaultChecked={false}
                                            />
                                            <label className="custom-control-label" htmlFor="customControlValidation2">
                                                Private Profile
                                            </label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline mb-3">
                                            <input
                                                type="radio"
                                                className="custom-control-input"
                                                id="customControlValidation3"
                                                name="radio-stacked"
                                                required=""
                                                defaultChecked={false}
                                            />
                                            <label className="custom-control-label" htmlFor="customControlValidation3">
                                                Public Profile
                                            </label>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary shadow-2 mb-4">Register</button>
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

export default ProfileSettings;
