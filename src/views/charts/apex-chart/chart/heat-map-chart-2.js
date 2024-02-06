const chartData = {
    height: 350,
    type: 'heatmap',
    options: {
        stroke: {
            width: 0
        },
        plotOptions: {
            heatmap: {
                radius: 30,
                enableShades: false,
                colorScale: {
                    ranges: [
                        {
                            from: 0,
                            to: 50,
                            color: '#FFB64D'
                        },
                        {
                            from: 51,
                            to: 100,
                            color: '#FF5370'
                        }
                    ]
                }
            }
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#fff']
            }
        },
        colors: ['#4099ff', '#00bcd4', '#0e9e4a', '#FFB64D', '#FF5370'],
        xaxis: {
            type: 'category'
        },
        title: {
            text: 'Rounded (Range without Shades)'
        }
    },
    series: [
        {
            name: 'Metric1',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric2',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric3',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric4',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric5',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric6',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric7',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        }
    ]
};
export default chartData;

function generateDatasehrat(count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        series.push({
            x: (i + 1).toString(),
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
        i++;
    }
    return series;
}
