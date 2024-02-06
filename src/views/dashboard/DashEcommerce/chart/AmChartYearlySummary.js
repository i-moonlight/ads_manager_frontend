import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartYearlySummary = (props) => {
    useEffect(() => {
        AmCharts.makeChart('bar-chart3', {
            type: 'serial',
            theme: 'light',
            marginTop: 10,
            marginRight: 0,
            valueAxes: [
                {
                    id: 'v1',
                    position: 'left',
                    gridAlpha: 0,
                    axisAlpha: 0,
                    lineAlpha: 0,
                    autoGridCount: false,
                    labelFunction: function (value) {
                        return +Math.round(value) + '00';
                    }
                }
            ],
            graphs: [
                {
                    id: 'g1',
                    valueAxis: 'v1',
                    lineColor: ['#1de9b6', '#1dc4e9'],
                    fillColors: ['#1de9b6', '#1dc4e9'],
                    fillAlphas: 1,
                    type: 'column',
                    title: 'Last Week ',
                    valueField: 'sales2',
                    columnWidth: 0.2,
                    legendValueText: '$[[value]]M',
                    balloonText: "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
                },
                {
                    id: 'g2',
                    valueAxis: 'v1',
                    lineColor: ['#a389d4', '#899ed4'],
                    fillColors: ['#a389d4', '#899ed4'],
                    fillAlphas: 1,
                    type: 'column',
                    title: 'Market Place ',
                    valueField: 'sales1',
                    columnWidth: 0.2,
                    legendValueText: '$[[value]]M',
                    balloonText: "[[title]]<br /><b style='font-size: 130%'>$[[value]]M</b>"
                }
            ],
            chartCursor: {
                pan: true,
                valueLineEnabled: true,
                valueLineBalloonEnabled: true,
                cursorAlpha: 0,
                valueLineAlpha: 0.2
            },
            categoryField: 'date',
            categoryAxis: {
                dashLength: 1,
                gridAlpha: 0,
                axisAlpha: 0,
                lineAlpha: 0,
                minorGridEnabled: true
            },
            legend: {
                useGraphSettings: true,
                position: 'top'
            },
            balloon: {
                borderThickness: 1,
                shadowAlpha: 0
            },
            dataProvider: [
                {
                    date: 'Q1',
                    sales1: 4.5,
                    sales2: 5.5
                },
                {
                    date: 'Q2',
                    sales1: 5,
                    sales2: 6.5
                },
                {
                    date: 'Q3',
                    sales1: 6.5,
                    sales2: 5.5
                },
                {
                    date: 'Q4',
                    sales1: 6,
                    sales2: 7
                }
            ]
        });
    });

    return <div id="bar-chart3" className="bar-chart3" style={{ width: '100%', height: props.height }} />;
};

export default AmChartYearlySummary;
