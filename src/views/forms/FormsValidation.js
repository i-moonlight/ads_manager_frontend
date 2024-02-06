import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SyncValidationForm from './form-validation/SyncValidationForm';
import FieldLevelValidationForm from './form-validation/FieldLevelValidationForm';
import SubmitValidationForm from './form-validation/SubmitValidationForm';
import AsyncValidationForm from './form-validation/AsyncValidationForm';
import showResults from './form-validation/showResults';
import CombinedValidations from './form-validation/CombinedValidations';

import ModuleNotification from '../../components/Widgets/Statistic/Notification';

const FormsValidation = () => {
    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://redux-form.com/8.2.2/docs/gettingstarted.md/"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    <SyncValidationForm />
                </Col>
                <Col sm={12} md={6}>
                    <AsyncValidationForm onSubmit={showResults} />
                </Col>
                <Col sm={12} md={6}>
                    <FieldLevelValidationForm />
                </Col>
                <Col sm={12} md={6}>
                    <SubmitValidationForm />
                </Col>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://formik.org/docs/overview"
                    />
                </Col>
                <Col sm={12}>
                    <CombinedValidations />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormsValidation;
