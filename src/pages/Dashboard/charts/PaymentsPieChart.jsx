// PaymentPieChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const PaymentsPieChart = () => {
  const data = {
    labels: ['YTD Payments', 'Commsions'],
    datasets: [
      {
        label: 'Payments',
        data: [40, 60],
        backgroundColor: [
          'rgba(238, 94, 82, 1)',
          'rgba(136, 106, 228, 1)',
         
        ],
        borderColor: [
          'rgba(238, 94, 82, 1)',
          'rgba(136, 106, 228, 1)',
         
        ],
        borderWidth:1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        align: 'center',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
    },
  };
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '154px',
          left: '98px',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>60%</span>
        <div  style={{ fontSize: '13px' }}>YTD Payments</div>
        <div style={{ fontSize: '9px' }}>N 12,349,000</div>
      </div>
    </div>
  );
};

export default PaymentsPieChart;
