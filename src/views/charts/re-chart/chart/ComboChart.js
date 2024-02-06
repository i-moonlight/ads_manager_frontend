import React from 'react';
import { ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        name: '2008',
        'Bar 1': 50,
        'Bar 2': 40,
        'Bar 3': 35,
        pv: 80,
        amt: 140
    },
    {
        name: '2009',
        'Bar 1': 75,
        'Bar 2': 65,
        'Bar 3': 60,
        pv: 96,
        amt: 150
    },
    {
        name: '2010',
        'Bar 1': 50,
        'Bar 2': 40,
        'Bar 3': 55,
        pv: 109,
        amt: 98
    },
    {
        name: '2011',
        'Bar 1': 75,
        'Bar 2': 65,
        'Bar 3': 85,
        pv: 120,
        amt: 122
    },
    {
        name: '2012',
        'Bar 1': 100,
        'Bar 2': 90,
        'Bar 3': 40,
        pv: 68,
        amt: 170
    },
    {
        name: '2013',
        'Bar 1': 80,
        'Bar 2': 85,
        'Bar 3': 45,
        pv: 90,
        amt: 85
    }
];

const ComboChart = () => {
    return (
        <React.Fragment>
            <ResponsiveContainer width="100%" height={300}>
                <ComposedChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20
                    }}
                >
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
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="amt" fillOpacity={0.2} fill="url(#colorBar1)" stroke="none" />
                    <Bar dataKey="Bar 1" fill="#1de9b6" />
                    <Bar dataKey="Bar 2" fill="#A389D4" />
                    <Bar dataKey="Bar 3" fill="#04a9f5" />
                    <Line dataKey="pv" stroke="#1dc4e9" strokeWidth={5} />
                </ComposedChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
};

export default ComboChart;
