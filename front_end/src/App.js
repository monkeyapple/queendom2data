import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect,useCallback} from "react";

function App() {
  const[alldata,setAllData]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState(null);
  
  const fetchP1DataHandler=useCallback(async()=>{
    setIsLoading(true);
    setError(null);
    try{
      const response=await fetch("http://localhost:5000/");
      const data=await response.json();
      const transformedData=Object.values(data).map((rowData)=>{
        return{
          wjsn_views:rowData[0],
          wjsn_likes:rowData[1],
          kep1er_views:rowData[2],
          kep1er_likes:rowData[3],
          viviz_views:rowData[4],
          viviz_likes:rowData[5],
          hyolyn_views:rowData[6],
          hyolyn_likes:rowData[7],
          loona_views:rowData[8],
          loona_likes:rowData[9],
          bravegirls_views:rowData[10],
          bravegirls_likes:rowData[11],
          update_time:rowData[12]

        }
      });
      setAllData(transformedData);
      
    }
    catch(error){
      setError(error.message);
    }
    setIsLoading(false)
    },[]);

  useEffect(()=>{
    fetchP1DataHandler();
  },[fetchP1DataHandler])

  console.log(alldata)
  return (
    <div className='App'>
      <p>Hi</p>
    </div>

  );
}

export default App;
