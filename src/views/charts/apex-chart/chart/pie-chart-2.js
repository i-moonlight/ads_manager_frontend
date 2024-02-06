const chartData = {
    height: 320,
    type: 'donut',
    options: {
        colors: ['#4099ff', '#0e9e4a', '#00bcd4', '#FFB64D', '#FF5370'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                inverseColors: true
            }
        },
        legend: {
            show: true,
            position: 'bottom'
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true
                        },
                        value: {
                            show: true
                        }
                    }
                }
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
    series: [44, 55, 41, 17, 15]
};
export default chartData;
