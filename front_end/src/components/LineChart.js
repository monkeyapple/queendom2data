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

const LineChart=(props)=>{
  const options = {
    spanGaps:true,
    layout:{
      padding:{
        left: 15,
        right:15,
        top:8,
        bottom:8

      }
    },
    // scales:{
    //   x:{
    //     type:'time',
    //     ticks:{
    //       major:{
    //         enabled:true
    //       },
    //       font:(context)=>{
    //         console.log(context.tick && context.tick.major)
    //         const boldedTicks=context.tick && context.tick.major? 'bold':'';
    //         return{weight:boldedTicks};
    //       }
    //     }
    //   },
    //   y:{
    //     beginAtZero:true
    //   }

    // },
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
        text: 'YouTube Views',
        align:'center',
        font:{
          size:20
        }
      },

    },

  };
  
  const data = {
    labels:props.labels,
    datasets: [
      {
        label: 'Hyolyn',
        data: props.hyolynViewData,
        borderColor: 'rgb(250,212,0)',
        backgroundColor: 'rgba(250,212,0, 0.5)',
      },
      {
        label: 'BraveGirls',
        data: props.bravegirlsViewData,
        borderColor: 'rgb(32,0,114)',
        backgroundColor: 'rgba(32,0,114, 0.5)',
      },
      {
        label: 'WJSN',
        data: props.wjsnViewData,
        borderColor: 'rgb(83,178,255)',
        backgroundColor: 'rgba(83,178,255, 0.5)',
      },
      {
        label: 'Loona',
        data: props.loonaViewData,
        borderColor: 'rgb(230, 120, 12)',
        backgroundColor: 'rgba(230, 120, 12, 0.5)',

      },
      {
        label: 'Viviz',
        data: props.vivizViewData,
        borderColor: 'rgb(196,54,36)',
        backgroundColor: 'rgba(196,54,36,0.5)',
      },
      {
        label: 'Kep1er',
        data: props.kep1erViewData,
        borderColor: 'rgb(26,164,106)',
        backgroundColor: 'rgba(26,164,106, 0.5)',
      },

    ],
  };

  

  return (<Line options={options} data={data} />);
  
}

export default LineChart;


