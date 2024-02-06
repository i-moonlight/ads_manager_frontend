import React, { useEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_continentsLow from '@amcharts/amcharts4-geodata/continentsLow';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

const AmChartWorldUser = (props) => {
    useEffect(() => {
        let chart = am4core.create('world-low', am4maps.MapChart);

        chart.geodata = am4geodata_continentsLow;

        chart.projection = new am4maps.projections.Miller();

        let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.exclude = ['antarctica'];
        polygonSeries.useGeodata = true;

        let pieSeries = chart.series.push(new am4maps.MapImageSeries());
        let pieTemplate = pieSeries.mapImages.template;
        pieTemplate.propertyFields.latitude = 'latitude';
        pieTemplate.propertyFields.longitude = 'longitude';

        let pieChartTemplate = pieTemplate.createChild(am4charts.PieChart);
        pieChartTemplate.adapter.add('data', function (data, target) {
            if (target.dataItem) {
                return target.dataItem.dataContext.pieData;
            } else {
                return [];
            }
        });
        pieChartTemplate.propertyFields.width = 'width';
        pieChartTemplate.propertyFields.height = 'height';
        pieChartTemplate.horizontalCenter = 'middle';
        pieChartTemplate.verticalCenter = 'middle';

        let pieTitle = pieChartTemplate.titles.create();
        pieTitle.text = '{title}';

        let pieSeriesTemplate = pieChartTemplate.series.push(new am4charts.PieSeries());
        pieSeriesTemplate.dataFields.category = 'category';
        pieSeriesTemplate.dataFields.value = 'value';
        pieSeriesTemplate.labels.template.disabled = true;
        pieSeriesTemplate.ticks.template.disabled = true;

        pieSeries.data = [
            {
                title: 'North America',
                latitude: 39.563353,
                longitude: -99.316406,
                width: 100,
                height: 100,
                pieData: [
                    {
                        category: 'Category #1',
                        value: 1200,
                        fill: 'red'
                    },
                    {
                        category: 'Category #2',
                        value: 500
                    },
                    {
                        category: 'Category #3',
                        value: 765
                    },
                    {
                        category: 'Category #4',
                        value: 260
                    }
                ]
            },
            {
                title: 'Europe',
                latitude: 50.896104,
                longitude: 19.160156,
                width: 50,
                height: 50,
                pieData: [
                    {
                        category: 'Category #1',
                        value: 200
                    },
                    {
                        category: 'Category #2',
                        value: 600
                    },
                    {
                        category: 'Category #3',
                        value: 350
                    }
                ]
            },
            {
                title: 'Asia',
                latitude: 47.212106,
                longitude: 103.183594,
                width: 80,
                height: 80,
                pieData: [
                    {
                        category: 'Category #1',
                        value: 352
                    },
                    {
                        category: 'Category #2',
                        value: 266
                    },
                    {
                        category: 'Category #3',
                        value: 512
                    },
                    {
                        category: 'Category #4',
                        value: 199
                    }
                ]
            },
            {
                title: 'Africa',
                latitude: 11.081385,
                longitude: 21.621094,
                width: 50,
                height: 50,
                pieData: [
                    {
                        category: 'Category #1',
                        value: 200
                    },
                    {
                        category: 'Category #2',
                        value: 300
                    },
                    {
                        category: 'Category #3',
                        value: 599
                    },
                    {
                        category: 'Category #4',
                        value: 512
                    }
                ]
            }
        ];
    });

    return <div id="world-low" style={{ width: '100%', height: props.height }} />;
};

export default AmChartWorldUser;
