import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartNewsStatistics = (props) => {
    useEffect(() => {
        AmCharts.makeChart('bar-chart', {
            type: 'serial',
            theme: 'light',
            dataProvider: [
                {
                    game: 'Sport',
                    visits: 53,
                    color: ['#1de9b6', '#1dc4e9']
                },
                {
                    game: 'Music',
                    visits: 13,
                    color: ['#a389d4', '#899ed4']
                },
                {
                    game: 'Travel',
                    visits: 30,
                    color: ['#04a9f5', '#049df5']
                },
                {
                    game: 'News',
                    visits: 4,
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
                    fillColorsField: 'color',
                    fillAlphas: 0.9,
                    lineAlpha: 0,
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
            categoryField: 'game',
            categoryAxis: {
                gridPosition: 'start',
                gridAlpha: 0,
                axisAlpha: 0,
                lineAlpha: 0
            }
        });
    });

    return <div id="bar-chart" className="lineChart ChartShadow" style={{ width: '100%', height: props.height }} />;
};

export default AmChartNewsStatistics;
