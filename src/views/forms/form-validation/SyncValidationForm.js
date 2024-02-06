import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.age) {
        errors.age = 'Required';
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number';
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old';
    }
    return errors;
};

const warn = (values) => {
    const warnings = {};
    if (values.age < 19) {
        warnings.age = 'Hmm, you seem a bit young...';
    }
    return warnings;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <Row className="my-3">
        <Col sm={3}>
            <label className="label-control">{label}</label>
        </Col>
        <Col sm={9}>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {touched &&
                ((error && <span className="text-c-red">* {error} </span>) ||
                    (warning && <span className="text-c-yellow">{warning}</span>))}
        </Col>
    </Row>
);

const SyncValidationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <Card>
            <Card.Header>
                <Card.Title as="h5">Synchronous Validation</Card.Title>
            </Card.Header>
            <Card.Body>
                <form onSubmit={handleSubmit}>
                    <Field name="username" type="text" component={renderField} label="Username" />
                    <Field className="form-control" name="email" type="email" component={renderField} label="Email" />
                    <Field className="form-control" name="age" type="number" component={renderField} label="Age" />
                </form>
            </Card.Body>
            <Card.Footer>
                <Button variant="danger" className="float-right" type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </Button>
                <Button type="submit" disabled={submitting} className="mr-1 float-right">
                    Submit
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default reduxForm({
    form: 'syncValidation', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
    warn // <--- warning function given to redux-form
})(SyncValidationForm);
