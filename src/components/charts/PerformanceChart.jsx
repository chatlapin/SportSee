import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import useFetch from '@/hooks/useFetch';

/**
 * Formats the performance data for the radar chart
 * @param {Object} data - Raw performance data from the API
 * @returns {Array<Object>} Formatted data with performance kinds and values
 */
const formatPerformanceData = (data) => {
  return data.data.data.map(item => ({
    subject: data.data.kind[item.kind],
    value: item.value
  }));
};

/**
 * PerformanceChart component that displays user performance metrics in a radar chart
 * @param {Object} props - Component props
 * @param {number} props.userId - The ID of the user to fetch performance data for
 * @returns {JSX.Element} A radar chart showing different performance metrics
 */
const PerformanceChart = ({ userId }) => {
  const { data, isLoading } = useFetch(userId, 'performance');
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#282D30] p-4 rounded-lg h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={formatPerformanceData(data)} cx="50%" cy="50%" outerRadius="65%">
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            stroke="white"
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          <Radar
            name="Performance"
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

PerformanceChart.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default PerformanceChart;