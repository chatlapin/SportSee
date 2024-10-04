/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  PolarRadiusAxis,
} from 'recharts';
// eslint-disable-next-line no-unused-vars
//import { UserPerformance } from '../services/models/UserPerformance'; // give JSDoc access to object structure

/*const data = [
  {
    value: 80,
    kind: 1
  },
  {
    value: 120,
    kind: 2
  },
  {
    value: 140,
    kind: 3
  },
  {
    value: 50,
    kind: 4
  },
  {
    value: 200,
    kind: 5
  },
  {
    value: 90,
    kind: 6
  }
]*/

/**
 * Component representing the performance chart.
 * @param {object} props
 * @param {UserPerformance} props.userPerformance
 * @returns {JSX.Element}
 */
function Performance({ currentId }) {
  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/user/${currentId}/performance/`)
        const responseData = await response.json()
        setData(responseData.data)
      }
      catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])
  /**
   * Custom tick component.
   * Manages label spacing relative to chart
   * @param {Array<object>} props.payload
   * @param {number} props.x - X coordinate.
   * @param {number} props.y - Y coordinate.
   * @param {number} props.cx - Center X coordinate.
   * @param {number} props.cy - Center Y coordinate.
   * @returns {JSX.Element} - Returns JSX element.
   */
  const PerformanceCustomTick = ({ payload, x, y, cx, cy }) => {
    return (
      <text
        y={y + (y - cy) / 20} // calculate y position
        x={x + (x - cx) / 4} // calculate x position
        textAnchor='middle'
        fill='#fff'
        className='performance__kind'
      >
        {payload.value}
      </text>
    );
  };
  console.log("performance.data");
  console.log(data);
  if (data.length === 0) {
    return <div>loading ...</div>
  }

  /*function capitalizeFirstLetter(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
  }*/
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const formattedData = data.data.map((item) => {
    return {
      kind: capitalizeFirstLetter(data.kind[item.kind]),
      value: item.value,
    }
  })
  return (
    /* <section className='container performance'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart
          cx="50%" cy="50%"
          outerRadius="80%"
          data={data}
        >
          <PolarGrid radialLines={false} stroke={'#fff'} strokeWidth={1} />
          <PolarAngleAxis
            dataKey='kind'
            tickLine={false}
          />

          <Radar
            name='Kind'
            dataKey='value'
            stroke='none'
            fill='#ff0101'
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </section>*/
    <div style={{ width: '200px', height: '200px', backgroundColor: 'black', padding: '20px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={formattedData}>
          <PolarGrid stroke='white' />
          <PolarAngleAxis dataKey="kind" tick={{ fontSize: 12, fill: 'white', fontFamily: 'sans-serif' }}
            tickLine={false}
            stroke="white"
            dy={4} />
          <Radar name="Kind" dataKey="value" fill="#ff0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>);
};

export default Performance;