import axios from 'axios';
import { parseWithOptions } from 'date-fns/fp';
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from "react";
import { DataFactory,DataFactoryVocal } from './components/DataFactory';
import GroupAssets,{VocalGroupAssets} from './GroupAssets';
import ViewCharts from './components/ViewCharts';
import VocalViewCharts from './components/VocalViewChart';
import Footer from './components/Footer';

function App() {
  const[per1data,SetPer1Data]=useState({});
  const[per2data,SetPer2Data]=useState({});
  const[per3_v_data,SetPer3Data]=useState([]);
  // Solution1: use axios 
    useEffect(()=>{
    const fetchDataHandler=async()=>{
      try{
        const response=await axios.get("http://localhost:5000/fetch") 
        // const response=await axios.get("https://queendom2.herokuapp.com/fetch") 
        const rawdata=await response.data
        const data1=DataFactory(rawdata.per1)
        const data2=DataFactory(rawdata.per2)
        SetPer1Data(data1) 
        SetPer2Data(data2)
        //performance 3_vocal
        const getVocalData=Object.values(rawdata.per3).map((rowData)=>{

          return{
              wjsn_viviz_views:rowData[1],
              wjsn_viviz_likes:rowData[2],
              loona_kep1er_views:rowData[3],
              loona_kep1er_likes:rowData[4],
              hyolyn_bravegirls_views:rowData[5],
              hyolyn_bravegirls_likes:rowData[6],
              update_time:rowData[7]
          }
      })
      SetPer3Data(getVocalData)
      }catch(error){
        console.error(error);
      }
    }; 
    fetchDataHandler();
  },[])
  console.log(per3_v_data)
  console.log(typeof(per3_v_data))
  return(
    <div>
      <div className='container-fluid'>
        <div className='page-Head'>
          <h4>Queendom2Data</h4>
        </div>
        <section className="per1-section">
          <ViewCharts allData={per1data.allData} performanceNum={Number('1')} assets={GroupAssets} totalViews={per1data.sumLastRow} totalViewTime={per1data.lastRowTime} subtractionViews={per1data.subtractionViews} lastDayTotalViews={per1data.sumLastDay} lastDayTime={per1data.lastDayTime}/>
        </section>
        <section className="per2-section">
          <ViewCharts allData={per2data.allData} performanceNum={Number('2')} assets={GroupAssets} totalViews={per2data.sumLastRow} totalViewTime={per2data.lastRowTime} subtractionViews={per2data.subtractionViews} lastDayTotalViews={per2data.sumLastDay} lastDayTime={per2data.lastDayTime}/>
        </section>
        <section className="per3-section">
          <VocalViewCharts allData={per3_v_data} performanceNum={Number('1')} assets={VocalGroupAssets} />
        </section>
      </div>
      <Footer/>
    </div>
  );
}
export default App;
