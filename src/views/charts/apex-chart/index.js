import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { Row, Col, Card, ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import useInterval from 'react-useinterval';
import ApexCharts from 'apexcharts';

import ModuleNotification from '../../../components/Widgets/Statistic/Notification';

import lineChart1 from './chart/line-chart-1';
import lineChart3 from './chart/line-chart-3';

import areaChart1 from './chart/area-chart-1';

import barChart1 from './chart/bar-chart-1';
import barChart2 from './chart/bar-chart-2';
import barChart3 from './chart/bar-chart-3';
import barChart4 from './chart/bar-chart-4';

import mixedChart1 from './chart/mixed-chart-1';
import mixedChart2 from './chart/mixed-chart-2';

import candlestickChart from './chart/candlestick-chart';

import bubbleChart1 from './chart/bubble-chart-1';
import bubbleChart2 from './chart/bubble-chart-2';

import scatterChart1 from './chart/scatter-chart-1';
import scatterChart2 from './chart/scatter-chart-2';

import heatMapChart1 from './chart/heat-map-chart-1';
import heatMapChart2 from './chart/heat-map-chart-2';

import pieChart1 from './chart/pie-chart-1';
import pieChart2 from './chart/pie-chart-2';

import radialChart1 from './chart/radial-bar-chart-1';
import radialChart2 from './chart/radial-bar-chart-2';

import radarChart1 from './chart/radar-chart-1';
import radarChart2 from './chart/radar-chart-2';

import dailyVisitor from './chart/daily-visitor';
import lineChart from './chart/line-chart';

const ApexChart = () => {
    const [data, setData] = useState([]);
    const [latestDate, setLatestDate] = useState(new Date('11 Feb 2017 GMT').getTime());

    const dailyVisitorHandler = (unit) => {
        let minState, maxState;
        switch (unit) {
            case '1m':
                minState = new Date('28 Jan 2013').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            case '6m':
                minState = new Date('27 Sep 2012').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            default:
            case '1y':
                minState = new Date('27 Feb 2012').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            case 'ytd':
                minState = new Date('01 Jan 2013').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            case 'all':
                minState = undefined;
                maxState = undefined;
                break;
        }

        const newDailyVisitors = {
            ...dailyVisitor.options,
            xaxis: {
                min: minState,
                max: maxState
            }
        };
        ApexCharts.exec(`daily-visitor`, 'updateOptions', newDailyVisitors);
    };

    const dataProvider = (baseval) => {
        const yrange = { min: 10, max: 90 };
        const newDate = latestDate + 86400000;
        const newData = {
            x: newDate,
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        };

        setLatestDate(newDate);

        const latestData = [...data, newData];

        const newSeries = [
            {
                ...lineChart.series,
                data: latestData
            }
        ];

        setData(latestData);

        ApexCharts.exec(`line-chart`, 'updateSeries', newSeries);
    };

    useEffect(() => {
        let i = 0;
        let baseval = new Date('11 Feb 2017 GMT').getTime();
        const count = 10;
        const yrange = { min: 10, max: 90 };

        let newData = [];
        let newDate;

        while (i < count) {
            const x = baseval;
            const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            newData = [...newData, { x, y }];
            newDate = baseval;
            baseval += 86400000;
            i++;
        }
        setLatestDate(newDate);
        setData(newData);
    }, [setLatestDate, setData]);

    useInterval(dataProvider, 2000, latestDate);

    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <ModuleNotification
                        message="For more info please check the components's official documentation"
                        link="https://apexcharts.com/docs/react-charts/"
                    />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Basic line chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...lineChart1} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Realtime Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...lineChart} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Different line chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...lineChart3} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Area chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...areaChart1} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Area chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ButtonToolbar>
                                <ToggleButtonGroup variant="radio" name="options" defaultValue="1y">
                                    <ToggleButton variant="outline-primary" value="1m" size="sm" onClick={() => dailyVisitorHandler('1m')}>
                                        1M
                                    </ToggleButton>
                                    <ToggleButton variant="outline-primary" value="6m" size="sm" onClick={() => dailyVisitorHandler('6m')}>
                                        6M
                                    </ToggleButton>
                                    <ToggleButton variant="outline-primary" value="1y" size="sm" onClick={() => dailyVisitorHandler('1y')}>
                                        1Y
                                    </ToggleButton>
                                    <ToggleButton
                                        variant="outline-primary"
                                        value="ytd"
                                        size="sm"
                                        onClick={() => dailyVisitorHandler('ytd')}
                                    >
                                        YTD
                                    </ToggleButton>
                                    <ToggleButton
                                        variant="outline-primary"
                                        value="all"
                                        size="sm"
                                        onClick={() => dailyVisitorHandler('all')}
                                    >
                                        All
                                    </ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                            <Chart {...dailyVisitor} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bar chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...barChart1} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bar chart stacked</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...barChart2} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bar chart horizontal</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...barChart3} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bar chart horizontal stacked</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...barChart4} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Mixed Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...mixedChart1} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Mixed Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...mixedChart2} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Candlestick Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...candlestickChart} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...bubbleChart1} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Bubble Chart 3d</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...bubbleChart2} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...scatterChart1} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Scatter Chart Datetime</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...scatterChart2} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Heatmap Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...heatMapChart1} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Heatmap Chart Rounded</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...heatMapChart2} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...pieChart1} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pie Chart donut</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...pieChart2} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Radial Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...radialChart1} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Radial Bar Chart Custom Angle</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...radialChart2} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Radar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...radarChart1} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Radar Chart Multiple Series</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...radarChart2} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default ApexChart;
