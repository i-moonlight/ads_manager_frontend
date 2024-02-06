import React from 'react';
import MultiStep from 'react-multistep';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import { Card } from 'react-bootstrap';

const steps = [{ component: <StepOne /> }, { component: <StepTwo /> }, { component: <StepThree /> }, { component: <StepFour /> }];

const prevStyle = {
    border: '2px solid #4099ff',
    padding: '0.375rem 0.95rem',
    fontWeight: 400,
    textAlign: 'center',
    fontSize: '0.875rem',
    borderRadius: '5px',
    background: 'transparent'
};

const nextStyle = {
    border: '2px solid #4099ff',
    float: 'right',
    padding: '0.375rem 0.95rem',
    fontWeight: 400,
    textAlign: 'center',
    fontSize: '0.875rem',
    borderRadius: '5px',
    background: 'transparent'
};

const FormMultistep = () => {
    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Form MultiStep</Card.Title>
                </Card.Header>
                <Card.Body>
                    <MultiStep steps={steps} showNavigation={true} prevStyle={prevStyle} nextStyle={nextStyle} />
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default FormMultistep;
