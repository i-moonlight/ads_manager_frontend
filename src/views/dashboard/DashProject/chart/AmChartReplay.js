import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartReplay = (props) => {
    useEffect(() => {
        AmCharts.makeChart('bar-chart1', {
            type: 'serial',
            theme: 'light',
            dataProvider: [
                {
                    Average: '0-1',
                    value: 53,
                    color: ['#1de9b6', '#1dc4e9']
                },
                {
                    Average: '1-4',
                    value: 13,
                    color: ['#a389d4', '#899ed4']
                },
                {
                    Average: '8-24',
                    value: 30,
                    color: ['#04a9f5', '#049df5']
                },
                {
                    Average: '>24',
                    value: 4,
                    color: ['#f44236', '#f48f36']
                }
            ],
            valueAxes: [
                {
                    gridAlpha: 0,
                    axisAlpha: 0,
                    lineAlpha: 0,
                    fontSize: 0
                }
            ],
            startDuration: 1,
            graphs: [
                {
                    balloonText: '<b>[[category]]: [[value]]</b>',
                    labelPosition: 'top',
                    labelText: '[[value]]',
                    fillColorsField: 'color',
                    fillAlphas: 0.9,
                    lineAlpha: 0,
                    type: 'column',
                    valueField: 'value'
                }
            ],
            chartCursor: {
                categoryBalloonEnabled: false,
                cursorAlpha: 0,
                zoomable: false
            },
            categoryField: 'Average',
            categoryAxis: {
                gridPosition: 'start',
                gridAlpha: 0,
                axisAlpha: 0,
                lineAlpha: 0
            }
        });
    });

    return <div id="bar-chart1" className="BarChart barChart1 ChartShadow" style={{ width: '100%', height: props.height }} />;
};

export default AmChartReplay;
