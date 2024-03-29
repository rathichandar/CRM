import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import "./chart.scss";
const data = [
  { name: 'January',Total: 4000,},
  { name: 'Febuary',Total: 4500,},

  { name: 'March',Total: 1200,},
    { name: 'April',Total: 3000,},
  { name: 'May',Total: 2000,},
  { name: 'June',Total: 1000,},

 
];
function Chart() {
  return (
    <div className='chart'>
      <div className="title">Last months (Revenue)</div>
      <ResponsiveContainer width="100 %" aspect={2/1}>
<AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>

  </defs>
  <XAxis dataKey="name" />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
</ResponsiveContainer>
    ;
  
    </div>
  )
}

export default Chart  