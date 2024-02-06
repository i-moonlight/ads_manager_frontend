import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import BarSimpleChart from './chart/BarSimpleChart';
import BarStackedChart from './chart/BarStackedChart';
import AreaAngleChart from './chart/AreaAngleChart';
import AreaSmoothChart from './chart/AreaSmoothChart';
import LineAngleChart from './chart/LineAngleChart';
import LineSmoothChart from './chart/LineSmoothChart';
import PieBasicChart from './chart/PieBasicChart';
import PieDonutChart from './chart/PieDonutChart';
import ComboChart from './chart/ComboChart';

import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

const ReChart = () => {
    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://recharts.org/en-US/examples"
                    />
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bar [ Simple ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <BarSimpleChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bar [ Stacked ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <BarStackedChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Line [ Angle ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <AreaAngleChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Area [ Smooth ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <AreaSmoothChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Line [ Angle ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <LineAngleChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Line [ Smooth ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <LineSmoothChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pie [ Basic ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <PieBasicChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pie [ Donut ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <PieDonutChart />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Combo Chart</Card.Title>
                        </Card.Header>
                        <Card.Body className="text-center">
                            <ComboChart />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ReChart;
