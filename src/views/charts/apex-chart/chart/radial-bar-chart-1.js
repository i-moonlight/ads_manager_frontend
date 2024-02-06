const chartData = {
    height: 350,
    type: 'radialBar',
    options: {
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '60%'
                }
            }
        },
        colors: ['#4099ff'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'vertical',
                shadeIntensity: 0.5,
                gradientToColors: ['#0e9e4a'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        labels: ['Cricket']
    },
    series: [60]
};
export default chartData;
