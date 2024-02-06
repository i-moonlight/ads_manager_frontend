import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Sector, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Data 1', value: 55 },
    { name: 'Data 2', value: 10 },
    { name: 'Data 3', value: 15 },
    { name: 'Data 4', value: 20 }
];

const COLORS = ['#1de9b6', '#A389D4', '#04a9f5', '#1dc4e9'];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#000" style={{ fontSize: '16px', fontWeight: 600 }}>
                {payload.name}
                <tspan> val: {payload.value}</tspan>
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

const PieDonutChart = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = (data, index) => {
        setActiveIndex(index);
    };

    return (
        <React.Fragment>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        cx="auto"
                        cy="auto"
                        innerRadius={80}
                        outerRadius={120}
                        fill="#8884d8"
                        paddingAngle={2}
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                    >
                        <Tooltip />
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
};

export default PieDonutChart;
