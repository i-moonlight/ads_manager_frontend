import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import AreaChart1 from './chart/AreaChart1';
import AreaChart2 from './chart/AreaChart2';
import BarBasicColumnChart from './chart/BarBasicColumnChart';
import BarHorizontalChart from './chart/BarHorizontalChart';
import PieBasicColumnChart from './chart/PieBasicColumnChart';
import PieDoughnutChart from './chart/PieDoughnutChart';
import GaugeChart from './chart/GaugeChart';

const EChart = () => {
    return (
        <React.Fragment>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AreaChart1 />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AreaChart2 />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bar [ Basic Column ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <BarBasicColumnChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bar [ Basic Bar ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <BarHorizontalChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pie [ Basic Column ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <PieBasicColumnChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pie [ Doughnut ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <PieDoughnutChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Gauge Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <GaugeChart />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default EChart;
