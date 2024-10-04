import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import useFetch from './useFetch';

const Performance = ({ currentId }) => {
  const { data, loading, error } = useFetch(`http://localhost:3000/user/${currentId}/performance/`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!data || !data.data) return <div>No data available</div>;

  const formattedData = data.data.data.map((item) => ({
    kind: data.data.kind[item.kind],
    value: item.value,
  }));

  return (
    <div style={{ width: '200px', height: '200px', backgroundColor: 'black', padding: '20px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formattedData}>
          <PolarGrid stroke='white' />
          <PolarAngleAxis dataKey="kind" tick={{ fontSize: 12, fill: 'white', fontFamily: 'ans-serif' }} tickLine={false} stroke="white" dy={4} />
          <Radar name="Kind" dataKey="value" fill="#ff0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;