

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
      data: [12, 19, 3, 5, 2, 3, 20, 15, 10, 8],
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Month',
      },
    },
    y: {
      min: 0,
      max: 50,
      title: {
        display: true,
        text: 'Value',
      },
    },
  },
};

const SalesOverviewChart = () => {
  return <Line data={data} options={options} />;
};

export default SalesOverviewChart;

