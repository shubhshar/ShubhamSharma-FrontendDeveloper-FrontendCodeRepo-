import React, { useState, useEffect } from "react";
import axios from "axios";
import "./homeP.css";
import { useAuth0 } from "@auth0/auth0-react";

const HomeP = () => {
  const { logout } = useAuth0();
  const [mySpaceData, setMySpaceData] = useState([]);
  const dataPerPage = 7;
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

  const numberOfPages = Math.ceil(mySpaceData.length / dataPerPage);
  const pagesToshow = [...Array(numberOfPages + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * dataPerPage;
  const indexOfFirstPage = indexOfLastPage - dataPerPage;
  const visibleData = mySpaceData.slice(indexOfFirstPage, indexOfLastPage);

  const prevHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextHandler = () => {
    if (currentPage !== numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="container">
        <div className="container-header">
          <span
            className="container-header-logout"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </span>
        </div>
        <div className="container-card">
          {visibleData.map((spaceData) => (
            <div className="conatiner-card-content" key={spaceData.id}>
              <p>
                <b>Last Update:</b> {spaceData.last_update}
              </p>
              <p>
                <b>Status: </b> {spaceData.status}
              </p>
              <p>
                <b>Type: </b> {spaceData.type}
              </p>
            </div>
          ))}
        </div>
        <p className="container-pagination">
          <button onClick={prevHandler}>Prev </button>
          {pagesToshow.map((page) => (
            <span
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${currentPage === page ? "active" : " "}`}
            >{`${page}   `}</span>
          ))}{" "}
          <button onClick={nextHandler}> Next</button>
        </p>
      </div>
    </>
  );
};

export default HomeP;
