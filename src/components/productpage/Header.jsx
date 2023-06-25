import React from "react";
import "./PGDetailsPage.css";
import { Carousel } from "react-carousel-minimal";
import stars_5 from "./images/stars_5.png";
import SharingOptions from "./sharingOptions";
import StarRating from "./StarRating";
import defaultPic from "./images/default.jpg";

// const share = [
//   { occupancy: 1, price: 8000, ac: false },
//   { occupancy: 2, price: 7000, ac: true },
//   { occupancy: 3, price: 6000, ac: false },
//   { occupancy: 4, price: 5000, ac: true },
//   { occupancy: 5, price: 4000, ac: true },
// ];

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
  // console.log(data.length !== 1);
  return (
    <>
      <div className="image-details-section">
        <div className="">
          <div className="pg-details-container">
            <div className="App">
              <div>
                <Carousel
                  data={data}
                  // time={2000}
                  width="600px"
                  // height="400px"
                  radius="10px"
                  slideNumber={data.length > 1}
                  slideNumberStyle={slideNumberStyle}
                  automatic={data.length > 1}
                  dots={data.length > 1}
                  pauseIconColor="white"
                  pauseIconSize="40px"
                  slideBackgroundColor="black"
                  slideImageFit="contain"
                  thumbnails={data.length > 1}
                  thumbnailWidth="100px"
                  style={{
                    Width: "700px",
                    Height: "500px",
                    margin: "20px 40px 100px 40px",
                  }}
                />
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
                  {headerDetails.address.locality}, {headerDetails.address.city}{" "}
                  ({headerDetails.address.pincode})
                </p>
              </div>

              <div className=" d-flex mt-3 align-items-center">
                <h5 className="fs_sm">PG Type:</h5>
                <p className=" pg_type ff_space fw_600 text_gray">
                  {pgTypeDisplayName[headerDetails.pgType]}
                </p>
              </div>
              <div className="d-flex mt-2 align-items-center">
                <h5 className="fs_sm">Ratings : </h5>
                <StarRating rating={headerDetails.ratingsAverage} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="pgPagehr"></hr>
      <div className="sharing-container">
        <div className="sharing-section">
          <h2 className="sharing-heading fs_xl py-2">Occupancy Options</h2>
          <SharingOptions options={headerDetails.sharing} />
        </div>
      </div>
    </>
    // <div className="container">
    //   <div className="image-details-section">
    //     <div className="pg-details-container">
    //       <div className="App">
    //         <div>
    //           <Carousel
    //             data={data}
    //             // time={2000}
    //             // width="600px"
    //             // height="400px"
    //             radius="10px"
    //             slideNumber={data.length > 1}
    //             slideNumberStyle={slideNumberStyle}
    //             automatic={data.length > 1}
    //             dots={data.length > 1}
    //             pauseIconColor="white"
    //             pauseIconSize="40px"
    //             slideBackgroundColor="black"
    //             slideImageFit="contain"
    //             thumbnails={data.length > 1}
    //             thumbnailWidth="100px"
    //             style={{
    //               Width: "700px",
    //               Height: "500px",
    //               margin: "20px 40px 100px 40px",
    //             }}
    //           />
    //         </div>
    //       </div>
    //       <div className="pg-description">
    //         <h2 className="pg-name ff_space">{headerDetails.name}</h2>
    //         <div className=" ff_space grey  mt-3 align-items-center">
    //           <h5>About The property</h5>
    //           {headerDetails.description}
    //         </div>
    //         <div className=" ff_space grey  mt-3 align-items-center">
    //           <h5>Address</h5>
    //           <p>
    //             {headerDetails.address.locality}, {headerDetails.address.city} (
    //             {headerDetails.address.pincode})
    //           </p>

    //         </div>

    //         <div className=" d-flex mt-3 align-items-center">
    //           <h5 className="fs_sm">PG Type:</h5>
    //           <p className=" pg_type ff_space fw_600 text_gray">
    //             {pgTypeDisplayName[headerDetails.pgType]}
    //           </p>
    //         </div>
    //         <div className="d-flex mt-2 align-items-center">
    //           <h5 className="fs_sm">Ratings:</h5>
    //           <img className="ms-3" src={stars_5} alt="stars_5" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* *************************************************************************************************************************************** */}
    //   <div className="container sharing-container">
    //     <div className="sharing-section">
    //       <h2 className="sharing-heading fs_xl py-2">Occupancy Options : </h2>
    //       <SharingOptions options={share} />
    //     </div>
    //   </div>

    // </div>
  );
}

export default Header;
