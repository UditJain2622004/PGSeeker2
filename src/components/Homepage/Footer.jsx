import React from "react";
import "./style.css"
function Footer() {
  return <section className="bg_blue">
    <div className=" container py-5">
      <div className="row py-lg-5 justify-content-between">
        {/* PG Seeker */}
        <div className="col-md-6 col-lg-4 mt-4 mt-lg-0 d-flex justify-content-center text-center text-lg-start">
          <div className="h-100">
            <a className=" ff_oleo fw_400 fs_lg text-white m-0" href="/">
              PG Seeker
            </a>
            <p className=" ff_nunito fw_400 fs_sm text-white mb-0 width_331">
              Solution for easy and flexible PG hunting. You can trust us
              anywhere through this platform
            </p>
          </div>
        </div>
        {/* Property */}
        <div className="col-md-6 col-lg-2 mt-4 mt-lg-0 d-flex justify-content-center text-center text-lg-start">
          <div className="h-100">
            <a className=" ff_oleo fw_400 fs_lg text-white m-0" href="/">
              Property
            </a>
            <li className="mt-3">
              <a
                href="/"
                className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0 hover_white hover_white"
              >
                Learning Modules
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/"
                className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0 hover_white"
              >
                Partnership
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/"
                className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0 hover_white"
              >
                Watch demo
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/"
                className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0 hover_white"
              >
                Event
              </a>
            </li>
          </div>
        </div>
        {/* About  */}
        <div className="col-md-6 col-lg-2 pe-0 mt-4 mt-lg-0 d-flex justify-content-center text-center text-lg-start">
          <div className="h-100">
            <a className=" ff_oleo fw_400 fs_lg text-white m-0" href="/">
              About
            </a>
            <li className="mt-3">
              <a
                href="/"
                className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0 hover_white"
              >
                Our Company
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/"
                className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0 hover_white"
              >
                Career
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/"
                className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0 hover_white"
              >
                Investors Relations
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/"
                className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0 hover_white"
              >
                Social Impact
              </a>
            </li>
          </div>
        </div>
        {/* Resources  */}
        <div className="d-flex mt-lg-0 col-md-6 col-lg-2 mt-4  justify-content-center text-center text-lg-start">
          <div className="h-100">
            <a className=" ff_oleo fw_400 fs_lg text-white m-0" href="/">
              Resources
            </a>
            <li className="mt-3">
              <a
                href="/"
                className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0 hover_white"
              >
                Contact
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/"
                className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0 hover_white"
              >
                Give feedback
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/"
                className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0 hover_white"
              >
                System status
              </a>
            </li>
            <li className="mt-2">
              <a
                href="/"
                className=" ff_nunito fw_400 fs_sm opacity-75 text-white m-0 hover_white"
              >
                Privacy Policy
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  </section>


};
export default Footer;


