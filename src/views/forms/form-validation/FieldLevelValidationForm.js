import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

const required = (value) => (value || typeof value === 'number' ? undefined : 'Required');
const maxLength = (max) => (value) => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength15 = maxLength(15);
export const minLength = (min) => (value) => (value && value.length < min ? `Must be ${min} characters or more` : undefined);
export const minLength2 = minLength(2);
const number = (value) => (value && isNaN(Number(value)) ? 'Must be a number' : undefined);
const minValue = (min) => (value) => (value && value < min ? `Must be at least ${min}` : undefined);
const minValue13 = minValue(13);
const email = (value) => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined);
const tooYoung = (value) => (value && value < 13 ? 'You do not meet the minimum age requirement!' : undefined);
const aol = (value) => (value && /.+@aol\.com/.test(value) ? 'Really? You still use AOL for your email?' : undefined);
const alphaNumeric = (value) => (value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined);
export const phoneNumber = (value) =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined;

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

const FieldLevelValidationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <Card>
            <Card.Header>
                <Card.Title as="h5">Field-Level Validation</Card.Title>
            </Card.Header>
            <Card.Body>
                <form onSubmit={handleSubmit}>
                    <Field
                        name="username"
                        type="text"
                        component={renderField}
                        label="Username"
                        validate={[required, maxLength15, minLength2]}
                        warn={alphaNumeric}
                    />
                    <Field name="email" type="email" component={renderField} label="Email" validate={email} warn={aol} />
                    <Field
                        name="age"
                        type="number"
                        component={renderField}
                        label="Age"
                        validate={[required, number, minValue13]}
                        warn={tooYoung}
                    />
                    <Field name="phone" type="number" component={renderField} label="Phone number" validate={[required, phoneNumber]} />
                </form>
            </Card.Body>
            <Card.Footer>
                <Button variant="danger" type="button" className="float-right" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </Button>
                <Button type="submit" className="mr-1 float-right" disabled={submitting}>
                    Submit
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default reduxForm({
    form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm);
