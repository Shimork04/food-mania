import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const FoodGraph = ({ data }) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <BarChart width={600} height={400} data={data}>
          <XAxis dataKey="ingredient" style={{ fontSize: '14px', fontWeight: 'bold' }} />
          <YAxis style={{ fontSize: '14px', fontWeight: 'bold' }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend style={{ fontSize: '14px', fontWeight: 'bold' }} />
          <Bar dataKey="amount" fill="#936010" />
        </BarChart>
      </div>
    );
  };

export default FoodGraph; 

