

// src/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
  datasets: [
    {
      label: 'Monthly Data',
      data: [40, 30, 23, 5, 2, 3, 20, 15, 10, 8],
      fill: false,
      backgroundColor: 'rgba(92, 177, 118, 1)',
      borderColor: 'rgba(92, 177, 118, 1)',
      borderWidth: 1,
      tension:0.4
    },
    {
      label: 'Monthly Data',
      data: [13, 13, 4, 16, 21, 31, 20, 25, 16, 18],
      fill: false,
      backgroundColor: 'rgba(226, 55, 56, 1)',
      borderColor: 'rgba(226, 55, 56, 1)',
      borderWidth: 1,
      tension:0.4
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      title: {
        display: false,
        text: 'Month',
      },
    },
    y: {
      min: 0,
      max: 50,
      title: {
        display: false,
        text: 'Value',
      },
    },
  },
};

const SalesOverviewChart = () => {
  return <Line data={data} options={options} />;
};

export default SalesOverviewChart;

