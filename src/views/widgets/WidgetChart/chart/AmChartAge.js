import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartAge = (props) => {
    useEffect(() => {
        AmCharts.makeChart('Stack-age', {
            type: 'serial',
            theme: 'light',
            dataProvider: [
                {
                    age: '<20',
                    visits: 30,
                    color: ['#1de9b6', '#1dc4e9']
                },
                {
                    age: '30',
                    visits: 35,
                    color: ['#899FD4', '#A389D4']
                },
                {
                    age: '40',
                    visits: 40,
                    color: ['#1de9b6', '#1dc4e9']
                },
                {
                    age: '50',
                    visits: 30,
                    color: ['#899FD4', '#A389D4']
                },
                {
                    age: '60',
                    visits: 32,
                    color: ['#1de9b6', '#1dc4e9']
                },
                {
                    age: '>70',
                    visits: 38,
                    color: ['#899FD4', '#A389D4']
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
                    fillColorsField: 'color',
                    fillAlphas: 0.9,
                    lineAlpha: 0.2,
                    columnWidth: 0.2,
                    type: 'column',
                    valueField: 'visits'
                }
            ],
            chartCursor: {
                categoryBalloonEnabled: false,
                cursorAlpha: 0,
                zoomable: false
            },
            categoryField: 'age',
            categoryAxis: {
                gridPosition: 'start',
                gridAlpha: 0,
                axisAlpha: 0,
                lineAlpha: 0
            }
        });
    });

    return <div id="Stack-age" className="Stackchart" style={{ width: '100%', height: props.height }} />;
};

export default AmChartAge;
