import React from "react";
import { useNavigate } from "react-router-dom";
import { allPgs } from "../../api";
import house1 from "./images/house1.jpg";
import house2 from "./images/house2.jpg";
import house3 from "./images/house3.jpg";
import arrow from "./images/arrow.png";
import "./header.css";
import swal from "sweetalert";

export const OurFeatured = () => {
  let navigate = useNavigate();

  const makeRequest = async (filter) => {
    let loadingOverlay = document.querySelector(".loading-overlay");
    // let errorMessage = document.querySelector(".error-msg");

    loadingOverlay.style.display = "block";
    const response = await allPgs({ pgType: filter });
    loadingOverlay.style.display = "none";
    console.log({ pgType: [filter] });
    if (response.status === "success") {
      navigate("/listedpg", {
        state: [response.data.pgs, { pgType: [filter] }],
      });
      window.scrollTo(0, 0);
    } else {
      swal("Error!", response.error);
      // const node = document.createElement("div");
      // const textnode = document.createTextNode("Water");
      // node.appendChild(textnode);
      // swal(
      //   "Contact Info.",
      //   `Contact No. - 1234567890
      // Email - abc@gmail.com`,
      //   "info",
      //   { buttons: false }
      // );

      // errorMessage.textContent = response.error;
      // errorMessage.style.display = "block";
      // setTimeout(function () {
      //   errorMessage.style.display = "none";
      // }, 2000);
    }
  };
  return (
    <>
      <section>
        <div className="container py-4 py-sm-5">
          <h2 className="ff_space text-center blue_clr fw-bold fs_xl">
            Explore PG Accomodations
          </h2>
          <div className="d-flex justify-content-center">
            <p className="ff_space text-center text_rgba_blac fw-normal fs_sm col-lg-10 mb-0">
              Find hassle-free PG accommodations designed for boys, girls, and
              co-living arrangements. Experience top-notch amenities, a
              comfortable living environment and locations that suit your needs
              and preferences.
            </p>
          </div>

          <div className="row pt-5 justify-content-between">
            {/* row start */}
            <div className="col-md-4 width_lg_31 h-100 mt-4 mt-md-0">
              <div className="card_1 p-2 px-4 border_radius_0_39 ">
                <img
                  className="w-100 border-hero accomodation-card"
                  src={house1}
                  alt="Rhouse1"
                  onClick={() => makeRequest("male")}
                />
                <div className="d-flex justify-content-between mt-2 align-items-center">
                  <h5 className="m-0 ff_space fw_500 fs_md">PG for Boys</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5
                    className="m-0 ff_space fw_400 fs_xsm opacity-75 accomodation-arrow"
                    onClick={() => makeRequest("male")}
                  >
                    Explore <img src={arrow} alt="" className="w_20" />
                  </h5>
                  <p className="m-0 ff_space fw_700 fs_xsm blue_clr">
                    Rs. 5000-7000
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 width_lg_31 h-100 mt-4 mt-md-0">
              <div className="card_1 p-2 px-4 border_radius_0_39 ">
                <img
                  className="w-100 border-hero accomodation-card"
                  src={house2}
                  alt="Rhouse1"
                  onClick={() => makeRequest("female")}
                />
                <div className="d-flex justify-content-between mt-2 align-items-center">
                  <h5 className="m-0 ff_space fw_500 fs_md">PG for Girls</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5
                    className="m-0 ff_space fw_400 fs_xsm opacity-75 accomodation-arrow"
                    onClick={() => makeRequest("female")}
                  >
                    Explore <img src={arrow} alt="" className="w_20" />
                  </h5>
                  <p className="m-0 ff_space fw_700 fs_xsm blue_clr">
                    Rs. 5000-7000
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 width_lg_31 h-100 mt-4 mt-md-0">
              <div className="card_1 p-2 px-4 border_radius_0_39 ">
                <img
                  className="w-100 border-hero accomodation-card"
                  src={house3}
                  alt="Rhouse1"
                  onClick={() => makeRequest("coLiving")}
                />
                <div className="d-flex justify-content-between mt-2 align-items-center">
                  <h5 className="m-0 ff_space fw_500 fs_md">Co-Living PG</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5
                    className="m-0 ff_space fw_400 fs_xsm opacity-75 accomodation-arrow"
                    onClick={() => makeRequest("coLiving")}
                  >
                    Explore <img src={arrow} alt="" className="w_20" />
                  </h5>
                  <p className="m-0 ff_space fw_700 fs_xsm blue_clr">
                    Rs. 5000-7000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
