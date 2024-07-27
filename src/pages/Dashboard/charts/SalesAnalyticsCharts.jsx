// src/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title,Filler, CategoryScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend,Filler);

const data = {
  labels: ['Jan 8', 'Jan 15', 'Jan 22', 'Jan 29', 'Feb 5', 'Feb 12'],
  datasets: [
    {
      label: 'Monthly Data',
      data: [12, 19, 25, 35, 20, 13],
      fill: true,
      backgroundColor: 'rgba(242, 157, 65, 0.1)',
      borderColor: 'rgba(242, 157, 65, 1)',
      borderWidth: 1,
      tension: 0.4
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

const SalesAnalyticsCharts = () => {
  return <Line data={data} options={options} />;
};

export default SalesAnalyticsCharts;
