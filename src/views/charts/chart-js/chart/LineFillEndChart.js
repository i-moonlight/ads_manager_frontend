import React from 'react';
import { Line } from 'react-chartjs-2';

const LineFillEndChart = () => {
    const data = (canvas) => {
        let bar = canvas.getContext('2d');
        let theme_g2 = bar.createLinearGradient(0, 0, 500, 0);
        theme_g2.addColorStop(0, '#2ed8b6');
        theme_g2.addColorStop(1, '#59e0c5');

        return {
            labels: [0, 1, 2, 3, 4, 5, 6],
            datasets: [
                {
                    label: 'D1',
                    data: [85, 55, 70, 50, 75, 45, 60],
                    borderWidth: 1,
                    borderColor: theme_g2,
                    backgroundColor: theme_g2,
                    hoverborderColor: theme_g2,
                    hoverBackgroundColor: theme_g2,
                    fill: 'end'
                }
            ]
        };
    };

    return (
        <Line
            data={data}
            responsive={true}
            height={300}
            options={{
                barValueSpacing: 20,
                maintainAspectRatio: false
            }}
        />
    );
};

export default LineFillEndChart;
