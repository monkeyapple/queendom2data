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

const VocalLineChart=(props)=>{
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
            label: 'Hyolyn+BraveGirls',
            data: props.hyolynBraveGirlsViewData,
            borderColor: 'rgb(64,0,23)',
            backgroundColor: 'rgba(64,0,23, 0.5)',
        },
        {
            label: 'WJSN+Viviz',
            data: props.wjsnVivizViewData,
            borderColor: 'rgb(130,210,220)',
            backgroundColor: 'rgba(130,210,220, 0.5)',
        },

        {
            label: 'Loona+Kep1er',
            data: props.loonaKep1erViewData,
            borderColor: 'rgb(20, 220, 12)',
            backgroundColor: 'rgba(20, 220, 12, 0.5)',
        }

    ],
  };

  

  return (<Line options={options} data={data} />);
  
}

export default VocalLineChart;


