import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Payments", "Hours per Day"],
  ["YTD Payments", 11],
  ["Commisions", 9],
 // CSS-style declaration
];

export const options = {

  pieHole: 0.4,
  is3D: false,
};

export function PaymentPieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
