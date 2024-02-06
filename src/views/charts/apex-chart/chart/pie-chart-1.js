const chartData = {
    height: 320,
    type: 'pie',
    options: {
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        colors: ['#4099ff', '#0e9e4a', '#00bcd4', '#FFB64D', '#FF5370'],
        legend: {
            show: true,
            position: 'bottom'
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                inverseColors: true
            }
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: false
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        ]
    },
    series: [44, 55, 13, 43, 22]
};
export default chartData;
