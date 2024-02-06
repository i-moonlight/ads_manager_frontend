import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const StepThree = () => {
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    return (
        <React.Fragment>
            <Row>
                <Col sm={3}>
                    <label>Password</label>
                </Col>
                <Col sm={9}>
                    <input
                        className="u-full-width required form-control"
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        autoFocus
                    />
                </Col>
            </Row>
            <Row className="my-3">
                <Col sm={3}>
                    <label>Confirm password</label>
                </Col>
                <Col sm={9}>
                    <input
                        className="u-full-width  form-control"
                        placeholder="Confirm Password"
                        type="password"
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        value={passwordConfirm}
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default StepThree;
