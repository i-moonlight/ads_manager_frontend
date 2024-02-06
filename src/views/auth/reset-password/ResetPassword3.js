import React from 'react';
import { NavLink } from 'react-router-dom';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';
import back3 from '../../../assets/images/bg-images/bg3.jpg';

const ResetPassword3 = () => {
    return (
        <React.Fragment>
            <Breadcrumb />
            <div
                className="auth-wrapper aut-bg-img"
                style={{
                    backgroundImage: `url(${back3})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center'
                }}
            >
                <div className="auth-content">
                    <div className="text-white">
                        <div className="card-body text-center">
                            <div className="mb-4">
                                <i className="feather icon-mail auth-icon" />
                            </div>
                            <h3 className="mb-4 text-white">Reset Password</h3>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <button className="btn btn-primary mb-4 shadow-2">Reset Password</button>
                            <p className="mb-0 text-muted">
                                Don’t have an account?{' '}
                                <NavLink to="/auth/signup-3" className="text-white">
                                    Signup
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ResetPassword3;
