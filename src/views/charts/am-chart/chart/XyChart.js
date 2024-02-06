import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

const XyChart = () => {
    useEffect(() => {
        let chart = am4core.create('am-xy-1', am4charts.XYChart);
        chart.data = [
            {
                country: 'Lithuania',
                research: 501.9,
                marketing: 250,
                sales: 199
            },
            {
                country: 'Czech Republic',
                research: 301.9,
                marketing: 222,
                sales: 251
            },
            {
                country: 'Ireland',
                research: 201.1,
                marketing: 170,
                sales: 199
            },
            {
                country: 'Germany',
                research: 165.8,
                marketing: 122,
                sales: 90
            },
            {
                country: 'Australia',
                research: 139.9,
                marketing: 99,
                sales: 252
            },
            {
                country: 'Austria',
                research: 128.3,
                marketing: 85,
                sales: 84
            },
            {
                country: 'UK',
                research: 99,
                marketing: 93,
                sales: 142
            },
            {
                country: 'Belgium',
                research: 60,
                marketing: 50,
                sales: 55
            },
            {
                country: 'The Netherlands',
                research: 50,
                marketing: 42,
                sales: 25
            }
        ];

        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = 'country';
        categoryAxis.title.text = 'Local country offices';
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = 'Expenditure (M)';

        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = 'research';
        series.dataFields.categoryX = 'country';
        series.name = 'Research';
        series.tooltipText = '{name}: [bold]{valueY}[/]';
        series.stacked = true;

        let series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.dataFields.valueY = 'marketing';
        series2.dataFields.categoryX = 'country';
        series2.name = 'Marketing';
        series2.tooltipText = '{name}: [bold]{valueY}[/]';
        series2.stacked = true;

        let series3 = chart.series.push(new am4charts.ColumnSeries());
        series3.dataFields.valueY = 'sales';
        series3.dataFields.categoryX = 'country';
        series3.name = 'Sales';
        series3.tooltipText = '{name}: [bold]{valueY}[/]';

        chart.cursor = new am4charts.XYCursor();
    });

    return <div id="am-xy-1" style={{ width: '100%', height: '500px' }} />;
};

export default XyChart;
