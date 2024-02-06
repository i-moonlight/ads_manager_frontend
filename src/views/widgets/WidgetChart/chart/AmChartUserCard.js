import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/pie';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartUserCard = () => {
    useEffect(() => {
        AmCharts.makeChart('chart-percent1', {
            type: 'pie',
            theme: 'light',
            dataProvider: [
                {
                    title: 'Main Wallet',
                    value: 33.33,
                    color: '#1de9b6'
                },
                {
                    title: 'Travel',
                    value: 33.33,
                    color: '#a389d4'
                },
                {
                    title: 'Food & Drink',
                    value: 33.33,
                    color: '#04a9f5'
                }
            ],
            titleField: 'title',
            valueField: 'value',
            colorField: 'color',
            labelRadius: 5,
            radius: '42%',
            innerRadius: '89%',
            labelText: '',
            balloon: {
                fixedPosition: true
            }
        });
    });

    return <div id="chart-percent1" className="chart-percent1" style={{ width: '100%', height: '200px' }} />;
};

export default AmChartUserCard;
