import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectIsLoggedIn } from '../../store/slices/account';

const AuthGuard = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (!isLoggedIn) {
        return <Redirect to="/auth/signin" />;
    }

    return children;
};

export default AuthGuard;
