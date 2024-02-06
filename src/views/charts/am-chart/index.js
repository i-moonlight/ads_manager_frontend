import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import PieChart from './chart/PieChart';
import XyChart from './chart/XyChart';
import MapChart from './chart/MapChart';

const AmChart = () => {
    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Amchart 4 Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <PieChart />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Amchart 4 XY Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <XyChart />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Amchart 4 Map Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <MapChart />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default AmChart;
