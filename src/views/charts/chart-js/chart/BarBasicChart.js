import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarBasicChart = () => {
    const data = (canvas) => {
        let bar = canvas.getContext('2d');
        let theme_g1 = bar.createLinearGradient(0, 300, 0, 0);
        theme_g1.addColorStop(0, '#4099ff');
        theme_g1.addColorStop(1, '#73b4ff');
        let theme_g2 = bar.createLinearGradient(0, 300, 0, 0);
        theme_g2.addColorStop(0, '#2ed8b6');
        theme_g2.addColorStop(1, '#59e0c5');

        return {
            labels: [0, 1, 2, 3],
            datasets: [
                {
                    label: 'Data 1',
                    data: [25, 45, 74, 85],
                    borderColor: theme_g1,
                    backgroundColor: theme_g1,
                    hoverBorderColor: theme_g1,
                    hoverBackgroundColor: theme_g1
                },
                {
                    label: 'Data 2',
                    data: [30, 52, 65, 65],
                    borderColor: theme_g2,
                    backgroundColor: theme_g2,
                    hoverBorderColor: theme_g2,
                    hoverBackgroundColor: theme_g2
                }
            ]
        };
    };

    return (
        <Bar
            data={data}
            options={{
                barValueSpacing: 20
            }}
        />
    );
};

export default BarBasicChart;
