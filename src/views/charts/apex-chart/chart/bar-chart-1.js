const chartData = {
    height: 350,
    type: 'bar',
    options: {
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#0e9e4a', '#4099ff', '#FF5370'],
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.25,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 0.7,
                stops: [50, 100]
            }
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return '$ ' + val + ' thousands';
                }
            }
        }
    },
    series: [
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63]
        },
        {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91]
        },
        {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52]
        }
    ]
};
export default chartData;
