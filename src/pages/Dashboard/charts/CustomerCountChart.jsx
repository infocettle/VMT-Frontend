// PaymentPieChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const PaymentsPieChart = () => {
  const data = {
    labels: ['Sole', 'Joint'],
    datasets: [
      {
        label: 'Customer Count',
        data: [40, 60],
        backgroundColor: [
          'rgba(183, 233, 251, 1)',
          'rgba(201, 66, 183, 1)',
         
        ],
        borderColor: [
          'rgba(183, 233, 251, 1)',
          'rgba(201, 66, 183, 1)',
         
        ],
        borderWidth:1,
      },
    ],
  };
  const options = {
    cutout: '80%',
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
          top: '50%',
          left: '40%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: '28px', fontWeight: 'bold' }}>4930</span>
        <div  style={{ fontSize: '15px' }}>Total</div>

      </div>
    </div>
  );
};

export default PaymentsPieChart;
