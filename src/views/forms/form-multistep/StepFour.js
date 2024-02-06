import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StepFour = () => {
    const [checked, setChecked] = useState(false);

    return (
        <React.Fragment>
            <Row>
                <Col className="ten columns terms ml-5">
                    <span>By clicking "Accept" I agree that:</span>
                    <ul className="docs-terms">
                        <li>
                            I have read and accepted the <Link to="#">User Agreement</Link>
                        </li>
                        <li>
                            I have read and accepted the <Link to="#">Privacy Policy</Link>
                        </li>
                        <li>I am at least 18 years old</li>
                    </ul>
                    <label>
                        <input type="checkbox" checked={checked} onChange={(e) => setChecked((prevState) => !prevState)} autoFocus />
                        <span> Accept </span>
                    </label>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default StepFour;
