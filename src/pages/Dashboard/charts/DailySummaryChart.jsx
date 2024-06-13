
// src/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July',],
  datasets: [
    {
      label: 'Monthly Data',
      data: [120, 190, 300, 500, 200, 300, 200,],
      backgroundColor: 'rgba(148, 82, 74, 1)',
      borderColor: 'rgba(148, 82, 74, 1)',
      borderWidth: 1,
   
      
      barThickness: 20, // Adjust the bar thickness here
    },
  ],
};

const options = {
  cutout: '80%',
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
      ticks: {
        display: false, // Hide x-axis labels
      },
    },
    y: {
      min: 0,
      max: 400,
      title: {
        display: false,
        text: 'Value',
      },
    },
  },
};



const DailySummaryChart = () => {
  return (
    <div style={{ position: 'relative',width: '100%', height: '100%' }}> 
<Bar data={data} options={options} height="285px" />

</div>
)
  
};

export default DailySummaryChart;
