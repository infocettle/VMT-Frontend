import React from "react";
import { Chart } from "react-google-charts";

const dataOld = [
  ["Name", "Popularity"],
  ["Lagos", 1000],
  ["Gombe", 1000],
  ["Edo", 1000],
  ["Oyo", 1000],
];

const dataNew = [
  ["Name", "Popularity"],
  ["Lagos", 370],
  ["Gombe", 600],
  ["Edo", 700],
  ["Oyo", 200],
];

export const diffdata = {
  old: dataOld,
  new: dataNew,
};

export function DemographicBarChart() {
  return (
    <Chart
      chartType="ColumnChart"
      width="100%"
      height="400px"
      diffdata={diffdata}
    />
  );
}
