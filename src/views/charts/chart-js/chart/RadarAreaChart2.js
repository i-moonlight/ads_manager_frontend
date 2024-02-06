import React from 'react';
import { Radar } from 'react-chartjs-2';

const RadarAreaChart2 = () => {
    const data = (canvas) => {
        let bar = canvas.getContext('2d');
        let theme_g1 = bar.createLinearGradient(0, 0, 500, 0);
        theme_g1.addColorStop(0, '#4099ff');
        theme_g1.addColorStop(1, '#73b4ff');
        let theme_g2 = bar.createLinearGradient(0, 0, 500, 0);
        theme_g2.addColorStop(0, '#FF5370');
        theme_g2.addColorStop(1, '#ff869a');
        let theme_g3 = bar.createLinearGradient(0, 0, 500, 0);
        theme_g3.addColorStop(0, '#FFB64D');
        theme_g3.addColorStop(1, '#ffcb80');

        return {
            labels: [0, 1, 2, 3, 4, 5, 6],
            datasets: [
                {
                    label: 'D1',
                    data: [60, 60, 45, 80, 60, 80, 45],
                    fill: true,
                    borderWidth: 2,
                    borderColor: 'transparent',
                    backgroundColor: theme_g2,
                    hoverborderColor: theme_g2,
                    hoverBackgroundColor: theme_g2
                },
                {
                    label: 'D2',
                    data: [40, 80, 40, 65, 60, 50, 95],
                    fill: true,
                    cubicInterpolationMode: 'monotone',
                    borderWidth: 0,
                    borderColor: 'transparent',
                    backgroundColor: theme_g1,
                    hoverborderColor: theme_g1,
                    hoverBackgroundColor: theme_g1
                },
                {
                    label: 'D3',
                    data: [20, 40, 80, 60, 85, 60, 20],
                    fill: true,
                    borderWidth: 2,
                    borderColor: 'transparent',
                    backgroundColor: theme_g3,
                    hoverborderColor: theme_g3,
                    hoverBackgroundColor: theme_g3
                }
            ]
        };
    };

    return (
        <Radar
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

export default RadarAreaChart2;
