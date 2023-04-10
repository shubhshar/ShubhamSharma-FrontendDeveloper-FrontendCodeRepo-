import React, { useState, useEffect } from "react";
import axios from "axios";
import "./homeP.css";
import { useAuth0 } from "@auth0/auth0-react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HomeP = () => {
  const { logout } = useAuth0();
  const [mySpaceData, setMySpaceData] = useState([]);
  const dataPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [filterCriteria, setFilterCriteria] = useState("all");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://silly-nougat-3f9593.netlify.app/mySpaceXData`);
        setMySpaceData(response.data);
      } catch (error) {
        setMySpaceData(null);
      }
    };
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    getData();
  }, []);

  const filterData = mySpaceData.filter((datas) => {
    if (filterCriteria === "retired") {
      return datas.status === "retired";
    } else if (filterCriteria === "active") {
      return datas.status === "active";
    } else if (filterCriteria === "destroyed") {
      return datas.status === "destroyed";
    } else if (filterCriteria === "unknown") {
      return datas.status === "unknown";
    } else {
      return datas;
    }
  });

  const numberOfPages = Math.ceil(filterData.length / dataPerPage);
  const pagesToshow = [...Array(numberOfPages + 1).keys()].slice(1);
  const indexOfLastPage = currentPage * dataPerPage;
  const indexOfFirstPage = indexOfLastPage - dataPerPage;
  const visibleData = filterData.slice(indexOfFirstPage, indexOfLastPage);

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

  const handleFilter = (e) => {
    setFilterCriteria(e.target.value);
    console.log(e.target.value);
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
            <div className="container-card-content" key={spaceData.id}>
              {isLoading ? (
                <SkeletonTheme color="beige" highlightColor="#a2d0e6">
                  <Skeleton height={250} duration={2} />
                </SkeletonTheme>
              ) : (
                <div className="cp">
                  <p>
                    <b> Last Update:</b> {spaceData.last_update}
                  </p>
                  <p>
                    <b>Status: </b> {spaceData.status}
                  </p>
                  <p>
                    <b>Type: </b> {spaceData.type}
                  </p>
                </div>
              )}
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
        <div className="container-filterClass">
          <p>Filter by status &nbsp;</p>
          <select name="Filter" onChange={handleFilter}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="retired">Retired</option>
            <option value="destroyed">Destroyed</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default HomeP;
