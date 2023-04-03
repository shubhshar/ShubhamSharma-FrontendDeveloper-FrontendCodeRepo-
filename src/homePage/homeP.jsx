import React, { useState, useEffect } from "react";
import axios from "axios";
import "./homeP.css";
import { useAuth0 } from "@auth0/auth0-react";

const HomeP = () => {
  const { logout } = useAuth0();
  const [mySpaceData, setMySpaceData] = useState([]);
  const dataPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/mySpaceXData`);
        setMySpaceData(response.data);
      } catch (error) {
        setMySpaceData(null);
      }
    };
    getData();
  }, []);

  const numberOfPages = Math.round(mySpaceData.length / dataPerPage);
  const pagesToshow = [...Array(numberOfPages + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * dataPerPage;
  const indexOfFirstPage = indexOfLastPage - dataPerPage;
  const visibleData = mySpaceData.slice(indexOfFirstPage, indexOfLastPage);

  const prevHandler =()=>{
    if(currentPage !== 1){
      setCurrentPage(currentPage-1)
    }
  }
  const nextHandler =()=>{
    if(currentPage !== numberOfPages){
      setCurrentPage(currentPage+1)
    }
  }
  
  return (
    <div>
      {visibleData.map((spaceData) => (
        <p key={spaceData.id}>{spaceData.last_update}</p>
      ))}
      <p>
      <span onClick={prevHandler}>Prev </span>
        {pagesToshow.map((page) => (
          <span key={page} onClick={()=>setCurrentPage(page)}>{`${page}   `}</span>
        ))}{" "}
         <span onClick={nextHandler}> Next</span>
      </p>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </div>
  );
};

export default HomeP;
