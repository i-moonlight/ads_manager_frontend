import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import back4 from '../../../assets/images/bg-images/bg4.jpg';

const SignUp2 = () => {
    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="auth-wrapper aut-bg-img-side cotainer-fiuid align-items-stretch">
                <div className="row align-items-center w-100 align-items-stretch bg-white">
                    <div
                        className="d-none d-lg-flex col-lg-8 aut-bg-img align-items-center d-flex justify-content-center"
                        style={{
                            backgroundImage: `url(${back4})`,
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed',
                            backgroundPosition: 'center'
                        }}
                    >
                        <div className="col-md-8">
                            <h1 className="text-white mb-5">Sign up Datta Able</h1>
                            <p className="text-white">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 align-items-stret h-100 align-items-center d-flex justify-content-center">
                        <div className=" auth-content text-center">
                            <div className="mb-4">
                                <i className="feather icon-user-plus auth-icon" />
                            </div>
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
                                Allready have an account? <NavLink to="/auth/signin-2">Login</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SignUp2;
