import React from 'react';
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const tooltipPlugin = Chart.registry.getPlugin("tooltip");
tooltipPlugin.positioners.custom = function (elements, eventPosition) {
  return {
    y: eventPosition.chart?.height ?? -10,
    x: eventPosition.x
  };
};

const LineChartScroll=(props)=>{
  const data = {
    labels:props.labels,
    datasets: [
      {
        label: 'Hyolyn',
        data: props.hyolynViewData,
        borderColor: 'rgb(160, 30, 152)',
        backgroundColor: 'rgba(160, 30, 152, 0.5)',
      },
      {
        label: 'BraveGirls',
        data: props.bravegirlsViewData,
        borderColor: 'rgb(136, 29, 72)',
        backgroundColor: 'rgba(136, 29, 72, 0.5)',
      },
      {
        label: 'WJSN',
        data: props.wjsnViewData,
        borderColor: 'rgb(230, 120, 12)',
        backgroundColor: 'rgba(230, 120, 12, 0.5)',
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
        label: 'Kep1er',
        data: props.kep1erViewData,
        borderColor: 'rgb(200, 30, 124)',
        backgroundColor: 'rgba(200, 30, 124, 0.5)',
      },

    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {},
    spanGaps:true,
    elements: {
      point: {
          radius: 0.5 // default to disabled in all datasets
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
}

  return (
    <>
      <div style={{ width: "2000px" }}>
        <Line options={options} data={data} height={500} />
      </div>
  </>
  
);
  
}

export default LineChartScroll;


