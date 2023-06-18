import React from "react";
import "./cities.css";
import { useNavigate } from "react-router-dom";
import { allPgs } from "../../api";

const Cities = () => {
  let navigate = useNavigate();

  const makeRequest = async (filter) => {
    console.log(filter);
    const response = await allPgs({ city: filter });
    // console.log(response);

    navigate("/listedpg", { state: response.data.pgs });
  };

  return (
    <section id="cities-container">
      <h2 className="center h-primary ff_space text-center blue_clr fw-bold fs_xl">
        Popular Cities
      </h2>
      <div id="cities">
        <div class="box city-box city1" onClick={() => makeRequest("delhi")}>
          <h2 class="h2 center">DELHI</h2>
        </div>
        <div class="box city-box city2" onClick={() => makeRequest("mumbai")}>
          <h2 class="h2 center">MUMBAI</h2>
        </div>
        <div
          class="box city-box city3"
          onClick={() => makeRequest("bangalore")}
        >
          <h2 class="h2 center">BANGALORE</h2>
        </div>
      </div>
      <div id="cities">
        <div class="box city-box city4" onClick={() => makeRequest("jaipur")}>
          <h2 class="h2 center">JAIPUR</h2>
        </div>
        <div class="box city-box city5" onClick={() => makeRequest("bhopal")}>
          <h2 class="h2 center">BHOPAL</h2>
        </div>
      </div>
    </section>
  );
};

export default Cities;
