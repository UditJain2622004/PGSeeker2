import React from "react";
import home from "./images/House.png";
import tick from "./images/tick.svg";

export const ChooseUs = () => {
  return (
    <>
      <section>
        <div className="container py-4 py-sm-5">
          <div className="row py-lg-5 align-items-center justify-content-between">
            {/* img */}
            <div className="col-12 col-md-5 col-lg-5">
              <div className="w-100">
                <img className="w-100" src={home} alt="home_img" />
              </div>
            </div>
            {/* text */}
            <div className="col-12 mt-4 col-md-6 mt-lg-0">
              <h2 className="ff_space blue_clr fw_700 fs_xl">
                Why You Should Choose Us
              </h2>
              <p className=" ff_space fw-normal fs_sm text_rgba_blac">
                Creating quality urban lifestyles,building stronger communities
              </p>
              <div className="row pt-4">
                <div className="col-md-7 pe-md-0">
                  <div className="d-flex align-items-center">
                    <img src={tick} alt="tick" />
                    <p className="ms-3 m-0 ff_space fw_500 fs_sm">
                      World class
                    </p>
                  </div>
                  <div className="d-flex align-items-center pt-2">
                    <img src={tick} alt="tick" />
                    <p className="ms-3 m-0 ff_space fw_500 fs_sm">Trusted</p>
                  </div>
                </div>
                <div className="col-md-5 ps-md-5">
                  <div className="d-flex align-items-center pt-2 pt-md-0">
                    <img src={tick} alt="tick" />
                    <p className="ms-3 m-0 ff_space fw_500 fs_sm">Affordable</p>
                  </div>
                  <div className="d-flex align-items-center pt-2">
                    <img src={tick} alt="tick" />
                    <p className="ms-3 m-0 ff_space fw_500 fs_sm">Amenities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
