import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Tour from 'reactour';
import Joyride, { STATUS } from 'react-joyride';
import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

import MainCard from '../../../components/Card/MainCard';

const stepsTour = [
    {
        selector: '.tour-1',
        content: 'Click hear customize basic card layout'
    },
    {
        selector: '.card-option',
        content: 'Click hear open card options'
    },
    {
        selector: '.displayChatbox',
        content: 'Click chat open chat conversation'
    },
    {
        selector: '.mobile-menu',
        content: 'Click to see collapse menu layout'
    },
    {
        selector: '.pcoded-menu-caption',
        content: 'Menu caption'
    }
];

const stepsRide = [
    {
        content: <h5>Let's begin our journey!</h5>,
        placement: 'center',
        locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
        target: 'body'
    },
    {
        target: '.tour-1',
        content: 'Click hear customize basic card layout',
        placement: 'top'
    },
    {
        target: '.card-option',
        content: 'Click hear open card options'
    },
    {
        target: '.displayChatbox',
        content: 'Click chat open chat conversation'
    },
    {
        target: '.mobile-menu',
        content: 'Click to see collapse menu layout'
    },
    {
        target: '.pcoded-menu-caption',
        content: 'Menu caption'
    }
];

const AdvanceTour = () => {
    const [isTourOpen, setIsTourOpen] = useState(false);
    const [run, setRun] = useState(false);
    const [steps] = useState(stepsRide);

    const handleJoyrideCallback = (data) => {
        const { status } = data;

        if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
            setRun(false);
        }
    };

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-joyride"
                    />
                </Col>
            </Row>
            <Row className="btn-page">
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Tour</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Button onClick={() => setIsTourOpen(true)}>Start Basic Tour</Button>
                            <Button onClick={() => setRun(true)}>Joy Ride</Button>
                            <Tour steps={stepsTour} isOpen={isTourOpen} onRequestClose={() => setIsTourOpen(false)} />
                            <Joyride
                                callback={handleJoyrideCallback}
                                run={run}
                                continuous
                                scrollToFirstStep
                                showProgress
                                showSkipButton
                                steps={steps}
                                styles={{
                                    options: {
                                        zIndex: 10000
                                    }
                                }}
                            />
                        </Card.Body>
                    </Card>
                    <MainCard isOption title="Hello tour" cardClass="tour-1 card-test" optionClass="card-option">
                        <h1>H1 Gradient Able</h1>
                        <h2>H2 Gradient Able</h2>
                        <h3>H3 Gradient Able</h3>
                        <h4>H4 Gradient Able</h4>
                        <h5>H5 Gradient Able</h5>
                        <h6>H6 Gradient Able</h6>
                        <Card.Text>Paragraph Gradient Able</Card.Text>
                        <Card.Text>Paragraph Gradient Able</Card.Text>
                    </MainCard>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AdvanceTour;
