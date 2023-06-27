import React from "react";
import "./cities.css";
import { useNavigate } from "react-router-dom";
import { allPgs } from "../../api";
import swal from "sweetalert";

const Cities = () => {
  let navigate = useNavigate();

  const makeRequest = async (filter) => {
    let loadingOverlay = document.querySelector(".loading-overlay");
    // let errorMessage = document.querySelector(".error-msg");

    loadingOverlay.style.display = "block";
    const response = await allPgs({ city: filter });
    loadingOverlay.style.display = "none";
    if (response.status === "success") {
      navigate("/listedpg", { state: [response.data.pgs, { city: filter }] });
      window.scrollTo(0, 0);
    } else {
      swal("Error!", response.error);
      // errorMessage.textContent = response.error;
      // errorMessage.style.display = "block";
      // setTimeout(function () {
      //   errorMessage.style.display = "none";
      // }, 2000);
    }
  };

  return (
    <section id="cities-container">
      <h2 className="center h-primary ff_space text-center blue_clr fw-bold fs_xl">
        Popular Cities
      </h2>
      <div id="cities">
        <div class="box city-box city1" onClick={() => makeRequest("lukhnow")}>
          <h2 class="h2 center">DELHI</h2>
        </div>
        <div class="box city-box city2" onClick={() => makeRequest("kolkata")}>
          <h2 class="h2 center">MUMBAI</h2>
        </div>
        <div class="box city-box city3" onClick={() => makeRequest("delhi")}>
          <h2 class="h2 center">BANGALORE</h2>
        </div>
      </div>
      <div id="cities">
        <div
          class="box city-box city4"
          onClick={() => makeRequest("hyderabad")}
        >
          <h2 class="h2 center">JAIPUR</h2>
        </div>
        <div class="box city-box city5" onClick={() => makeRequest("mumbai")}>
          <h2 class="h2 center">BHOPAL</h2>
        </div>
      </div>
    </section>
  );
};

export default Cities;
