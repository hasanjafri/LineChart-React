import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { time: '18:10', "CH01 SE01": -47, "CH01 SE14": -33, "CH03 SE01": -22 },
  { time: '18:15', "CH01 SE01": -23, "CH01 SE14": -11, "CH03 SE01": 55 },
  { time: '18:20', "CH01 SE01": 11, "CH01 SE14": 33, "CH03 SE01": -11 },
  { time: '18:25', "CH01 SE01": 54, "CH01 SE14": 111, "CH03 SE01": 77 },
  { time: '18:30', "CH01 SE01": 123, "CH01 SE14": 177, "CH03 SE01": 155 },
  { time: '18:35', "CH01 SE01": 177, "CH01 SE14": 122, "CH03 SE01": 65 },
  { time: '18:40', "CH01 SE01": 98, "CH01 SE14": 88, "CH03 SE01": 101 },
];

const lineColors = {
  "CH01 SE01": "#00bf2f",
  "CH01 SE14": "#bc0000",
  "CH03 SE01": "#1526c2"
}

class SimpleLineChart extends React.Component {
  render() {
    return (
      <ResponsiveContainer width="99%" height={420}>
        <LineChart data={data}>
          <XAxis dataKey={'time'} label={{value: "Time", position: 'insideBottom', offset: -5}} padding={{left: 30, right: 30}}/>
          <YAxis ticks={[-50, 0, 50, 100, 150, 200]} label={{ value: "(°C)", position: 'insideLeft'}} padding={{top: 20, bottom: 20}}/>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip/>
          <Legend layout="vertical" verticalAlign="middle" align="right" iconType="circle"/>
          {
            this.props.active_sensors.map((sensor) => {
              return(
                <Line type="monotone" dataKey={sensor} stroke={lineColors[sensor]} activeDot={{ r: 8 }}/>
              )
            })
          }
          {/* <Line type="monotone" dataKey="CH01 SE01" stroke="#00bf2f" activeDot={{ r: 8 }}/>
          <Line type="monotone" dataKey="CH01 SE14" stroke="#bc0000" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="CH03 SE01" stroke="#1526c2" activeDot={{ r: 8 }} /> */}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default SimpleLineChart;