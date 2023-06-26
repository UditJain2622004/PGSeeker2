import React, { useState, useEffect } from "react";
import PGCard from "./PGCard";
import "./PGListingPage.css";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";

const PGListingPage = ({ pgs, filters }) => {
  const [pgData, setPgData] = useState([]);
  const [sortOption, setSortOption] = useState("ascending");
  useEffect(() => {
    setPgData(pgs);
  }, [pgs]);
  const handleSort = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    if (sortOption === "descending") {
      setPgData([...pgData].sort((a, b) => a.minPrice - b.minPrice));
    } else if (sortOption === "ascending") {
      setPgData([...pgData].sort((a, b) => b.minPrice - a.minPrice));
    }
    // Check if the selected option is different from the current sort option
    // if (selectedOption !== sortOption) {
    //   setSortOption(selectedOption);
    //   setPgData([...pgData].reverse());
    // }
  };
  // console.log(filters);
  return (
    <>
      <div className="d-flex">
        <div className="filersection">
          <Filters
            filters={filters}
            sortOption={sortOption}
            setSortOption={setSortOption}
            handleSort={handleSort}
          />
        </div>
        <div className="listings-section">
          {pgData.length > 0 && (
            <div className="pg-list">
              {pgData.map((pg) => (
                <PGCard key={pg.id} pg={pg} />
              ))}
            </div>
          )}
          {pgData.length === 0 && (
            <div className="d-flex">
              <div className="error-container">
                <div>
                  <p className="no-pg-error">Sorry! No PG available.</p>
                </div>
                <div>
                  <p className="home-link">
                    Go back to <Link to={"/"}>Home</Link> Page
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div class="loading-overlay">
          <div class="loading-spinner"></div>
        </div>
      </div>
    </>
  );
};

export default PGListingPage;
