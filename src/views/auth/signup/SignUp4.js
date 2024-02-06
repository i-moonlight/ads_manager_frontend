import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import avatar from '../../../assets/images/user/user.png';

const SignUp4 = () => {
    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="auth-wrapper">
                <div className="auth-content subscribe">
                    <div className="card">
                        <div className="row no-gutters">
                            <div className="col-md-4 col-lg-6 d-none d-md-flex d-lg-flex theme-bg align-items-center justify-content-center">
                                <img src={avatar} alt="lock images" className="img-fluid" />
                            </div>
                            <div className="col-md-8 col-lg-6">
                                <div className="card-body text-center">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-10">
                                            <h3 className="mb-4">Sign up</h3>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Username" />
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="input-group mb-4">
                                                <input type="password" className="form-control" placeholder="password" />
                                            </div>
                                            <div className="form-group text-left">
                                                <div className="checkbox checkbox-fill d-inline">
                                                    <input type="checkbox" name="checkbox-fill-2" id="checkbox-fill-2" />
                                                    <label htmlFor="checkbox-fill-2" className="cr">
                                                        Send me the <Link to="#"> Newsletter</Link> weekly.
                                                    </label>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary shadow-2 mb-4">Sign up</button>
                                            <p className="mb-0 text-muted">
                                                Allready have an account? <NavLink to="/auth/signin-4">Login</NavLink>
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

export default SignUp4;
