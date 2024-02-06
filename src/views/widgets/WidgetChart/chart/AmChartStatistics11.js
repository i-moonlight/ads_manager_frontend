import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartStatistics11 = (props) => {
    useEffect(() => {
        AmCharts.makeChart('Statistics-sale', {
            type: 'serial',
            theme: 'light',
            autoMargins: false,
            addClassNames: true,
            zoomOutText: '',
            defs: {
                filter: [
                    {
                        id: 'shadow',
                        width: '150%',
                        height: '150%',
                        feOffset: {
                            result: 'offOut',
                            in: 'SourceAlpha',
                            dx: '2',
                            dy: '2'
                        },
                        feGaussianBlur: {
                            result: 'blurOut',
                            in: 'offOut',
                            stdDeviation: '10'
                        },
                        feColorMatrix: {
                            result: 'blurOut',
                            type: 'matrix',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .2 0'
                        },
                        feBlend: {
                            in: 'SourceGraphic',
                            in2: 'blurOut',
                            mode: 'normal'
                        }
                    }
                ]
            },
            fontSize: 15,
            pathToImages: '../amcharts/images/',
            dataProvider: [
                {
                    year: '2001',
                    bicycles: 55
                },
                {
                    year: '2002',
                    bicycles: 40
                },
                {
                    year: '2003',
                    bicycles: 50
                }
            ],
            dataDateFormat: 'YYYY',
            marginTop: 10,
            marginRight: 0,
            marginLeft: 0,
            autoMarginOffset: 5,
            categoryField: 'year',
            categoryAxis: {
                gridAlpha: 0,
                axisAlpha: 0,
                startOnAxis: true,
                tickLength: 0,
                color: '#fff',
                parseDates: true,
                minPeriod: 'YYYY',
                offset: 0,
                inside: true
            },
            valueAxes: [
                {
                    fontSize: 0,
                    gridAlpha: 0,
                    axisAlpha: 0,
                    minimum: 0,
                    maximum: 100
                }
            ],
            graphs: [
                {
                    id: 'g3',
                    title: 'Bicycles',
                    valueField: 'bicycles',
                    lineAlpha: 1,
                    lineColor: '#FFFFFF',
                    lineThickness: 3,
                    bullet: 'round',
                    bulletBorderAlpha: 3,
                    bulletAlpha: 1,
                    bulletSize: 8,
                    stackable: false,
                    bulletColor: '#04A5F5',
                    bulletBorderColor: '#fff',
                    bulletBorderThickness: 3,
                    balloonText:
                        "<div style='margin-bottom:30px;text-shadow: 2px 2px rgba(0, 0, 0, 0.1); font-weight:200;font-size:30px; color:#ffffff'>[[value]]</div>"
                }
            ],
            chartCursor: {
                cursorAlpha: 1,
                fontSize: 0,
                zoomable: false,
                cursorColor: '#fff',
                categoryBalloonColor: '#04A5F5',
                fullWidth: true,
                categoryBalloonDateFormat: 'YYYY',
                balloonPointerOrientation: 'vertical'
            },
            balloon: {
                borderAlpha: 0,
                fillAlpha: 0,
                shadowAlpha: 0,
                offsetX: 40,
                offsetY: -50
            }
        });
    });

    return <div id="Statistics-sale" className="last-week-sales" style={{ width: '100%', height: props.height }} />;
};

export default AmChartStatistics11;
