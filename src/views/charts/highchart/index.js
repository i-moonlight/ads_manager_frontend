import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import BarBasicChart from './chart/BarBasicChart';
import LineBasicChart from './chart/LineBasicChart';
import AreaZoomChart from './chart/AreaZoomChart';
import PieBasicChart from './chart/PieBasicChart';
import PieDonutChart from './chart/PieDonutChart';
import Pie3DChart from './chart/Pie3DChart';
import PieDonut3DChart from './chart/PieDonut3DChart';
import ComboChart from './chart/ComboChart';

import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

const HighChart = () => {
    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/highcharts-react-official"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bar [ Basic ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <BarBasicChart />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Line [ Basic ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <LineBasicChart />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Area [ Zoom ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AreaZoomChart />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lx={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pie [ Basic ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <PieBasicChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lx={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pie [ Donut ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <PieDonutChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lx={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pie [ 3D ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Pie3DChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lx={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pie [ Donut 3D ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <PieDonut3DChart />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Combinations [ Column, Line & Pie ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ComboChart />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default HighChart;
