import React from "react";

function Testimonials() {
  return (
    <>
      <section>
        <div className="container py-4 py-sm-5">
          <h2 className="ff_space text-center blue_clr fw-bold fs_xl">
            Testimonials
          </h2>
          <div className="d-flex justify-content-center">
            <p className="ff_space text-center text_rgba_blac fw-normal fs_md col-lg-9 mb-0">
              This is what our client are saying
            </p>
          </div>
          <div className="row pt-5 justify-content-between">
            {/* row start */}
            <div className="col-sm-6 col-md-4 h-100 mt-4 mt-md-0">
              <div className="p-3 bg-white rounded-4 card_1">
                <h5 className="m-0 ff_space fw_700 fs_md">Himani Bansal </h5>
                <p className="m-0 ff_nunito fw-semibold fs_xsm">Hisar</p>
                <p className="m-0 ff_space fw_400 opacity-75 fs_xsm pe-lg-3 mt-2">
                  A big shout to PG seekers for making the PG hunt so easy and
                  comfortable.i recommend PG seekers to everyone who is looking
                  to find PGs.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 h-100 mt-4 mt-md-0">
              <div className="p-3 bg-white rounded-4 card_1">
                <h5 className="m-0 ff_space fw_700 fs_md">Gaurav Juneja </h5>
                <p className="m-0 ff_nunito fw-semibold fs_xsm">New Delhi</p>
                <p className="m-0 ff_space fw_400 opacity-75 fs_xsm pe-lg-3 mt-2">
                  Thanks to the PG seekers who gave me so many opions to choose
                  from, clearly the best website to find PGs for your
                  settlement.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 h-100 mt-4 mt-md-0">
              <div className="p-3 bg-white rounded-4 card_1">
                <h5 className="m-0 ff_space fw_700 fs_md">Udit Jain </h5>
                <p className="m-0 ff_nunito fw-semibold fs_xsm">Bangalore</p>
                <p className="m-0 ff_space fw_400 opacity-75 fs_xsm pe-lg-3 mt-2">
                  Just Great PG seekers ! I was able to find very spacious and
                  well maintained services apartment at a affordable price.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
