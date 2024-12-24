import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import useFetch from '@/hooks/useFetch';
import PropTypes from 'prop-types';

/**
 * Formats the activity data for the chart
 * @param {Object} data - Raw activity data from the API
 * @returns {Array<Object>} Formatted data with day numbers and activity values
 */
const formatActivityData = (data) => {
  return data.data.sessions.map((session, index) => ({
    name: (index + 1).toString(),
    kg: session.kilogram,
    cal: session.calories,
  }));
};

/**
 * ActivityChart component that displays user's daily activity
 * @param {Object} props - Component properties
 * @param {number} props.userId - The ID of the user whose activity to display
 * @returns {JSX.Element} A bar chart showing daily weight and calories burned
 */
const ActivityChart = ({ userId }) => {
  const { data, isLoading } = useFetch(userId, 'activity');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#FBFBFB] p-6 rounded-lg h-full">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-[15px] font-medium text-[#20253A]">Activité quotidienne</h3>
        <div className="flex gap-8">
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-[#282D30]"></div>
            <span className="text-[14px] text-[#74798C] font-medium">Poids (kg)</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-[#E60000]"></div>
            <span className="text-[14px] text-[#74798C] font-medium">Calories brûlées (kCal)</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={formatActivityData(data)} barGap={8} barCategoryGap="35%">
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DEDEDE" />
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={{ fill: '#9B9EAC', fontSize: 14 }}
            dy={15}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#9B9EAC', fontSize: 14 }}
            dx={15}
          />
          <YAxis yAxisId="left" orientation="left" hide={true} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#E60000',
              border: 'none',
              color: 'white',
              padding: '4px 8px',
            }}
            itemStyle={{ color: 'white', fontSize: 12, padding: 0 }}
            labelStyle={{ display: 'none' }}
          />
          <Bar
            yAxisId="right"
            dataKey="kg"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="left"
            dataKey="cal"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

ActivityChart.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default ActivityChart;