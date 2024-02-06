import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartStatistics = () => {
    useEffect(() => {
        AmCharts.makeChart('stack-bar', {
            type: 'serial',
            theme: 'light',
            dataProvider: [
                {
                    year: 'Jan',
                    visits: 10,
                    color: ['#1de9b6', '#1dc4e9']
                },
                {
                    year: 'Feb',
                    visits: 13,
                    color: ['#1de9b6', '#1dc4e9']
                },
                {
                    year: 'Mar',
                    visits: 20,
                    color: ['#1de9b6', '#1dc4e9']
                },
                {
                    year: 'Apr',
                    visits: 28,
                    color: ['#1de9b6', '#1dc4e9']
                },
                {
                    year: 'May',
                    visits: 25,
                    color: ['#1de9b6', '#1dc4e9']
                },
                {
                    year: 'Jun',
                    visits: 4,
                    color: ['#1de9b6', '#1dc4e9']
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
                    columnWidth: 0.1,
                    type: 'column',
                    valueField: 'visits'
                }
            ],
            chartCursor: {
                categoryBalloonEnabled: false,
                cursorAlpha: 0,
                zoomable: false
            },
            categoryField: 'year',
            categoryAxis: {
                gridPosition: 'start',
                gridAlpha: 0,
                axisAlpha: 0,
                lineAlpha: 0
            }
        });
    });

    return <div id="stack-bar" className="Stackchart" style={{ width: '100%', height: '300px' }} />;
};

export default AmChartStatistics;
