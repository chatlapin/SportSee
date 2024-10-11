import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import useFetch from '@/services/useFetch';

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

export default function Example({ currentId }) {
    const url = `http://localhost:3000/user/${currentId}/performance/`; // replace with your API endpoint
    const { data, loading, error } = useFetch(url);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="tinyRadialChart">
            <ResponsiveContainer width={300} height={100}>
                <RadialBarChart width={300} height={100} cx="50%" cy="50%" innerRadius="30%" outerRadius="80%" barSize={10} data={data}>
                    <RadialBar
                        minAngle={15}
                        label={{ position: 'insideStart', fill: '#fff' }}
                        background
                        clockWise
                        dataKey="uv"
                    />
                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}