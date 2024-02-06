import React from 'react';
import { NavLink } from 'react-router-dom';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import lock from '../../../assets/images/user/lock.png';

const ResetPassword4 = () => {
    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="auth-wrapper">
                <div className="auth-content subscribe">
                    <div className="card">
                        <div className="row no-gutters">
                            <div className="col-md-4 col-lg-6 d-none d-md-flex d-lg-flex theme-bg align-items-center justify-content-center">
                                <img src={lock} alt="lock images" className="img-fluid" />
                            </div>
                            <div className="col-md-8 col-lg-6">
                                <div className="card-body text-center">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-10">
                                            <div className="mb-4">
                                                <i className="feather icon-mail auth-icon" />
                                            </div>
                                            <h3 className="mb-4">Reset Password</h3>
                                            <div className="input-group mb-3">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                            <button className="btn btn-primary mb-4 shadow-2">Reset Password</button>
                                            <p className="mb-0 text-muted">
                                                Don’t have an account? <NavLink to="/auth/signup-4">Signup</NavLink>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ResetPassword4;
