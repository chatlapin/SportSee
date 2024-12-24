import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import useFetch from '@/hooks/useFetch';

/**
 * Formats the sessions data for the chart
 * @param {Object} data - Raw sessions data from the API
 * @returns {Array<Object>} Formatted data with day names and session lengths
 */
const formatSessionsData = (data) => {
  return data.data.sessions.map(session => ({
    name: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][session.day - 1],
    value: session.sessionLength
  }));
};

/**
 * SessionsChart component that displays user's average session durations
 * @param {Object} props - Component properties
 * @param {number} props.userId - The ID of the user whose sessions to display
 * @returns {JSX.Element} A line chart showing average session durations by day
 */
const SessionsChart = ({ userId }) => {
  const { data, isLoading } = useFetch(userId, 'average-sessions');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-red-500 p-4 rounded-lg h-[260px]">
      <h3 className="mb-4 text-sm text-white/70">Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={formatSessionsData(data)}>
          <XAxis
            dataKey="name"
            stroke="white"
            opacity={0.5}
            tickLine={false}
            axisLine={false}
          />
          <YAxis hide={true} />
          <Tooltip
            contentStyle={{ backgroundColor: 'white' }}
            itemStyle={{ color: 'black' }}
            formatter={(value) => [`${value} min`]}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="white"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: 'white' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

SessionsChart.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default SessionsChart;