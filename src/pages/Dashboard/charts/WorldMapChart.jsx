// src/WorldMap.js
import React from 'react';
import { Chart } from 'react-google-charts';

const data = [
  ['Country', 'Percentage'],
  ['United States', 20],
  ['Canada', 20],
  ['Brazil', 13],
  ['Russia', 8],
  ['India', 2],
  ['China', 57],
  ['Australia', 0],
  ['South Africa', 0],
];

const options = {
  colorAxis: { colors: ['#f5baba', '#d81b60'] },
  backgroundColor: '#f5f5f5',
  datalessRegionColor: '#eeeeee',
  defaultColor: '#f5f5f5',
};

const WorldMapChart = () => {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Chart
        chartType="GeoChart"
        width="100%"
        height="230px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default WorldMapChart;
