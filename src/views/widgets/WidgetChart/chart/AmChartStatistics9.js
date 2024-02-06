import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/radar';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartStatistics9 = () => {
    useEffect(() => {
        AmCharts.makeChart('sales-render', {
            type: 'radar',
            theme: 'light',
            dataProvider: [
                {
                    Month: 'Jan',
                    visit: 100,
                    sales: 80
                },
                {
                    Month: 'Feb',
                    visit: 60,
                    sales: 90
                },
                {
                    Month: 'Mar',
                    visit: 100,
                    sales: 80
                },
                {
                    Month: 'Apr',
                    visit: 100,
                    sales: 110
                },
                {
                    Month: 'May',
                    visit: 100,
                    sales: 40
                },
                {
                    Month: 'Jun',
                    visit: 80,
                    sales: 115
                }
            ],
            valueAxes: [
                {
                    axisTitleOffset: 20,
                    minimum: 0,
                    axisAlpha: 0.15
                },
                {
                    id: 'v2',
                    axisTitleOffset: 20,
                    minimum: 0,
                    axisAlpha: 0,
                    inside: true
                }
            ],
            startDuration: 2,
            graphs: [
                {
                    balloonText: '[[value]] visit of per year',
                    bullet: 'false',
                    fillAlphas: 1,
                    lineColor: ['#a389d4', '#899ed4'],
                    valueField: 'visit'
                },
                {
                    balloonText: '[[value]] sales of per year',
                    bullet: 'false',
                    valueField: 'sales',
                    fillAlphas: 1,
                    lineColor: ['#1de9b6', '#1dc4e9'],
                    valueAxis: 'v2'
                }
            ],
            categoryField: 'Month'
        });
    });

    return <div id="sales-render" style={{ width: '100%', height: '300px' }} />;
};

export default AmChartStatistics9;
