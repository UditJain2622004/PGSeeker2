import React, { useState } from "react";
import PGCard from "./PGCard";
import "./PGListingPage.css"
import Filters from "../Filters/Filters";
const PGListingPage = ({ pgs }) => {


  return (
    <div className="d-flex">
      <div className="filersection">
        <Filters />
      </div>
      <div className="listings-section">
        <div className="pg-list">
          {pgs.map((pg) => (
            <PGCard key={pg.id} pg={pg} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PGListingPage;
