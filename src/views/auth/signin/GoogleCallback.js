import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';

import { loginGoogleApi } from '../../../apis/authApi';
import { accountInitialize } from '../../../store/slices/account';
import { selectIsLoggedIn } from '../../../store/slices/account';

const GoogleCallback = (props) => {
    const dispatcher = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    useEffect(() => {
        // console.log("GoogleCallback: ", queryString.parse(props.location.search))
        const { code, state } = queryString.parse(props.location.search);
       
        if (!isLoggedIn) {
            //alert('Login Google BB')
            loginGoogleApi({ code: code, state: state })
                .then(function (response) {
                    // console.log('then: ', response);
                   
                    if (response.data) {
                        console.log(response.data);
                        const { token, user } = response.data;
                        // console.log('then_user: ', user);
                        dispatcher(accountInitialize({ isLoggedIn: true, user: user, token: token }))
                        window.location.href = window.location.origin + '/ad-accounts';
                    } else {
                        console.log('login Google fail');
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else  {
            //alert('Login Google cc')
            window.location.href = window.location.origin + '/ad-accounts';
        }
    }, [props, dispatcher, isLoggedIn]);

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
                    <Card className="borderless text-center">
                        <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h4 className="mb-4">Loading...</h4>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default GoogleCallback;
