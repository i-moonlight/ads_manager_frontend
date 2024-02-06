import React from 'react';
import Chart from 'react-google-charts';

const AreaBasicChart = () => {
    return (
        <Chart
            width="100%"
            height="300px"
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Year', 'Sales', 'Expenses'],
                ['2013', 1000, 400],
                ['2014', 1170, 460],
                ['2015', 660, 1120],
                ['2016', 1030, 540]
            ]}
            options={{
                title: 'Company Performance',
                hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
                vAxis: { minValue: 0 },
                colors: ['#1de9b6', '#1dc4e9']
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    );
};

export default AreaBasicChart;
