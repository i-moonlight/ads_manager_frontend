import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/pie';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartDevices = () => {
    useEffect(() => {
        AmCharts.makeChart('device-chart', {
            type: 'pie',
            theme: 'light',
            labelRadius: -35,
            labelText: '[[percents]]%',
            dataProvider: [
                {
                    device: 'Tablet',
                    percentage: 25.9,
                    color: '#a389d4'
                },
                {
                    device: 'Mobile',
                    percentage: 32.5,
                    color: '#04a9f5'
                },
                {
                    device: 'Desktop',
                    percentage: 41.6,
                    color: '#1de9b6'
                }
            ],
            valueField: 'percentage',
            titleField: 'device',
            colorField: 'color',
            balloon: {
                fixedPosition: true
            }
        });
    });

    return <div id="device-chart" className="device-chart" style={{ width: '250px', height: '250px' }} />;
};

export default AmChartDevices;
