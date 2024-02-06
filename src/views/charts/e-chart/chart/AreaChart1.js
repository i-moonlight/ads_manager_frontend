import React from 'react';
import ReactEcharts from 'echarts-for-react';

const AreaChart1 = () => {
    const getOption = () => {
        return {
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            color: '#04a9f5',
            series: [
                {
                    data: [1, 5, 3, 6, 4, 8, 10],
                    type: 'line'
                }
            ]
        };
    };

    return <ReactEcharts option={getOption()} />;
};

export default AreaChart1;
