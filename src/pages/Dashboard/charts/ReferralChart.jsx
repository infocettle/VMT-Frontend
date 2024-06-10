// src/DoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {

  datasets: [
    {
      label: '# of Votes',
      data: [80,50],
      backgroundColor: [
       ' green',

        'rgb(255,255,255 )',
       
      ],
      borderColor: [
        ' green',
        'rgb(255,255,255 )',
        
        
      
      ],
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
};

const ReferralChart = () => {
  return <Doughnut data={data} options={options} />;
};

export default ReferralChart;
