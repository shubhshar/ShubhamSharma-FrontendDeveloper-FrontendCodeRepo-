import './App.css';
import axios from "axios";
import { useState,useEffect } from 'react';

function App() {

const [mySpaceData, setMySpaceData]=useState([])

useEffect(()=>{
  const getData =async()=>{
    try{
      const response=await axios.get(`http://localhost:5000/mySpaceXData`)
      setMySpaceData(response.data)
      console.log(response.data)
    }
    catch(error){
      setMySpaceData(null)
    }
  }
  getData()
},[])
  return (
    <div className="App">
      {mySpaceData.map((spaceData)=>
      <div key={spaceData.id}>
        {spaceData.last_update}
      </div>
      )}
    </div>
  );
}

export default App;
