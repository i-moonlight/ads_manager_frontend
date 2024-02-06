import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import AreaBasicChart from './chart/AreaBasicChart';
import AreaStackingChart from './chart/AreaStackingChart';
import BarBasicChart from './chart/BarBasicChart';
import BubbleChart from './chart/BubbleChart';
import CandlestickChart from './chart/CandlestickChart';
import WaterfallChart from './chart/WaterfallChart';
import ComboChart from './chart/ComboChart';
import PieDonutChart from './chart/PieDonutChart';
import PieExploadingChart from './chart/PieExploadingChart';
import PieSliceVisibilityChart from './chart/PieSliceVisibilityChart';

const GoogleChart = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AreaBasicChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Stacking Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AreaStackingChart />
                        </Card.Body>
                    </Card>
                </Col>
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
                            <Card.Title as="h5">Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <BubbleChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Candlestick Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <CandlestickChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Waterfall Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <WaterfallChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Combo Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ComboChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Donut Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <PieDonutChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Exploading A Slice Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <PieExploadingChart />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Slice Visibility Threshold Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <PieSliceVisibilityChart />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default GoogleChart;
