import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartStatistics1 = (props) => {
    useEffect(() => {
        AmCharts.makeChart('line-area2', {
            type: 'serial',
            theme: 'light',
            marginTop: 10,
            marginRight: 0,
            dataProvider: [
                {
                    year: 'Jan',
                    value: 5,
                    value2: 80
                },
                {
                    year: 'Feb',
                    value: 30,
                    value2: 95
                },
                {
                    year: 'Mar',
                    value: 25,
                    value2: 87
                },
                {
                    year: 'Apr',
                    value: 55,
                    value2: 155
                },
                {
                    year: 'May',
                    value: 45,
                    value2: 140
                },
                {
                    year: 'Jun',
                    value: 65,
                    value2: 147
                },
                {
                    year: 'Jul',
                    value: 60,
                    value2: 130
                },
                {
                    year: 'Aug',
                    value: 105,
                    value2: 180
                },
                {
                    year: 'Sep',
                    value: 80,
                    value2: 160
                },
                {
                    year: 'Oct',
                    value: 110,
                    value2: 175
                },
                {
                    year: 'Nov',
                    value: 120,
                    value2: 165
                },
                {
                    year: 'Dec',
                    value: 150,
                    value2: 200
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
                    bullet: 'round',
                    lineColor: '#1de9b6',
                    lineThickness: 3,
                    negativeLineColor: '#1de9b6',
                    valueField: 'value'
                },
                {
                    id: 'g2',
                    balloonText: "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                    bullet: 'round',
                    lineColor: '#10adf5',
                    lineThickness: 3,
                    negativeLineColor: '#10adf5',
                    valueField: 'value2'
                }
            ],
            chartCursor: {
                cursorAlpha: 0,
                valueLineEnabled: true,
                valueLineBalloonEnabled: true,
                valueLineAlpha: 0.3,
                fullWidth: true
            },
            categoryField: 'year',
            categoryAxis: {
                minorGridAlpha: 0,
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

    return <div id="line-area2" className="lineAreaDashboard" style={{ width: '100%', height: props.height }} />;
};

export default AmChartStatistics1;
