import React from 'react';
import ReactEcharts from 'echarts-for-react';

const PieBasicColumnChart = () => {
    const getOption = () => {
        return {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['HTML', 'SCSS', 'JS', 'Images', 'Icons']
            },
            color: ['#f4c22b', '#A389D4', '#3ebfea', '#04a9f5', '#1de9b6'],
            calculable: true,
            series: [
                {
                    name: 'Webpage',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {
                            value: 335,
                            name: 'HTML'
                        },
                        {
                            value: 310,
                            name: 'SCSS'
                        },
                        {
                            value: 234,
                            name: 'JS'
                        },
                        {
                            value: 135,
                            name: 'Images'
                        },
                        {
                            value: 1548,
                            name: 'Icons'
                        }
                    ]
                }
            ]
        };
    };

    return <ReactEcharts option={getOption()} />;
};

export default PieBasicColumnChart;
