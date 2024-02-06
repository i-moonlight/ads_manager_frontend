import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const BasicOther = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Shadows</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
                            <div className="shadow-sm p-3 mb-5 bg-white rounded">Small shadow</div>
                            <div className="shadow p-3 mb-5 bg-white rounded">Regular shadow</div>
                            <div className="shadow-lg p-3 mb-5 bg-white rounded">Larger shadow</div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Embeds</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="justify-content-center">
                                <Col md={8}>
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            title="Responsive Item"
                                            className="embed-responsive-item"
                                            src="https://www.youtube.com/embed/ilLU5vxhLYA?rel=0"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Aspect Ratios</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <h5 className="mt-5">Aspect Ratios 21by9</h5>
                                    <hr />
                                    <div className="embed-responsive embed-responsive-21by9">
                                        <iframe
                                            title="Ration 21by9"
                                            className="embed-responsive-item"
                                            src="https://www.youtube.com/embed/ilLU5vxhLYA?rel=0"
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <h5 className="mt-5">Aspect Ratios 16by9</h5>
                                    <hr />
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe
                                            title="Ration 16by9"
                                            className="embed-responsive-item"
                                            src="https://www.youtube.com/embed/ilLU5vxhLYA?rel=0"
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <h5 className="mt-5">Aspect Ratios 4by3</h5>
                                    <hr />
                                    <div className="embed-responsive embed-responsive-4by3">
                                        <iframe
                                            title="Ration 4by3"
                                            className="embed-responsive-item"
                                            src="https://www.youtube.com/embed/ilLU5vxhLYA?rel=0"
                                        />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <h5 className="mt-5">Aspect Ratios 1by1</h5>
                                    <hr />
                                    <div className="embed-responsive embed-responsive-1by1">
                                        <iframe
                                            title="Ration 1by1"
                                            className="embed-responsive-item"
                                            src="https://www.youtube.com/embed/ilLU5vxhLYA?rel=0"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default BasicOther;
