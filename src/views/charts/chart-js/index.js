import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

import BarBasicChart from './chart/BarBasicChart';
import BarStackedChart from './chart/BarStackedChart';
import BarHorizontalChart from './chart/BarHorizontalChart';
import LineInterpolationChart from './chart/LineInterpolationChart';
import LineOriginChart from './chart/LineOriginChart';
import LineFillEndChart from './chart/LineFillEndChart';
import LineBasicChart from './chart/LineBasicChart';
import RadarAreaChart1 from './chart/RadarAreaChart1';
import RadarAreaChart2 from './chart/RadarAreaChart2';
import RadarAreaChart3 from './chart/RadarAreaChart3';
import PieChart from './chart/PieChart';
import DoughnutChart from './chart/DoughnutChart';

const ChartJs = () => {
    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://www.npmjs.com/package/react-chartjs-2"
                    />
                </Col>
            </Row>
            <Row>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <BarBasicChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bar [Stacked] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <BarStackedChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bar [Horizontal] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <BarHorizontalChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Line [Interpolation] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <LineInterpolationChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Area [ Fill: 'origin' ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <LineOriginChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Area [ Fill: 'end' ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <LineFillEndChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <LineBasicChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Radar [ Area ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <RadarAreaChart1 />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Radar [ Area ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <RadarAreaChart2 />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Radar [ Area ] Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <RadarAreaChart3 />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <PieChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Doughnut Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <DoughnutChart />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ChartJs;
