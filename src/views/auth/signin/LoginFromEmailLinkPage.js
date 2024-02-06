import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { loginSecureEmailLink } from '../../../apis/authApi';
import { accountInitialize, selectIsLoggedIn } from '../../../store/slices/account';

const LoginFromEmailLinkPage = (props) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const { token_sesame } = props.match.params;
    const dispatcher = useDispatch();

    const [isSuccessLogin, setIsSuccessLogin] = useState(true);

    useEffect(() => {
        if (isLoggedIn) {
            window.location = '/';
        }
        if (isLoggedIn === false && token_sesame && token_sesame.length > 10) {
            loginSecureEmailLink(token_sesame)
                .then(function (response) {
                    
                    if (response.data) {
                        // console.log(response.data);
                        const { token, user } = response.data;
                        // console.log('then_user: ', user);
                    dispatcher(accountInitialize({ isLoggedIn: true, user: user, token: token }))
                        setIsSuccessLogin(true);
                        // window.location = window.location.origin;
                    } else {
                        console.log('login Sesame fail');
                        setIsSuccessLogin(false);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    setIsSuccessLogin(false);
                });
        }
        // console.log('LoginFromEmailLink: ', token_sesame);
    });
    return (
        <React.Fragment>
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>
                    <Card className="borderless text-center" style={{ width: '440px' }}>
                        <Card.Body>
                            {!isSuccessLogin && (
                                <>
                                    <h4 className="mb-4">Login fail!</h4>
                                    <div className="mb-4">
                                        <i className="feather icon-lock auth-icon" />
                                    </div>
                                    <p className="mb-0 text-muted">
                                        Try again?{' '}
                                        <NavLink to="/auth/signin" className="f-w-400">
                                            Login here.
                                        </NavLink>
                                    </p>{' '}
                                </>
                            )}
                            {isSuccessLogin && <h4 className="mb-4">Loading...</h4>}
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default LoginFromEmailLinkPage;
