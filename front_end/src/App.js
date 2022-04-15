import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect,useCallback} from "react";
import Per1Charts from './components/Per1Charts';
import Cards from './components/UI/Cards';
import GroupAssets from './GroupAssets';
import { parseWithOptions } from 'date-fns/fp';

function App() {
  const[alldata_Per1,setAllData_Per1]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState(null);

  const [last_row_Per1,setLastRow_Per1]=useState("");
  const[last_row_Time_Per1,setLastRowTime]=useState("")

  const[last_2nd_row_Per1,setLast2ndRow_Per1]=useState("")
  
  
  const fetchP1DataHandler=useCallback(async()=>{
    setIsLoading(true);
    setError(null);
    try{
      // const response=await fetch("https://queendom2.herokuapp.com/fetch");
      const response=await fetch("http://localhost:5000/fetch");
      const data1=await response.json();
      const per1_transformed_Data=Object.values(data1['per1']).map((rowData,index)=>{
        // when reach the last 2nd element
        if(data1['per1'].length-2===index){
          const values_last_2 = Object.values(rowData)
          var sumRow_recent_2=0
          for(var i=0;i<values_last_2.length-1;i++){
            if (typeof values_last_2[i] == 'number'){
              sumRow_recent_2+=values_last_2[i]
            }
          }
          setLast2ndRow_Per1(sumRow_recent_2.toString())

        }
        // re-initialize the sum amount
        sumRow_recent=0
        if(data1['per1'].length-1===index){
          const values_recent = Object.values(rowData)
          var sumRow_recent=0
          for(var i=0;i<values_recent.length-1;i++){
            if (typeof values_recent[i] == 'number'){
              sumRow_recent+=values_recent[i]
            }
          }
          
          setLastRow_Per1(sumRow_recent.toString())
          setLastRowTime(rowData[12])
          
        }
        return{
          id:rowData[0],
          wjsn_views:rowData[1],
          wjsn_likes:rowData[2],
          kep1er_views:rowData[3],
          kep1er_likes:rowData[4],
          viviz_views:rowData[5],
          viviz_likes:rowData[6],
          hyolyn_views:rowData[7],
          hyolyn_likes:rowData[8],
          loona_views:rowData[9],
          loona_likes:rowData[10],
          bravegirls_views:rowData[11],
          bravegirls_likes:rowData[12],
          update_time:rowData[13]

        }
      });
      setAllData_Per1(per1_transformed_Data);
      
    }
    catch(error){
      setError(error.message);
    }
    setIsLoading(false)
    },[]);

  
  useEffect(()=>{
    fetchP1DataHandler();
  },[fetchP1DataHandler])
  

  return (
    <div>
      <div className='container-fluid'>
        <div className='page-Head'>
          <h4>Queendom2Data</h4>
        </div>
        <section className="per1-section">
          <div className='textTitle divider'>
            <h1>Round 1</h1>
          </div>
          <div className="container-fluid video d-flex justify-content-center">
            <Cards assets={GroupAssets}/>
          </div>
          <div className="container-fluid view-chart">
            <Per1Charts alldata_Per1={alldata_Per1} totalViews={last_row_Per1} totalViewTime={last_row_Time_Per1} yesterdayTotalViews={last_2nd_row_Per1} />
          </div>
        </section>
        
        <section className="per2-section">
          <div className='textTitle divider'>
            <h1>Round 2</h1>
          </div>
          <div class="neu">Coming Soon</div>
        </section>
      </div>
    </div>
  );
}

export default App;
