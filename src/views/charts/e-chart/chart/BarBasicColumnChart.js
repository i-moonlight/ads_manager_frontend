import React from 'react';
import ReactEcharts from 'echarts-for-react';

const BarBasicColumnChart = () => {
    const getOption = () => {
        return {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Data1', 'Data2']
            },
            calculable: true,
            color: ['rgba(163, 137, 212, 1)', 'rgba(28, 233, 181, 1)'],
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                }
            ],
            series: [
                {
                    name: 'Data1',
                    type: 'line',
                    smooth: true,
                    data: [11, 11, 15, 13, 12, 13, 10],
                    markPoint: {
                        data: [
                            {
                                type: 'max',
                                name: 'Maximum'
                            },
                            {
                                type: 'min',
                                name: 'Minimum'
                            }
                        ]
                    },
                    markLine: {
                        data: [
                            {
                                type: 'average',
                                name: '100'
                            }
                        ]
                    }
                },
                {
                    name: 'Data2',
                    type: 'line',
                    smooth: true,
                    data: [1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [
                            {
                                name: 'Week Minimum',
                                value: -2,
                                xAxis: 1,
                                yAxis: -1.5
                            }
                        ]
                    },
                    markLine: {
                        data: [
                            {
                                type: 'average',
                                name: '100'
                            }
                        ]
                    }
                }
            ]
        };
    };

    return <ReactEcharts option={getOption()} />;
};

export default BarBasicColumnChart;
