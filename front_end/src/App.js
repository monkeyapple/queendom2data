import axios from 'axios';
import { parseWithOptions } from 'date-fns/fp';
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect,useCallback} from "react";
import GroupAssets from './GroupAssets';
import ViewCharts from './components/ViewCharts';
import { DataFactory } from './components/DataFactory';
import Footer from './components/Footer';


function App() {
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState(null);
  const[per1data,SetPer1Data]=useState({});
  const[per2data,SetPer2Data]=useState({});


  useEffect(()=>{
    const fetchDataHandler=async()=>{
      try{
        // const response=await axios.get("http://localhost:5000/fetch") 
        const response=await axios.get("https://queendom2.herokuapp.com/fetch") 
        const rawdata=await response.data
        SetPer1Data(DataFactory(rawdata.per1)) 
        SetPer2Data(DataFactory(rawdata.per2))
      }catch(error){
        console.error(error);
      }
    };
     
    fetchDataHandler();
  },[])
  console.log(per1data)
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
          <div className='textTitle divider'>
            <h1>Round 3</h1>
          </div>
          <div class="neu">Coming Soon</div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}
export default App;
