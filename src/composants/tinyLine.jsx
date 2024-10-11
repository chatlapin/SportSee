import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useFetch from '@/services/useFetch';

export default function Activity({ currentId }) {
  const url = `http://localhost:3000/user/${currentId}/average-sessions`; // replace with your API endpoint
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data.data.sessions)
  return (
    <div className='tinyLineChart'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data.data.sessions}>
          <Line dot={false} type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} />
          <XAxis dataKey="day" tick={{ fontSize: 12, fill: 'white' }}
            tickLine={false}
            axisLine={false}
            opacity={0.6}
            interval={0} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
