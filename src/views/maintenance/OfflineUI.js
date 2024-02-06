import React from 'react';
import { NavLink } from 'react-router-dom';

import Breadcrumb from '../../layouts/AdminLayout/Breadcrumb';

const OfflineUI = () => {
    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="auth-wrapper offline">
                <div className="text-center">
                    <h1 className="mb-4">OFFLINE</h1>
                    <h5 className="text-muted mb-4">Oops! Website Is Temporarily Offline</h5>
                    <NavLink to="/" className="btn btn-primary mb-4">
                        <i className="feather icon-home" />
                        Back to Home
                    </NavLink>
                </div>
            </div>
        </React.Fragment>
    );
};

export default OfflineUI;
