import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/radar';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartWebStatistics = () => {
    useEffect(() => {
        AmCharts.makeChart('webchart', {
            type: 'radar',
            theme: 'light',
            dataProvider: [
                {
                    direction: 'Sales',
                    value: 15
                },
                {
                    direction: 'Visits',
                    value: 13
                },
                {
                    direction: 'Views',
                    value: 11.1
                },
                {
                    direction: 'Clicks',
                    value: 15
                }
            ],
            valueAxes: [
                {
                    gridType: 'circles',
                    minimum: 0,
                    autoGridCount: true,
                    axisAlpha: 0,
                    fillAlpha: 0.05,
                    fillColor: '#eff1f4',
                    gridAlpha: 0.08,
                    position: 'center'
                }
            ],
            startDuration: 1,
            graphs: [
                {
                    balloonText: '[[category]]: [[value]] m/s',
                    bullet: 'false',
                    fillAlphas: 1,
                    lineColor: ['#1de9b6', '#1dc4e9'],
                    valueField: 'value'
                }
            ],
            categoryField: 'direction'
        });
    });

    return <div id="webchart" style={{ width: '100%', height: '250px' }} />;
};

export default AmChartWebStatistics;
