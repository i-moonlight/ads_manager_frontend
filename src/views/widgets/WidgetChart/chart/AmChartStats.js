import React, { useEffect, useState } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartStats = () => {
    const [dataum] = useState([
        {
            year: '1999',
            value: 20
        },
        {
            year: '2000',
            value: 25
        },
        {
            year: '2001',
            value: 30
        },
        {
            year: '2002',
            value: 28
        },
        {
            year: '2003',
            value: 25
        },
        {
            year: '2004',
            value: 28
        },
        {
            year: '2005',
            value: 30
        }
    ]);

    useEffect(() => {
        let chartm = AmCharts.makeChart('sitevisite-chart', {
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
            dataProvider: dataum,
            dataDateFormat: 'YYYY',
            autoMarginOffset: 0,
            marginRight: 0,
            categoryField: 'year',
            categoryAxis: {
                color: '#fff',
                gridAlpha: 0,
                axisAlpha: 0,
                lineAlpha: 0,
                offset: -20,
                inside: true,
                parseDates: true,
                minPeriod: 'YYYY'
            },
            chartCursor: {
                valueLineEnabled: false,
                valueLineBalloonEnabled: false,
                cursorAlpha: 0,
                zoomable: false,
                cursorColor: '#fff',
                categoryBalloonColor: '#899ed4',
                valueZoomable: false,
                valueLineAlpha: 0
            },
            valueAxes: [
                {
                    fontSize: 0,
                    inside: true,
                    gridAlpha: 0,
                    axisAlpha: 0,
                    lineAlpha: 0
                }
            ],
            graphs: [
                {
                    id: 'g1',
                    valueField: 'value',
                    type: 'smoothedLine',
                    lineColor: '#fff',
                    fillColors: ['#a389d4', 'transparent'],
                    lineAlpha: 1,
                    lineThickness: 5,
                    fillAlphas: 0.3,
                    showBalloon: true,
                    balloon: {
                        drop: true,
                        adjustBorderColor: false,
                        color: '#ffffff',
                        fillAlphas: 0.2,
                        bullet: 'round',
                        bulletBorderAlpha: 1,
                        bulletSize: 5,
                        hideBulletsCount: 50,
                        lineThickness: 2,
                        useLineColorForBulletBorder: true,
                        valueField: 'value',
                        balloonText: "<span style='font-size:18px;'>[[value]]</span>"
                    }
                }
            ]
        });
        setTimeout(() => {
            chartm.zoomToIndexes(1, dataum.length - 2);
        }, 400);
    });

    return <div id="sitevisite-chart" style={{ width: '100%', height: '250px' }} />;
};

export default AmChartStats;
