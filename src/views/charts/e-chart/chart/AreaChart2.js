import React from 'react';
import ReactEcharts from 'echarts-for-react';

const AreaChart2 = () => {
    const getOption = () => {
        return {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['abc', 'def', 'pqr']
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    splitLine: {
                        show: false
                    },
                    boundaryGap: false,
                    data: ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday']
                }
            ],
            color: ['rgba(163, 137, 212, 0.5)', 'rgba(4, 169, 246, 0.5)', 'rgba(28, 233, 181, 0.5)'],
            yAxis: [
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: 'abc',
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'macarons'
                            }
                        }
                    },
                    data: [10, 12, 21, 54, 260, 830, 710]
                },
                {
                    name: 'def',
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'macarons'
                            }
                        }
                    },
                    data: [30, 182, 434, 791, 390, 30, 10]
                },
                {
                    name: 'pqr',
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'macarons'
                            }
                        }
                    },
                    data: [1320, 1132, 601, 234, 120, 90, 20]
                }
            ]
        };
    };

    return <ReactEcharts option={getOption()} />;
};

export default AreaChart2;
