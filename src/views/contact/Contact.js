import React, { useState } from 'react';
import { Row, Col, Button, Alert, Card, Form } from 'react-bootstrap';

import * as Yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import { API_SERVER } from '../../config/constant';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectUser } from '../../store/slices/account';
import { logout } from '../../store/actions/account';
const Contact = () => {
    const user = useSelector(selectUser);
    const token = useSelector(selectToken);
	const dispatch = useDispatch(); // define dispatch

    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <Card>
            <Card.Header>
                <Card.Title as="h5">Contact Us</Card.Title>
            </Card.Header>

            <Card.Body>
                <Row>
                    <Col xs={12} md={12} className="mt-0 mb-4">
                        At Link Clicks, we're always eager to hear from you. Whether you have questions, feedback, or just want to chat about online advertising, we're here to help.
                    </Col>
                </Row>
                <Row>
                    {!isSubmitted ? (
                        <Col xs={12} md={6}>
                            <Formik
                                initialValues={{
                                    email: user.email || '',
                                    comment: '',
                                    submit: null
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                                    comment: Yup.string().max(255).required('Comment is required')
                                })}
                                onSubmit={async (values, { setErrors, setStatus, setSubmitting, resetForm }) => {
                                    try {
                                        await axios.post(`${API_SERVER}contact/`, values, {
                                            headers: {
                                                Authorization: token
                                            }
                                        });

                                        setStatus({ success: true });
                                        setErrors({});
                                        setSubmitting(false);

                                        resetForm();

                                        setIsSubmitted(true);
                                    } catch (err) {
										alert(err);
										if (err.response.status === 403) {
											console.log('User logged out');
											dispatch(logout()); 
										} else {
											setStatus({ success: false });
											setSubmitting(false);

											const { email, comment } = err.response.data;

											if (email || comment) {
												setErrors({ email, comment });
											} else {
												setErrors({
													submit: 'There was an error submitting the form. Please try again later.'
												});
											}
										}
                                    }
                                }}
                            >
                                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                                    <form noValidate onSubmit={handleSubmit}>
                                        <div className="form-group mb-3">
                                            <Form.Label>Email address</Form.Label>
                                            <input
                                                className="form-control"
                                                error={touched.email && errors.email}
                                                label="Email Address"
                                                placeholder="Enter your email"
                                                name="email"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="email"
                                                value={values.email}
                                            />
                                            {touched.email && errors.email && (
                                                <small className="text-danger form-text">{errors.email}</small>
                                            )}
                                        </div>
                                        <div className="form-group mb-4">
                                            <Form.Label>Comment</Form.Label>
                                            <textarea
                                                id=""
                                                cols="30"
                                                rows="10"
                                                className="form-control"
                                                placeholder="Enter your comment"
                                                error={touched.comment && errors.comment}
                                                label="Comment"
                                                name="comment"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="comment"
                                                value={values.comment}
                                            ></textarea>
                                            {touched.comment && errors.comment && (
                                                <small className="text-danger form-text">{errors.comment}</small>
                                            )}
                                        </div>

                                        {errors.submit && <Alert variant="danger">{errors.submit}</Alert>}

                                        <Button
                                            className="mt-2"
                                            color="primary"
                                            disabled={isSubmitting}
                                            size="large"
                                            type="submit"
                                            variant="primary"
                                        >
                                            {isSubmitting && <span className="spinner-border spinner-border-sm mr-2" role="status" />}
                                            Submit
                                        </Button>
                                    </form>
                                )}
                            </Formik>
                        </Col>
                    ) : (
                        <Col xs={12} md={6}>
                            <Alert variant="success">
                                <Alert.Heading as="h4">Thank you for contacting us!</Alert.Heading>
                                <hr />
                                <p className="mb-0">Your message has been received and we will be in touch with you shortly.</p>
                            </Alert>
                            <Button
                                className="mt-2"
                                color="primary"
                                size="large"
                                type="submit"
                                variant="primary"
                                onClick={() => setIsSubmitted(false)}
                            >
                                Reset Form
                            </Button>
                        </Col>
                    )}

                    <Col xs={12} md={6} className="mt-4 mt-md-0">
                        <h5>Find Us on Social Media</h5>

                        <div style={{ display: 'flex', gap: '1.75rem' }}>
                            <a href="https://www.facebook.com/LinkClicks" target="_blank" rel="noreferrer" className="text-primary f-30">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://twitter.com/LinkClicks" target="_blank" rel="noreferrer" className="f-30"  style={{color: 'black'}}>
                                <i className="fab fa-x-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com/link_clicks/" target="_blank" rel="noreferrer" className="text-c-purple f-30">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/linkclicks/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary f-30"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Contact;
