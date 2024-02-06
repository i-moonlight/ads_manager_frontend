import React, { useState } from 'react';
import { Row, Col, Button, Alert, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import useScriptRef from '../../../hooks/useScriptRef';

import { loginGetSecureEmailLink } from '../../../apis/authApi';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
// axios.defaults.withCredentials = true;

const EmailLinkLogin = ({ className, ...rest }) => {
    const scriptedRef = useScriptRef();
    const history = useHistory();

    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <React.Fragment>
            <h3 className="mb-4">Login with Email</h3>
            <Formik
                initialValues={{
                    email: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    setMessage('');
                    setIsLoading(true);
                    try {
                        loginGetSecureEmailLink({ email: values.email }).then((resp) => {
                            console.log('createEmailApi: ', resp);
                            if (resp && resp.status === 199) {
                                const email = resp.data.email;
                                console.log('Email not exist!', email);
                                // setMessage('Email not exist!');
                                history.push('/send-email-success/' + email);
                                setIsError(true);
                            } else if (resp && resp.status === 200) {
                                const email = resp.data.email;
                                console.log('Send email successfully!', email);
                                // setMessage('Send email successfully!');
                                setIsError(false);
                                history.push('/send-email-success/' + email);
                            } else {
                                console.log('Error create email!');
                            }
                            setIsLoading(false);
                        });
                    } catch (err) {
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                        setIsLoading(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, setFieldTouched }) => (
                    <form noValidate onSubmit={handleSubmit} className={className} {...rest}>
                        <div className="form-group mb-3">
                            <input
                                className="form-control"
                                error={touched.email && errors.email}
                                label="Email Address"
                                placeholder="Email Address"
                                name="email"
                                onBlur={handleBlur}
                                // onChange={handleChange}
                                onChange={(e) => {
                                    setFieldTouched('email');
                                    handleChange(e);
                                    setMessage(' ');
                                }}
                                type="email"
                                value={values.email}
                            />
                            {touched.email && errors.email && <small className="text-danger form-text">{errors.email}</small>}
                            {!isError && message.length > 5 && <small className="text-success form-text">{message}</small>}
                            {isError && message.length > 5 && <small className="text-danger form-text">{message}</small>}
                        </div>

                        {errors.submit && (
                            <Col sm={12}>
                                <Alert variant="danger">{errors.submit}</Alert>
                            </Col>
                        )}

                        {/* <div className="custom-control custom-checkbox  text-left mb-4 mt-2">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">
                                Save credentials.
                            </label>
                        </div> */}

                        <Row>
                            <Col mt={2}>
                                <Button
                                    className="btn-block"
                                    color="primary"
                                    disabled={isSubmitting}
                                    size="large"
                                    type="submit"
                                    variant="primary"
                                >
                                    {!isLoading && <span>Get Secure Login Link by Email.</span>}
                                    {isLoading && (
                                        <>
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                                className="mr-2"
                                            />
                                            <span>Processing...</span>
                                        </>
                                    )}
                                </Button>
                            </Col>
                        </Row>
                    </form>
                )}
            </Formik>
            {/* <hr /> */}
        </React.Fragment>
    );
};

export default EmailLinkLogin;
