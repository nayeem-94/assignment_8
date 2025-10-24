import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const Graph = ({ data }) => {

    const chartData = data
        .map(item => ({
            name: item.count.name,
            count: item.count.count,
        }))
        .reverse();
    console.log(chartData);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#ff8811" radius={[8, 8, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>

    );
};

export default Graph;