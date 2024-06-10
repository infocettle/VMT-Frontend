// src/HorizontalBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: 'y', // This makes the bar chart horizontal
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
      beginAtZero: true,
    },
  },
};

const data = {
  labels: ['Login', 'Code Request', 'Feature Request', 'Modification', 'Category name'],
  datasets: [
    {
      label: 'Requests',
      data: [960000, 740000, 640000, 260000, 160000],
      backgroundColor: 'rgba(34, 139, 34, 0.6)', // ForestGreen color with 60% opacity
      borderColor: 'rgba(34, 139, 34, 1)', // ForestGreen color
      borderWidth: 1,
    },
  ],
};

const TopSubscriptionChart = () => {
  return <Bar data={data} options={options} />;
};

export default TopSubscriptionChart;
