import React, { useState } from "react";
import PGCard from "./PGCard";
import "./PGListingPage.css";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";

// const PGListingPage = ({ pgs }) => {
//   console.log(pgs);

//   return (
//     <div className="d-flex">
//       <div className="filersection">
//         <Filters />
//       </div>
//       <div className="listings-section">
//         <div className="pg-list">
//           {pgs.map((pg) => (
//             <PGCard key={pg.id} pg={pg} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const PGListingPage = ({ pgs }) => {
  console.log(pgs);

  return (
    <>
      {pgs.length > 0 && (
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
      )}
      {pgs.length === 0 && (
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
      )}
    </>
  );
};

export default PGListingPage;
