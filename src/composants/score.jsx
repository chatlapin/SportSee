
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import useFetch from '@/services/useFetch';

import PropTypes from 'prop-types';

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

export default function Score({ currentId }) {
    const url = `http://localhost:3000/user/${currentId}/`; // replace with your API endpoint
    const { data, loading, error } = useFetch(url);
    console.log("score")
    console.log(data)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const formattedData = [{ score: (data.data.score || data.data.todayScore) }, { score: 1, fill: 'transparent' }];

    return (
        <div style={{ width: '200px', height: '200px', backgroundColor: 'black', padding: '20px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="70%"
                    outerRadius="100%" barSize={10} data={formattedData}
                    startAngle={90} endAngle={450}
                >
                    <RadialBar
                        clockWise="false"
                        dataKey="score"
                        fill='#ff0000'
                        stroke-linejoin="round"
                        cornerRadius={10}
                    />
                    <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}

Score.propTypes = {
    currentId: PropTypes.number.isRequired,
};