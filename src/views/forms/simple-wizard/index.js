import { Card, Row, Col, Button } from 'react-bootstrap';
import Wizard from 'react-simple-step-wizard';
import React, { useState } from 'react';

const Step1 = () => <h4>This is Step 1</h4>;
const Step2 = () => <h4>This is Step 2</h4>;
const Step3 = () => <h4>This is Step 3</h4>;
const Step4 = () => <h4>This is Step 4</h4>;
const Step5 = () => <h4>This is Step 5</h4>;

const MyStepTracker = ({ currentStep = 0, steps = [] }) => (
    <div>
        <p>Current step is: {steps[currentStep]}</p>
    </div>
);
const MyNavigator = ({ getFirstStepProps, getLastStepProps, getNextStepProps, getPrevStepProps }) => (
    <React.Fragment>
        <div className="float-right">
            <Button type="button" {...getFirstStepProps()}>
                First
            </Button>
            <Button type="button" className="mx-2" {...getPrevStepProps()}>
                Back
            </Button>
            <Button type="button" className="mx-2" {...getNextStepProps()}>
                Next
            </Button>
            <Button type="button" {...getLastStepProps()}>
                Last
            </Button>
        </div>
    </React.Fragment>
);

const SimpleWizard = () => {
    const [isCustomizeVisible, setIsCustomizeVisible] = useState(true);

    const handleStepChange = (currentStep) => {
        console.log(currentStep);
    };

    const onClick = () => {
        setIsCustomizeVisible((prevState) => !prevState);
    };

    return (
        <React.Fragment>
            <Card>
                <Card.Header>
                    <Card.Title as="h5">Simple Step Wizard</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col sm={12}>
                            <p>Step 3 visible: {isCustomizeVisible.toString()}</p>
                            <Button type="button" onClick={onClick}>
                                Toggle Step 3
                            </Button>
                        </Col>
                        <Col sm={12}>
                            <Wizard onStepChange={handleStepChange}>
                                <Wizard.StepTracker />
                                <Wizard.Steps>
                                    <Step1 stepLabel="Search" />
                                    <Step2 stepLabel="Select" />
                                    <Step3 stepLabel="Customize" stepCondition={isCustomizeVisible} />
                                    <Step4 stepLabel="Review" />
                                    <Step5 stepLabel="Submit" />
                                </Wizard.Steps>
                                <Wizard.StepTracker>{(stepTrackerProps) => <MyStepTracker {...stepTrackerProps} />}</Wizard.StepTracker>
                                <Wizard.Navigator>{(navigatorProps) => <MyNavigator {...navigatorProps} />}</Wizard.Navigator>
                            </Wizard>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default SimpleWizard;
