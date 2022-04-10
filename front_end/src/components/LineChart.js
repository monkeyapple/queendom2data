import { Line } from 'react-chartjs-2';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChart=(props)=>{
  const options = {
    // scales:{
    //   x:{
    //     min:0,
    //     max:50
    //   },
    //   y:{
    //     beginAtZero:true
    //   }
    // },
    spanGaps:true,
    // showLine: false,
    // datasets: {
    //   line: {
    //       pointRadius: 0 // disable for all `'line'` datasets
    //   }
    // },
    // responsive:true,
    // maintainAspectRatio:false,
    layout:{
      padding:{
        left: 20,
        right:20,
        top:10,
        bottom:10

      }
    },
    elements: {
        point: {
            radius: 0.5 // default to disabled in all datasets
        }
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const data = {
    labels:props.labels,
    datasets: [
      {
        label: 'BraveGirls',
        data: props.bravegirlsViewData,
        borderColor: 'rgb(136, 29, 72)',
        backgroundColor: 'rgba(136, 29, 72, 0.5)',
      },
      {
        label: 'Hyolyn',
        data: props.hyolynViewData,
        borderColor: 'rgb(160, 30, 152)',
        backgroundColor: 'rgba(160, 30, 152, 0.5)',
      },
      {
        label: 'Kep1er',
        data: props.kep1erViewData,
        borderColor: 'rgb(200, 30, 124)',
        backgroundColor: 'rgba(200, 30, 124, 0.5)',
      },
      {
        label: 'Loona',
        data: props.loonaViewData,
        borderColor: 'rgb(120, 99, 132)',
        backgroundColor: 'rgba(120, 99, 132, 0.5)',
      },
      {
        label: 'Viviz',
        data: props.vivizViewData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'WJSN',
        data: props.wjsnViewData,
        borderColor: 'rgb(230, 120, 12)',
        backgroundColor: 'rgba(230, 120, 12, 0.5)',
      },

    ],
  };

  return <Line options={options} data={data} />;
  
}


export default LineChart;


