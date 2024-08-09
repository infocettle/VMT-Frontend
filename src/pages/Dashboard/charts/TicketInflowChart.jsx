// src/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Monthly Data',
      data: [120, 190, 300, 500, 200, 300, 400, 350, 250, 150, 100, 50],
      backgroundColor: 'rgba(11, 110, 208, 1)',
      borderColor: 'rgba(11, 110, 208, 1)',
      borderWidth: 1,
   
      
      barThickness: 4, // Adjust the bar thickness here
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

const TicketInflowChart = () => {
    return (
        <div style={{ position: 'relative', width: '100%', }}>
  
  
  <Bar data={data} options={options} height= '122px' />
  </div>
  )
};

export default TicketInflowChart;
