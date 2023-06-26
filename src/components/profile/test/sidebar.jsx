import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdatePassword from "./updatePassword";
import Personal from "./personal";

const Sidebar = ({ stateVars, activeButton, handleButtonClick }) => {
  //   const [activeButton, setActiveButton] = useState(null);

  //   const handleButtonClick = (buttonId) => {
  //     setActiveButton(buttonId);
  //   };
  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 sidebar">
        <div className="profile-card h-100">
          <div className="profile-card-body">
            <div className="account-settings">
              <div className="user-profile">
                <div className="user-avatar avatar">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Maxwell Admin"
                  />
                </div>
                <h5 className="user-name ff_space">{stateVars.name}</h5>
                <h6 className="user-email ff_space">{stateVars.email}</h6>
              </div>
              {stateVars.about && (
                <div className="about ff_space">
                  <h5>About</h5>
                  <p className="about-text">{stateVars.about}</p>
                </div>
              )}

              <ul class="nav flex-column nav-tabs">
                <h6 className="sidebar-heading">Personal</h6>
                <li class="nav-item ">
                  <Link
                    class={`nav-link ${
                      activeButton === "personal" ? "active-link" : ""
                    }`}
                    to="#"
                    onClick={() => handleButtonClick("personal")}
                  >
                    Personal Information
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class={`nav-link ${
                      activeButton === "password" ? "active-link" : ""
                    }`}
                    to="#"
                    onClick={() => handleButtonClick("password")}
                  >
                    Update Password
                  </Link>
                </li>
                <h6 className="sidebar-heading">PGs You own</h6>
                {stateVars.pgs.map((pg, i) => {
                  return (
                    <li class="nav-item">
                      <Link
                        class={`nav-link ${
                          activeButton === `pg${i + 1}` ? "active-link" : ""
                        }`}
                        to="#"
                        onClick={() => handleButtonClick(`pg${i + 1}`)}
                      >
                        {pg.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* {activeButton === "personal" ? <Personal /> : <UpdatePassword />} */}
    </>
  );
};

export default Sidebar;
