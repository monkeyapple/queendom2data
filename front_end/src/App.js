import axios from 'axios';
import { parseWithOptions } from 'date-fns/fp';
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from "react";
import DataFactory from './components/DataFactory';
import DataFactoryOptimize from './components/DataFactoryOptimize';
import GroupAssets,{VocalGroupAssets,DanceGroupAssets} from './GroupAssets';
import ViewCharts from './components/ViewCharts';
import VocalViewCharts from './components/VocalViewChart';
import DanceViewCharts from './components/DanceViewChart';
import Footer from './components/Footer';


function App() {
  const[per1data,SetPer1Data]=useState({});
  const[per2data,SetPer2Data]=useState({});
  const[per3_v_data,SetPer3Data]=useState([]);
  const[per4_d_data,SetPer4Data]=useState([]);
  const[per5data,SetPer5Data]=useState({});
  // Solution1: use axios 
    useEffect(()=>{
    const fetchDataHandler=async()=>{
      try{
        // const response=await axios.get("http://localhost:5000/fetch") 
        const response=await axios.get("https://queendom2.herokuapp.com/fetch") 
        const rawdata=await response.data
        const data1=DataFactoryOptimize(rawdata.per1)
        const data2=DataFactoryOptimize(rawdata.per2)
        //Performance_3_final
        const data5=DataFactory(rawdata.per5)

        SetPer1Data(data1) 
        SetPer2Data(data2)
        SetPer5Data(data5)
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
      //performance_3_dance
      const getDanceData=Object.values(rawdata.per4).map((rowData)=>{

        return{
            hoylyn_wjsn_views:rowData[1],
            hoylyn_wjsn_likes:rowData[2],
            bravegirls_loona_views:rowData[3],
            bravegirls_loona_likes:rowData[4],
            viviz_kep1er_views:rowData[5],
            viviz_kep1er_likes:rowData[6],
            update_time:rowData[7]
        }
      })
      SetPer4Data(getDanceData)

      }catch(error){
        console.error(error);
      }
    }; 
    fetchDataHandler();
  },[])

  console.log(per5data)
  return(
    <div>
      <div className="container-fluid">
        <div className='page-Head'>
          <h4>Queendom2Data</h4>
        </div>
        <div className="d-flex justify-content-center">
          (Time Zone:Seoul, South Korea)
        </div>
        
        <section className="per1-section">
          <ViewCharts allData={per1data.allData} performanceNum={Number('1')} assets={GroupAssets} totalViews={per1data.sumToday} totalViewTime={per1data.todayTime} subtractionViews={per1data.subtractionViews} lastDayTotalViews={per1data.sumYesterday} lastDayTime={per1data.yesterdayTime}/>
        </section>
        <section className="per2-section">
          <ViewCharts allData={per2data.allData} performanceNum={Number('2')} assets={GroupAssets} totalViews={per2data.sumToday} totalViewTime={per2data.todayTime} subtractionViews={per2data.subtractionViews} lastDayTotalViews={per2data.sumYesterday} lastDayTime={per2data.yesterdayTime}/>
        </section>
        <section className="per3-section unit-margin">
          <VocalViewCharts allData={per3_v_data} performanceNum={Number('1')} assets={VocalGroupAssets} unitName='Vocal Unit'/>
        </section>
        <section className="per4-section unit-margin">
          <DanceViewCharts allData={per4_d_data} performanceNum={Number('1')} assets={DanceGroupAssets} unitName='Dance Unit'/>
        </section>
        <section className="per5-section">
          <ViewCharts allData={per5data.allData} performanceNum={Number('3')} assets={GroupAssets} totalViews={per5data.sumToday} totalViewTime={per5data.todayTime} subtractionViews={per5data.subtractionViews} lastDayTotalViews={per5data.sumYesterday} lastDayTime={per5data.yesterdayTime}/>
        </section>
        <div class="neu">26 May</div>


      </div>
      <Footer/>
    </div>
  );
}
export default App;
