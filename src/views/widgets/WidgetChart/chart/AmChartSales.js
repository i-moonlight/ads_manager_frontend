import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/pie';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartSales = () => {
    useEffect(() => {
        AmCharts.makeChart('chart-sale', {
            type: 'pie',
            theme: 'light',
            dataProvider: [
                {
                    title: 'Max',
                    value: 500,
                    color: '#1de9b6'
                },
                {
                    title: 'Min',
                    value: 237,
                    color: '#fff'
                }
            ],
            titleField: 'title',
            valueField: 'value',
            colorField: 'color',
            labelRadius: 5,
            radius: '42%',
            innerRadius: '91%',
            labelText: '',
            balloon: {
                fixedPosition: true
            }
        });
    });

    return <div id="chart-sale" className="chart-sale" style={{ width: '220px', height: '220px' }} />;
};

export default AmChartSales;
