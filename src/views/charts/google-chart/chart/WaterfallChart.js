import React from 'react';
import Chart from 'react-google-charts';

const WaterfallChart = () => {
    return (
        <Chart
            width="100%"
            height="300px"
            chartType="CandlestickChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['day', 'a', 'b', 'c', 'd'],
                ['Mon', 20, 28, 38, 45],
                ['Tue', 31, 38, 55, 66],
                ['Wed', 50, 55, 77, 80],
                ['Thu', 77, 77, 66, 50],
                ['Fri', 68, 66, 22, 15]
            ]}
            options={{
                legend: 'none',
                bar: { groupWidth: '100%' },
                candlestick: {
                    fallingColor: {
                        strokeWidth: 0,
                        fill: '#04a9f5'
                    },
                    risingColor: {
                        strokeWidth: 0,
                        fill: '#1de9b6'
                    }
                }
            }}
            rootProps={{ 'data-testid': '6' }}
        />
    );
};

export default WaterfallChart;
