import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DemographicBarChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['Lagos', 'Gombe', 'Edo', 'Oyo', 'Enugu', 'Abuja', 'Sokoto'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [1000, 100, 500, 1000, 200, 500, 400],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(33, 150, 243, 1)');
          gradient.addColorStop(1, 'rgba(0, 255, 234, 1)');
          
          return gradient;
        },
        borderColor: 'rgba(0, 0, 0, 0.1)',
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
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar ref={chartRef} data={data} options={options} height="100%" width="100%" />;
};

export default DemographicBarChart;
