import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    title: {
        text: 'Combination chart'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Kiwi']
    },
    colors: ['#1de9b6', '#1dc4e9', '#A389D4'],
    labels: {
        items: [
            {
                html: 'Total fruit consumption',
                style: {
                    left: '50px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }
        ]
    },
    series: [
        {
            type: 'column',
            name: 'Jane',
            data: [3, 2, 1, 3, 4]
        },
        {
            type: 'column',
            name: 'John',
            data: [2, 3, 5, 7, 6]
        },
        {
            type: 'column',
            name: 'Joe',
            data: [4, 3, 3, 9, 0]
        },
        {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33],
            color: '#f44236',
            lineColor: '#f44236',
            marker: {
                lineWidth: 2,
                lineColor: '#f44236',
                fillColor: '#fff'
            }
        },
        {
            type: 'pie',
            name: 'Total consumption',
            data: [
                {
                    name: 'Jane',
                    y: 13,
                    color: '#1de9b6'
                },
                {
                    name: 'John',
                    y: 23,
                    color: '#1dc4e9'
                },
                {
                    name: 'Joe',
                    y: 19,
                    color: '#A389D4'
                }
            ],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }
    ]
};

const ComboChart = () => {
    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ComboChart;
