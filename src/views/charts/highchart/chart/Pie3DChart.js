import React from 'react';
import Highcharts from 'highcharts';
import highcharts3d from 'highcharts/highcharts-3d';
import HighchartsReact from 'highcharts-react-official';
highcharts3d(Highcharts);

const options = {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    colors: ['#1de9b6', '#1dc4e9', '#A389D4', '#899FD4', '#f44236', '#f4c22b'],
    title: {
        text: 'Contents of Highsoft weekly fruit delivery'
    },
    subtitle: {
        text: '3D in Highcharts'
    },
    plotOptions: {
        pie: {
            depth: 45
        }
    },
    series: [
        {
            name: 'Delivered amount',
            data: [
                ['Bananas', 8],
                ['Kiwi', 3],
                ['Mixed nuts', 2],
                ['Oranges', 6],
                ['Apples', 3],
                ['Pears', 4]
            ]
        }
    ]
};

const Pie3DChart = () => {
    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Pie3DChart;
