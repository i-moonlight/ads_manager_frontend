import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Breadcrumb from '../../layouts/AdminLayout/Breadcrumb';

const TabsAuth = () => {
    const [gender, setGender] = useState('f');

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
                    <div className="card">
                        <div className="card-body text-center">
                            <h3 className="mb-4">Personal Information</h3>
                            <div className="btn-group btn-group-toggle btn-auth-gen mb-4" data-toggle="buttons">
                                <label
                                    className={
                                        gender === 'f' ? 'active btn btn-outline-theme2 btn-icon' : 'btn btn-outline-theme2 btn-icon'
                                    }
                                >
                                    <input type="radio" name="options" id="option1" onChange={() => setGender('f')} />
                                    <span>
                                        <i className="fa fa-mars" />
                                        <small className="d-block">Female</small>
                                    </span>
                                </label>
                                <label
                                    className={
                                        gender === 'm' ? 'active btn btn-outline-theme2 btn-icon' : 'btn btn-outline-theme2 btn-icon'
                                    }
                                >
                                    <input type="radio" name="options" id="option2" onChange={() => setGender('m')} />{' '}
                                    <span>
                                        <i className="fa fa-venus" />
                                        <small className="d-block">Male</small>
                                    </span>
                                </label>
                            </div>
                            <div className="input-group mb-3">
                                <select className="form-control">
                                    <option>India</option>
                                    <option>Peris</option>
                                    <option>China</option>
                                </select>
                            </div>
                            <div className="input-group mb-4">
                                <input type="date" className="form-control" />
                            </div>
                            <button className="btn btn-primary mb-4 shadow-2">Register</button>
                            <p className="mb-0 text-muted">
                                Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TabsAuth;
