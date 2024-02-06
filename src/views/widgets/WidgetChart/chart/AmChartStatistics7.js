import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/pie';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartStatistics7 = () => {
    useEffect(() => {
        AmCharts.makeChart('chart-statistics', {
            type: 'pie',
            theme: 'light',
            dataProvider: [
                {
                    title: 'page Views',
                    value: 24.7,
                    color: '#1de9b6'
                },
                {
                    title: 'page Clicks',
                    value: 36.3,
                    color: '#a389d4'
                },
                {
                    title: 'page Likes',
                    value: 23.5,
                    color: '#04a9f5'
                },
                {
                    title: 'page',
                    value: 15.5,
                    color: '#ecedef'
                }
            ],
            titleField: 'title',
            valueField: 'value',
            colorField: 'color',
            labelRadius: 5,
            radius: '42%',
            innerRadius: '90%',
            labelText: '',
            balloon: {
                fixedPosition: true
            }
        });
    });

    return <div id="chart-statistics" className="chart-statistics" style={{ width: '100%', height: '250px' }} />;
};

export default AmChartStatistics7;
