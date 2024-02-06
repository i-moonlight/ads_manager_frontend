import React, { useEffect} from 'react';
import {useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { selectIsLoggedIn } from '../../../store/slices/account';

const SendEmailSuccessPage = (props) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const { email } = props.match.params;

    useEffect(() => {
        if (isLoggedIn) {
            window.location = '/';
        }
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
                            <h4 className="mb-4">Check Your Email</h4>
                            <p className="mt-4 mb-0 text-muted">
                                <div>We emailed a secure login link to</div>
                                <strong>{email}</strong>
                            </p>                            
                            <p className="mt-4 mb-4">
                                <strong>It expires in 10 minutes.</strong>
                            </p>
                            <p className="mt-4 mb-0 text-muted">
                                <div>Check your spam folder if you don't see it.</div>
								
                            </p>
							<p className="mt-4 mb-0 text-muted">
                              
								<a href="/" >Home</a>
                            </p>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SendEmailSuccessPage;
