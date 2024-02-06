import React, { useEffect, useState } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartStatistics8 = (props) => {
    const [dataum] = useState([
        {
            year: '1999',
            value: 30
        },
        {
            year: '2000',
            value: 55
        },
        {
            year: '2001',
            value: 80
        },
        {
            year: '2002',
            value: 60
        },
        {
            year: '2003',
            value: 70
        },
        {
            year: '2004',
            value: 70
        },
        {
            year: '2005',
            value: 110
        },
        {
            year: '2006',
            value: 90
        },
        {
            year: '2007',
            value: 130
        }
    ]);

    useEffect(() => {
        let chartm = AmCharts.makeChart('earnings-chart', {
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
            marginRight: -1,
            marginBottom: -2,
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
                categoryBalloonColor: '#88dcef',
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
                    type: 'line',
                    valueField: 'value',
                    fillColors: ['#1dc4e9', '#A389D4'],
                    lineColor: '#1dc4e9',
                    balloon: {
                        drop: true,
                        adjustBorderColor: false,
                        color: '#ffffff',
                        type: 'smoothedLine'
                    },
                    lineAlpha: 1,
                    lineThickness: 5,
                    fillAlphas: 0.9,
                    showBalloon: true
                }
            ]
        });
        setTimeout(() => {
            chartm.zoomToIndexes(1, dataum.length - 2);
        }, 400);
    });

    return <div id="earnings-chart" style={{ width: '100%', height: props.height }} />;
};

export default AmChartStatistics8;
