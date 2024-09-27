import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
/*

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];*/

/* const data = [
          {
              day: '2020-07-01',
              kilogram: 80,
              calories: 240
          },
          {
              day: '2020-07-02',
              kilogram: 80,
              calories: 220
          },
          {
              day: '2020-07-03',
              kilogram: 81,
              calories: 280
          },
          {
              day: '2020-07-04',
              kilogram: 81,
              calories: 290
          },
          {
              day: '2020-07-05',
              kilogram: 80,
              calories: 160
          },
          {
              day: '2020-07-06',
              kilogram: 78,
              calories: 162
          },
          {
              day: '2020-07-07',
              kilogram: 76,
              calories: 390
          }
      ]
*/
export default function Barchart(props) {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/user/${props.currentId}/activity/`)
        const responseData = await response.json()
        setData(responseData.data.sessions)
      }
      catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='BarChart'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" hide={true} />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" hide={true} />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="kilogram" fill="#282D30" barSize={10} radius={[5, 5, 0, 0]} />
          <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={10} radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

