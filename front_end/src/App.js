import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect,useCallback} from "react";
import Per1Charts from './components/Per1Charts';
import Cards from './components/UI/Cards';
import GroupAssets from './GroupAssets';

function App() {
  const[alldata,setAllData]=useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const [error,setError]=useState(null);
  
  const fetchP1DataHandler=useCallback(async()=>{
    setIsLoading(true);
    setError(null);
    try{
      const response=await fetch("https://queendom2.herokuapp.com/fetch");
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

  

  return (
    <div>
      <section className="per1-section">
        <div className='textTitle'>
          <h1>Round 1</h1>
        </div>
        <div className="container-fluid video d-flex justify-content-center">
          <Cards assets={GroupAssets}/>
        </div>
        <div className="container-fluid view-chart">
          <Per1Charts alldata={alldata}/>
        </div>
      </section>
      
      <section className="per2-section">
        <div className='textTitle'>
          <h1>Round 2</h1>
        </div>
        <div class="neu">Coming Soon</div>
      </section>
    </div>
  );
}

export default App;
