import React from 'react';
import Breadcrumb from '../../layouts/AdminLayout/Breadcrumb';

const Subscribe = () => {
    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="auth-wrapper">
                <div className="auth-content subscribe">
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>
                    <div className="card">
                        <div className="card-body text-left">
                            <div className="row justify-content-center">
                                <div className="col-md-10">
                                    <div className="mb-4 mt-3">
                                        <i className="feather icon-mail auth-icon" />
                                    </div>
                                    <h3 className="mb-4">Subscribe</h3>
                                    <p className="text-muted">Awesomeness delivered to your inbox.</p>
                                    <div className="input-group mb-4">
                                        <input type="email" className="form-control" placeholder="Email" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary shadow-2">Subscribe</button>
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

export default Subscribe;
