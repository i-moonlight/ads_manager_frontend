import React, { useEffect } from 'react';
import 'amcharts3/amcharts/amcharts';
import 'amcharts3/amcharts/pie';
import 'amcharts3/amcharts/themes/light';
import AmCharts from '@amcharts/amcharts3-react';

const AmChartActivity = () => {
    useEffect(() => {
        AmCharts.makeChart('chart-activity', {
            type: 'pie',
            theme: 'light',
            dataProvider: [
                {
                    title: 'Max',
                    value: 550,
                    color: '#1de9b6'
                },
                {
                    title: 'Min',
                    value: 237,
                    color: '#ecedef'
                }
            ],
            titleField: 'title',
            valueField: 'value',
            colorField: 'color',
            labelRadius: 5,
            radius: '42%',
            innerRadius: '95%',
            labelText: '',
            balloon: {
                fixedPosition: true
            }
        });
    });

    return <div id="chart-activity" className="chart-activity" style={{ width: '100%', height: '230px' }} />;
};

export default AmChartActivity;
