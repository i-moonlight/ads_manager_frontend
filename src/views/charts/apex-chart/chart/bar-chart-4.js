const chartData = {
    height: 350,
    type: 'bar',
    options: {
        chart: {
            stacked: true,
            stackType: '100%'
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        colors: ['#4099ff', '#00bcd4', '#0e9e4a', '#FFB64D', '#FF5370'],
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        title: {
            text: '100% Stacked Bar'
        },
        xaxis: {
            categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
        },

        tooltip: {
            y: {
                formatter: function (val) {
                    return val + 'K';
                }
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'horizontal',
                shadeIntensity: 0.25,
                inverseColors: true,
                opacityFrom: 0.9,
                opacityTo: 1,
                stops: [0, 50]
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
        }
    },
    series: [
        {
            name: 'Marine Sprite',
            data: [44, 55, 41, 37, 22, 43, 21]
        },
        {
            name: 'Striking Calf',
            data: [53, 32, 33, 52, 13, 43, 32]
        },
        {
            name: 'Tank Picture',
            data: [12, 17, 11, 9, 15, 11, 20]
        },
        {
            name: 'Bucket Slope',
            data: [9, 7, 5, 8, 6, 9, 4]
        },
        {
            name: 'Reborn Kid',
            data: [25, 12, 19, 32, 25, 24, 10]
        }
    ]
};
export default chartData;
