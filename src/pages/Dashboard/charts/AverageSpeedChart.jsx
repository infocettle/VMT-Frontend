// src/DonutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Reached', 'Remaining'],
  datasets: [
    {
      data: [73, 27],
      backgroundColor: ['#94524A', '#f2f2f2'],
      borderColor: ['#94524A', '#f2f2f2'],
      borderWidth: 1,
    },
  ],
};

const options = {
  cutout: '80%',
  responsive: true,
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
  },
};

const AverageSpeedChart = () => {
  return (
    <div style={{ position: 'relative', width: '150px', height: '150px' }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>58%</span>
        <div>Reached</div>
      </div>
    </div>
  );
};

export default AverageSpeedChart;
