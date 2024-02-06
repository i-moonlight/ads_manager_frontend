import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FormMultistep from './form-multistep';
import SimpleWizard from './simple-wizard';

import ModuleNotification from '../../components/Widgets/Statistic/Notification';

const FormsWizard = () => {
    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-multistep"
                    />
                </Col>
                <Col sm={12}>
                    <FormMultistep />
                </Col>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-simple-step-wizard"
                    />
                </Col>
                <Col sm={12}>
                    <SimpleWizard />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormsWizard;
