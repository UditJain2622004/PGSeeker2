import React, { useState } from "react";
import "./PGDetailsPage.css";
import { Carousel } from "react-carousel-minimal";
import stars_5 from "./images/stars_5.png";

import pg1 from "./PG/pic2.png";
import pg2 from "./PG/pic3.png";
import pg3 from "./PG/pic4.png";
import pg4 from "./PG/pic5.png";
import pg5 from "./PG/pic6.png";
import pg6 from "./PG/pic7.png";
import defaultPic from "./images/default.jpg";

function Header({ headerDetails }) {
  console.log(headerDetails.images);
  const pgTypeDisplayName = {
    male: "Male",
    female: "Female",
    coLiving: "Co-Living",
  };
  const data = [];
  headerDetails.images.forEach((el) => data.push({ image: el }));
  if (data.length === 0) {
    data.push({ image: defaultPic });
  }
  console.log(data);
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="container">
      <div className="pg-details-container">
        <div className="App">
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "0 20px",
              }}
            >
              <Carousel
                data={data}
                // time={1}
                width="600px"
                height="400px"
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="black"
                slideImageFit="contain"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  Width: "700px",
                  Height: "500px",
                  margin: "20px 40px 100px 40px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="pg-description">
          <h2 className="pg-name ff_space">{headerDetails.name}</h2>
          <div className=" ff_space grey  mt-3 align-items-center">
            <h5>About The property</h5>
            {headerDetails.description}
          </div>
          <div className=" ff_space grey  mt-3 align-items-center">
            <h5>Address</h5>
            <p>
              {headerDetails.address.locality}, {headerDetails.address.city} (
              {headerDetails.address.pincode})
            </p>
            {/* <p>
              {headerDetails.address.pincode},{headerDetails.address.state}
            </p> */}
          </div>
          {/* <div className="address ff_space grey">
            Address: The Haven is a mixed-gender PG located in Gachibowli,
            Hyderabad. It is a spacious and well-maintained property...
          </div> */}

          <div className=" d-flex mt-3 align-items-center">
            <h5 className="fs_sm">PG Type:</h5>
            <p className=" pg_type ff_space fw_600 text_gray">
              {pgTypeDisplayName[headerDetails.pgType]}
            </p>
          </div>
          <div className="d-flex mt-2 align-items-center">
            <h5 className="fs_sm">Ratings:</h5>
            <img className="ms-3" src={stars_5} alt="stars_5" />
          </div>
        </div>
      </div>

      {/* *************************************************************************************************************************************** */}
      <div className="d-flex justify-content-evenly row">
        <div class="card w-25 align-content-center justify-content-center col-6">
          <h5 class="card-header ">Sharing: Single</h5>
          <div className="d-flex">
            <div class="card-body">
              <h5 class="card-title">With AC</h5>
              <p class="card-text fs-18">
                <span className="fw_700">Rs.</span> 10000
              </p>
            </div>
            <div class="card-body">
              <h5 class="card-title">Without AC</h5>
              <p class="card-text fs-18">
                <span className="fw_700">Rs.</span> 8000
              </p>
            </div>
          </div>
        </div>

        <div class="card w-25 align-content-center justify-content-center">
          <h5 class="card-header ">Sharing: Double</h5>
          <div className="d-flex">
            <div class="card-body">
              <h5 class="card-title">With AC</h5>
              <p class="card-text fs-18">
                <span className="fw_700">Rs.</span> 10000
              </p>
            </div>
            <div class="card-body">
              <h5 class="card-title">Without AC</h5>
              <p class="card-text fs-18">
                <span className="fw_700">Rs.</span> 8000
              </p>
            </div>
          </div>
        </div>
        <div class="card w-25 align-content-center justify-content-center">
          <h5 class="card-header ">Sharing: Triple</h5>
          <div className="d-flex">
            <div class="card-body">
              <h5 class="card-title">With AC</h5>
              <p class="card-text fs-18">
                <span className="fw_700">Rs.</span> 10000
              </p>
            </div>
            <div class="card-body">
              <h5 class="card-title">Without AC</h5>
              <p class="card-text fs-18">
                <span className="fw_700">Rs.</span> 8000
              </p>
            </div>
          </div>
        </div>
        {/* *************************************************************************************************************************************** */}
      </div>
    </div>
  );
}

export default Header;
