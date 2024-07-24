// src/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title,Filler ,CategoryScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend,Filler);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 3, 20, 15, 10, 8],
      fill: true,
      backgroundColor: 'rgba(27, 135, 243, 0.4)',
      borderColor: 'rgba(27, 135, 243, 1)',
      borderWidth: 1,
      pointBorderWidth: 0.5
      
    },
    {
      label: 'Dataset 2',
      data: [18, 10, 13, 15, 12, 13, 10, 25, 20, 28],
      fill: true,
      backgroundColor: 'rgba(201, 66, 183, 0.4)',
      borderColor: 'rgba(201, 66, 183, 1)',
      borderWidth: 1,
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

const MonthlyRevenueChart = () => {
  return <Line data={data} options={options} />;
};

export default MonthlyRevenueChart;
