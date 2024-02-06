import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    colors: ['#1de9b6', '#1dc4e9', '#A389D4', '#899FD4', '#f44236', '#f4c22b'],
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [
        {
            name: 'Brands',
            colorByPoint: true,
            size: '90%',
            innerSize: '60%',
            data: [
                {
                    name: 'Chrome',
                    y: 61.41,
                    sliced: true,
                    selected: true
                },
                {
                    name: 'Internet Explorer',
                    y: 11.84
                },
                {
                    name: 'Firefox',
                    y: 10.85
                },
                {
                    name: 'Edge',
                    y: 4.67
                },
                {
                    name: 'Safari',
                    y: 4.18
                },
                {
                    name: 'Other',
                    y: 7.05
                }
            ]
        }
    ]
};

const PieDonutChart = () => {
    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieDonutChart;
