import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/**
 * ScoreChart component that displays the user's score as a circular progress chart
 * @param {Object} props - Component props
 * @param {number} props.score - The user's score value between 0 and 1
 * @returns {JSX.Element} A pie chart showing the score percentage
 */
const ScoreChart = ({ score }) => {
  //const score = USER_MAIN_DATA[0].todayScore || 0;
  const data = [
    { value: score },
    { value: 1 - score }
  ];

  return (
    <div className="bg-[#FBFBFB] p-4 rounded-lg h-[260px] relative">
      <h3 className="text-sm font-semibold">Score</h3>
      <div className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-2xl font-bold">{score * 100}%</p>
        <p className="text-sm text-gray-500">de votre objectif</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
            strokeLinecap="round"
          >
            <Cell fill="#FF0000" />
            <Cell fill="#FBFBFB" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

ScoreChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreChart;