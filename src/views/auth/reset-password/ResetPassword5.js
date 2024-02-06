import React from 'react';
import { NavLink } from 'react-router-dom';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import back4 from '../../../assets/images/bg-images/bg4.jpg';

const ResetPassword5 = () => {
    return (
        <React.Fragment>
            <Breadcrumb />
            <div
                className="auth-wrapper aut-bg-img"
                style={{
                    backgroundImage: `url(${back4})`,
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center'
                }}
            >
                <div className="auth-content">
                    <div className="card">
                        <div className="card-body text-center">
                            <div className="mb-4">
                                <i className="feather icon-mail auth-icon" />
                            </div>
                            <h3 className="mb-4">Reset Password</h3>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <button className="btn btn-primary mb-4 shadow-2">Reset Password</button>
                            <p className="mb-0 text-muted">
                                Don’t have an account? <NavLink to="/auth/signup-5">Signup</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ResetPassword5;
