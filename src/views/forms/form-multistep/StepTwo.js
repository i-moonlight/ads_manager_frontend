import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const StepTwo = () => {
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');

    return (
        <React.Fragment>
            <Row>
                <Col sm={3}>
                    <label>Your email</label>
                </Col>
                <Col sm={9}>
                    <input
                        className="u-full-width required form-control"
                        placeholder="test@mailbox.com"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        autoFocus
                    />
                </Col>
            </Row>
            <Row className="my-3">
                <Col sm={3}>
                    <label>Confirm email</label>
                </Col>
                <Col sm={9}>
                    <input
                        className="u-full-width form-control"
                        placeholder="Confirm email"
                        type="email"
                        onChange={(e) => setEmailConfirm(e.target.value)}
                        value={emailConfirm}
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default StepTwo;
