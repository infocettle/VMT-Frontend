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
      data: [96, 74, 64, 26, 16],
      backgroundColor: 'rgba(136, 106, 228, 1)', // ForestGreen color with 60% opacity
      borderColor: 'rgba(136, 106, 228, 1)', // ForestGreen color
      borderWidth: 1,
      barThickness: 15, // Adjust the bar thickness here
    },
  ],
};

const TicketTypeChart = () => {
  return <Bar data={data} options={options} />;
};

export default TicketTypeChart;
