import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);

const SalesLineChart = () => {
  const data = {
    labels: [
      "2022-07-01",
      "2022-07-02",
      "2022-07-03",
      "2022-07-04",
      "2022-07-05",
      "2022-07-06",
      "2022-07-07",
    ],
    datasets: [
      {
        label: "YTD Payments",
        data: [20, 50, 100, 150, 250, 300, 350],
        fill: true,
        backgroundColor: "rgba(18, 165, 92, 0.15)",
        borderColor: "rgba(18, 165, 92, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        // max: 500,
      },
     
    },
  };

  return <Line data={data} options={options} />;
};

export default SalesLineChart;
