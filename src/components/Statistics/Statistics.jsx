import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
  } from 'recharts';

const Statistics = () => {
     
    const assignmentMarks = [
        { id: 1, mark: 57 },
        { id: 2, mark: 52 },
        { id: 3, mark: 55 },
        { id: 4, mark: 55 },
        { id: 5, mark: 50 },
        { id: 6, mark: 53 },
        { id: 7, mark: 60 },
        { id: 8, mark: 58 },
        
      ];
      

    return (
        <div className='my-container'>
            <ComposedChart
              width={600}
              height={400}
              data ={assignmentMarks}
            
            >
                <XAxis  dataKey="id" stroke="#ff7300" />
                <YAxis  dataKey="mark" stroke="#8884d8" />
                <Tooltip />
            </ComposedChart>
        
            
        </div>
    );
};

export default Statistics;