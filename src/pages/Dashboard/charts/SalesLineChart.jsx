import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Date", "Sales"],
  ["2022-07-01", 100],
  ["2022-07-02", 200],
  ["2022-07-03", 400],
  ["2022-07-04", 600],
  ["2022-07-05", 650],
  ["2022-07-07", 700],
  ["2022-07-08", 900],
];

export const options = {


  legend: "none",
  series: {
    0: { // This refers to the first series in the data array
      color: "green", // Color of the line
      backgroundColor: "lightgreen", // Background color of the line
      fillOpacity: 10,
    },
  },
  areaOpacity: 0.2,
};

export function SalesLineChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
