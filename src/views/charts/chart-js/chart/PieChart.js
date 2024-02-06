import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
    const data = (canvas) => {
        let bar = canvas.getContext('2d');
        let theme_g1 = bar.createLinearGradient(0, 0, 500, 0);
        theme_g1.addColorStop(0, '#4099ff');
        theme_g1.addColorStop(1, '#73b4ff');
        let theme_g2 = bar.createLinearGradient(0, 0, 500, 0);
        theme_g2.addColorStop(0, '#2ed8b6');
        theme_g2.addColorStop(1, '#59e0c5');
        let theme_g3 = bar.createLinearGradient(0, 0, 500, 0);
        theme_g3.addColorStop(0, '#FFB64D');
        theme_g3.addColorStop(1, '#ffcb80');

        return {
            labels: ['Data 1', 'Data 2', 'Data 3'],
            datasets: [
                {
                    data: [30, 30, 40],
                    backgroundColor: [theme_g1, theme_g2, theme_g3],
                    hoverBackgroundColor: [theme_g1, theme_g2, theme_g3]
                }
            ]
        };
    };

    return (
        <Pie
            data={data}
            responsive={true}
            height={300}
            options={{
                maintainAspectRatio: false
            }}
        />
    );
};

export default PieChart;
