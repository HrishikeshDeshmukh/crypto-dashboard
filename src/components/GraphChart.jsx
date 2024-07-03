import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis,
    CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const MarketData = [
    { name: "Jan", Buy: 4000, Sell: 2400 },
    { name: "Feb", Buy: 3000, Sell: 2210 },
    { name: "Mar", Buy: 2000, Sell: 2290 },
    { name: "Apr", Buy: 2700, Sell: 2000 },
    { name: "May", Buy: 1890, Sell: 2180 },
    { name: "Jun", Buy: 4000, Sell: 2400 },
    { name: "Jul", Buy: 2300, Sell: 2500 }
];

const GraphChart = () => {
    return (
        <ResponsiveContainer width="100%" height={250} style={{margin:10}}>
            <AreaChart data={MarketData}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="5 5" />
                <Tooltip />
                <Legend />
                <Area
                    type="monotone"
                    dataKey="Buy"
                    stroke='#2563eb'
                    fill='#3b82f6'
                    stackId="1"
                />
                <Area
                    type="monotone"
                    dataKey="Sell"
                    stroke='#7c3aed'
                    fill='#8b5cf6'
                    stackId="1"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default GraphChart;
