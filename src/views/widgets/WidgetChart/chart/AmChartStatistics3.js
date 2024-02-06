import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartStatistics3 = (props) => {
    useEffect(() => {
        AmCharts.makeChart('line-chart1', {
            type: 'serial',
            theme: 'light',
            marginTop: 10,
            marginRight: 0,
            dataProvider: [
                {
                    year: 'Jan',
                    value: 65,
                    value2: 125,
                    value3: 175
                },
                {
                    year: 'Feb',
                    value: 105,
                    value2: 80,
                    value3: 190
                },
                {
                    year: 'Mar',
                    value: 145,
                    value2: 30,
                    value3: 160
                },
                {
                    year: 'Apr',
                    value: 105,
                    value2: 70,
                    value3: 190
                },
                {
                    year: 'May',
                    value: 145,
                    value2: 110,
                    value3: 140
                },
                {
                    year: 'Jun',
                    value: 185,
                    value2: 150,
                    value3: 100
                }
            ],
            valueAxes: [
                {
                    axisAlpha: 0,
                    position: 'left'
                }
            ],
            graphs: [
                {
                    id: 'g1',
                    balloonText: "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                    bullet: 'false',
                    lineColor: '#2cd929',
                    lineThickness: 3,
                    negativeLineColor: '#2cd929',
                    type: 'smoothedLine',
                    valueField: 'value'
                },
                {
                    id: 'g2',
                    balloonText: "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                    bullet: 'false',
                    lineColor: '#29bdf5',
                    lineThickness: 3,
                    negativeLineColor: '#29bdf5',
                    type: 'smoothedLine',
                    valueField: 'value2'
                },
                {
                    id: 'g3',
                    balloonText: "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                    bullet: 'false',
                    lineColor: '#fdda08',
                    lineThickness: 3,
                    negativeLineColor: '#fdda08',
                    type: 'smoothedLine',
                    valueField: 'value3'
                }
            ],
            chartCursor: {
                cursorAlpha: 0,
                valueLineEnabled: true,
                valueLineBalloonEnabled: true,
                valueLineAlpha: 0.5,
                fullWidth: true
            },
            categoryField: 'year',
            categoryAxis: {
                minorGridAlpha: 0.1,
                minorGridEnabled: true,
                gridAlpha: 0,
                axisAlpha: 0,
                lineAlpha: 0
            },
            legend: {
                useGraphSettings: true,
                position: 'top'
            }
        });
    });

    return <div id="line-chart1" className="ChartShadow" style={{ width: '100%', height: '350px' }} />;
};

export default AmChartStatistics3;
