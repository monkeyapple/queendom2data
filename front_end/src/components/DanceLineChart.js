import React from 'react';
import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DanceLineChart=(props)=>{
  const options = {
    tension:0.4,
    spanGaps:true,
    layout:{
      padding:{
        left: 15,
        right:15,
        top:8,
        bottom:8

      }
    },
    scales:{
      x:{
        type:'time',
        ticks:{
          major:{
            enabled:true
          },
          font:(context)=>{
            console.log(context.tick && context.tick.major)
            const boldedTicks=context.tick && context.tick.major? 'bold':'';
            return{weight:boldedTicks};
          }
        }
      },
      y:{
        beginAtZero:true
      }

    },
    elements: {
        point: {
            radius: 0.3 // default to disabled in all datasets
        }
    },
    plugins: {
      legend: {
        position: 'top',
      },

    },

  };
  
  const data = {
    labels:props.labels,
    datasets: [
        {
            label: 'Hyolyn+WJSN',
            data: props.hyolynwjsnViewData,
            borderColor: 'rgb(32,150,90)',
            backgroundColor: 'rgba(32,150,90, 0.5)',
        },
        {
            label: 'BraveGirls+Loona',
            data: props.bravegirlsloonaViewData,
            borderColor: 'rgb(100,44,0)',
            backgroundColor: 'rgba(100,44,0, 0.5)',
        },

        {
            label: 'Viviz+Kep1er',
            data: props.vivizkep1erViewData,
            borderColor: 'rgb(230, 200, 100)',
            backgroundColor: 'rgba(230, 120, 100, 0.5)',
        }

    ],
  };

  

  return (<Line options={options} data={data} />);
  
}

export default DanceLineChart;


