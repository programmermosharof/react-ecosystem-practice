import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
  { month: 'Jan', sales: 400 },
  { month: 'Feb', sales: 800 },
  { month: 'Mar', sales: 600 },
];
const Data = () => {
  return (
    <div className='w-11/12 mx-auto '>

    <LineChart  height={300} data={data}>
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Line dataKey="sales" stroke="blue" />
</LineChart>

      
    </div>
  );
};

export default Data;