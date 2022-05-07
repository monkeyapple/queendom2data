import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from "react";
import { DataFactory } from './components/DataFactory';

function App() {
  const[per1data,SetPer1Data]=useState({});
  const[per2data,SetPer2Data]=useState({});

    useEffect(()=>{
    const fetchDataHandler=async()=>{
      try{
        const response=await axios.get("http://localhost:5000/fetch") 
        const rawdata=await response.data
        const data1=DataFactory(rawdata.per1)
        const data2=DataFactory(rawdata.per2)
        SetPer1Data(data1) 
        SetPer2Data(data2)

        
      }catch(error){
        console.error(error);
      }
    }; 
    fetchDataHandler();
  },[])
  console.log({'dataset1':per1data})
  console.log({'dataset2':per2data})

  return(
    <div>
        <p>Hi</p>
    </div>
  );
}
export default App;
