import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const StepOne = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
        <React.Fragment>
            <Row>
                <Col sm={3}>
                    <label>First Name</label>
                </Col>
                <Col sm={9}>
                    <input
                        className="u-full-width form-control"
                        placeholder="First Name"
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        autoFocus
                    />
                </Col>
            </Row>
            <Row className="my-3">
                <Col sm={3}>
                    <label>Last Name</label>
                </Col>
                <Col sm={9}>
                    <input
                        className="u-full-width form-control"
                        placeholder="Last Name"
                        type="text"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default StepOne;
