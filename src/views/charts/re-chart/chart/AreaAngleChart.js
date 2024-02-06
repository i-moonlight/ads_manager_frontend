import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '2007',
        'Bar 1': 0,
        'Bar 2': 0,
        'Bar 3': 35
    },
    {
        name: '2008',
        'Bar 1': 130,
        'Bar 2': 100,
        'Bar 3': 35
    },
    {
        name: '2009',
        'Bar 1': 80,
        'Bar 2': 60,
        'Bar 3': 60
    },
    {
        name: '2010',
        'Bar 1': 70,
        'Bar 2': 200,
        'Bar 3': 55
    },
    {
        name: '2011',
        'Bar 1': 220,
        'Bar 2': 150,
        'Bar 3': 85
    },
    {
        name: '2012',
        'Bar 1': 105,
        'Bar 2': 90,
        'Bar 3': 40
    },
    {
        name: '2013',
        'Bar 1': 250,
        'Bar 2': 150,
        'Bar 3': 40
    }
];

const AreaAngleChart = () => {
    return (
        <React.Fragment>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorBar1" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="1%" stopColor="#1de9b6" stopOpacity={1} />
                            <stop offset="99%" stopColor="#1dc4e9" stopOpacity={1} />
                        </linearGradient>
                        <linearGradient id="colorBar2" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="1%" stopColor="#899FD4" stopOpacity={1} />
                            <stop offset="99%" stopColor="#A389D4" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 'dataMax + 50']} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area dataKey="Bar 1" stroke="none" fillOpacity={0.5} fill="url(#colorBar1)" />
                    <Area dataKey="Bar 2" stroke="none" fillOpacity={0.5} fill="url(#colorBar2)" />
                </AreaChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
};

export default AreaAngleChart;
