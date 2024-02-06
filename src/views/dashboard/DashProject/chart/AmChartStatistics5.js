import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/pie';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartStatistics5 = (props) => {
    useEffect(() => {
        AmCharts.makeChart('chart-percent', {
            type: 'pie',
            theme: 'light',
            dataProvider: [
                {
                    title: 'page done',
                    value: 23,
                    color: '#1de9b6'
                },
                {
                    title: 'page progress',
                    value: 14,
                    color: '#f4c22b'
                },
                {
                    title: 'page outstanding',
                    value: 35,
                    color: '#a389d4'
                },
                {
                    title: 'page started',
                    value: 28,
                    color: '#04a9f5'
                }
            ],
            titleField: 'title',
            valueField: 'value',
            colorField: 'color',
            labelRadius: 5,
            radius: '42%',
            innerRadius: '91%',
            labelText: '',
            balloon: {
                fixedPosition: true
            }
        });
    });

    return <div id="chart-percent" className="chart-percent" style={{ width: '100%', height: props.height }} />;
};

export default AmChartStatistics5;
