import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
);

const BarChart = () => {

  var data = {
    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'Money Spent',
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        backgroundColor: [
          'rgba(228, 73, 31, 0.8)',
          'rgba(228, 73, 31, 0.9)',
          'rgba(163, 221, 215, 0.8)',
          'rgba(228, 73, 31, 0.7)',
          'rgba(228, 73, 31, 0.7)',
          'rgba(228, 73, 31, 0.8)',
          'rgba(228, 73, 31, 0.9)'
        ],
        borderColor: [
          'rgba(228, 73, 31, 1)',
          'rgba(228, 73, 31, 1)',
          'rgba(163, 221, 215, 1)',
          'rgba(228, 73, 31, 1)',
          'rgba(228, 73, 31, 1)',
          'rgba(228, 73, 31, 1)',
          'rgba(228, 73, 31, 1)'
        ],
        borderWidth: 1
    }]
},
options = {
  scales: {
    y: {
      beginAtZero: true,
    }
  }
}

  return (
    <div>
      <Bar
        height={400}
        data={data}
        options={options}
         />
    </div>
  );
}

export default BarChart;
