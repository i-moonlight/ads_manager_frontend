import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/radar';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartStatistics10 = () => {
    useEffect(() => {
        AmCharts.makeChart('Statistics-line', {
            type: 'serial',
            theme: 'light',
            marginTop: 10,
            marginRight: 0,
            dataProvider: [
                {
                    year: '2014',
                    value: 30
                },
                {
                    year: '2015',
                    value: 60
                },
                {
                    year: '2016',
                    value: 50
                },
                {
                    year: '2017',
                    value: 70
                }
            ],
            valueAxes: [
                {
                    axisAlpha: 0,
                    minimum: 0,
                    maximum: 100,
                    position: 'left'
                }
            ],
            graphs: [
                {
                    id: 'g1',
                    balloonText: "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                    bullet: 'round',
                    bulletSize: 5,
                    lineColor: '#1dc4e9',
                    lineThickness: 5,
                    valueField: 'value'
                }
            ],
            chartCursor: {
                categoryBalloonDateFormat: 'YYYY',
                cursorAlpha: 0,
                valueLineEnabled: true,
                valueLineBalloonEnabled: true,
                valueLineAlpha: 0.5,
                fullWidth: true
            },
            dataDateFormat: 'YYYY',
            categoryField: 'year',
            categoryAxis: {
                minPeriod: 'YYYY',
                parseDates: true,
                minorGridAlpha: 0.1,
                gridColor: '#fff',
                minorGridEnabled: true
            }
        });
    });

    return <div id="Statistics-line" className="ChartShadow" style={{ width: '100%', height: '450px' }} />;
};

export default AmChartStatistics10;
