import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { BASE_URL } from '../../config/constant';
import { selectIsLoggedIn } from '../../store/slices/account';

const GuestGuard = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (isLoggedIn) {
        return <Redirect to={BASE_URL} />;
    }

    return <React.Fragment>{children}</React.Fragment>;
};

export default GuestGuard;
