import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { SubmissionError, Field, reduxForm } from 'redux-form';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const submit = (values) => {
    return sleep(1000).then(() => {
        // simulate server latency
        if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
            throw new SubmissionError({
                username: 'User does not exist',
                _error: 'Login failed!'
            });
        } else if (values.password !== '123456') {
            throw new SubmissionError({
                password: 'Wrong password',
                _error: 'Login failed!'
            });
        } else {
            window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
        }
    });
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Row className="my-3">
        <Col sm={3}>
            <label className="label-control">{label}</label>
        </Col>
        <Col sm={9}>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {touched && error && <span className="text-c-red">* {error} </span>}
        </Col>
    </Row>
);

const SubmitValidationForm = (props) => {
    const { error, handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Submit Validation</Card.Title>
                    <Card.Subtitle className="mt-2 text-muted">Usernames: john, paul, george, ringo</Card.Subtitle>
                    <Card.Subtitle className="mt-2 text-muted">Password: 123456</Card.Subtitle>
                </Card.Header>
                <Card.Body>
                    <Field name="username" type="text" component={renderField} label="Username" />
                    <Field name="password" type="password" component={renderField} label="Password" />
                    {error && <strong>{error}</strong>}
                </Card.Body>
                <Card.Footer>
                    <Button type="button" variant="danger" className="float-right" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </Button>
                    <Button type="submit" className="mr-1 float-right" disabled={submitting}>
                        Log In
                    </Button>
                </Card.Footer>
            </Card>
        </form>
    );
};

export default reduxForm({
    form: 'submitValidation' // a unique identifier for this form
})(SubmitValidationForm);
