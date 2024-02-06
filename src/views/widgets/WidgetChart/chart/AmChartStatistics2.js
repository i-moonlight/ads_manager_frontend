import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartStatistics2 = (props) => {
    useEffect(() => {
        AmCharts.makeChart('chart-line', {
            type: 'serial',
            addClassNames: true,
            defs: {
                filter: [
                    {
                        x: '-50%',
                        y: '-50%',
                        width: '200%',
                        height: '200%',
                        id: 'blur',
                        feGaussianBlur: {
                            in: 'SourceGraphic',
                            stdDeviation: '30'
                        }
                    },
                    {
                        id: 'shadow',
                        x: '-10%',
                        y: '-10%',
                        width: '120%',
                        height: '120%',
                        feOffset: {
                            result: 'offOut',
                            in: 'SourceAlpha',
                            dx: '0',
                            dy: '20'
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
            dataProvider: [
                {
                    Year: 'Jan',
                    value: 50
                },
                {
                    Year: 'Feb',
                    value: 60
                },
                {
                    Year: 'Mar',
                    value: 55
                },
                {
                    Year: 'Apr',
                    value: 62
                },
                {
                    Year: 'May',
                    value: 55
                },
                {
                    Year: 'Jun',
                    value: 62
                }
            ],
            autoMarginOffset: 0,
            marginRight: 0,
            categoryField: 'Year',
            categoryAxis: {
                color: '#fff',
                gridAlpha: 0,
                axisAlpha: 0,
                lineAlpha: 0,
                offset: -20,
                minPeriod: 'YYYY',
                inside: true
            },
            valueAxes: [
                {
                    fontSize: 0,
                    inside: true,
                    gridAlpha: 0,
                    axisAlpha: 0,
                    lineAlpha: 0,
                    minimum: 0,
                    maximum: 80
                }
            ],
            chartCursor: {
                valueLineEnabled: false,
                valueLineBalloonEnabled: false,
                cursorAlpha: 0,
                zoomable: false,
                valueZoomable: false,
                cursorColor: '#fff',
                categoryBalloonDateFormat: 'YYYY',
                categoryBalloonColor: '#1dd6d1',
                valueLineAlpha: 0
            },
            graphs: [
                {
                    id: 'g1',
                    type: 'line',
                    valueField: 'value',
                    bullet: 'round',
                    lineColor: '#ffffff',
                    lineAlpha: 1,
                    lineThickness: 3,
                    fillAlphas: 0,
                    showBalloon: true,
                    balloon: {
                        drop: true,
                        adjustBorderColor: false,
                        color: '#000',
                        fillAlphas: 0.2,
                        bullet: 'round',
                        bulletBorderAlpha: 1,
                        bulletSize: 5,
                        hideBulletsCount: 50,
                        lineThickness: 2,
                        type: 'smoothedLine',
                        useLineColorForBulletBorder: true,
                        valueField: 'value',
                        balloonText: "<span style='font-size:18px;'>[[value]]</span>"
                    }
                }
            ]
        });
    });

    return <div id="chart-line" className="lineChart ChartShadow" style={{ width: '100%', height: '260px' }} />;
};

export default AmChartStatistics2;
