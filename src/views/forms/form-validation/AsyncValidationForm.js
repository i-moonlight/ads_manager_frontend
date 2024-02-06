import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    return errors;
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const asyncValidate = (values /*, dispatch */) => {
    return sleep(1000).then(() => {
        // simulate server latency
        if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
            // eslint-disable-next-line
            throw { username: 'That username is taken' };
        }
    });
};

const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
    <Row className="my-3">
        <Col sm={3}>
            <label className="label-control">{label}</label>
        </Col>
        <Col sm={9} className={asyncValidating ? 'async-validating' : ''}>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {touched && error && <span className="text-c-red">* {error} </span>}
        </Col>
    </Row>
);

const AsyncValidationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Asynchronous Validation</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Field name="username" type="text" component={renderField} label="Username" />
                    <Field name="password" type="password" component={renderField} label="Password" />
                </Card.Body>
                <Card.Footer>
                    <Button type="button" variant="danger" className="float-right" disabled={pristine || submitting} onClick={reset}>
                        Clear Values
                    </Button>
                    <Button type="submit" className="mr-1 float-right" disabled={submitting}>
                        Sign Up
                    </Button>
                </Card.Footer>
            </Card>
        </form>
    );
};

export default reduxForm({
    form: 'asyncValidation', // a unique identifier for this form
    validate,
    asyncValidate,
    asyncChangeFields: ['username']
})(AsyncValidationForm);
