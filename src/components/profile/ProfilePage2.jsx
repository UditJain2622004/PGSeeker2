import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./profilePage2.css";

const ProfilePage2 = () => {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [about, setAbout] = useState(user.about);

  const handleDetailsChange = (e, setWhat) => {
    setWhat(e.target.value);
  };

  const logValues = () => {
    console.log(name, email, phone, about);
  };
  return (
    <>
      <div className="profile-container">
        <div className="row gutters">
          {/* <div className="sidebar"></div> */}
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
                    <h5 className="user-name ff_space">{user.name}</h5>
                    <h6 className="user-email ff_space">{user.email}</h6>
                  </div>
                  {user.about && (
                    <div className="about ff_space">
                      <h5>About</h5>
                      <p className="about-text">
                        I'm Yuki. Full Stack Designer I enjoy creating
                        user-centric, delightful and human experiences.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 main  ff_space">
            <div className="profile-card h-100">
              <div className="profile-card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mb-2 text-primary titles">
                      Personal Details
                    </h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 input-boxes">
                    <div className="form-group">
                      <label for="fullName">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter full name"
                        value={name}
                        onChange={(e) => handleDetailsChange(e, setName)}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="website">About</label>
                      <textarea
                        name=""
                        id="about"
                        cols="10"
                        rows="1"
                        className="form-control about-input"
                        placeholder="About You"
                        value={about}
                        onChange={(e) => handleDetailsChange(e, setAbout)}
                      ></textarea>
                      {/* <input
                        type="text"
                        className="form-control rest-input"
                        id="website"
                        placeholder="About"
                      /> */}
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 input-boxes">
                    <div className="form-group">
                      <label for="eMail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="eMail"
                        placeholder="Enter email ID"
                        value={email}
                        onChange={(e) => handleDetailsChange(e, setEmail)}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="phone">Phone</label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => handleDetailsChange(e, setPhone)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-8 col-md-12 col-sm-12 col-8">
                    <h6 className="mt-3 mb-2 text-primary titles">Address</h6>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 input-boxes">
                    {/* <div className="col-8"> */}
                    <div className="form-group">
                      <label for="Street">Street</label>
                      <input
                        type="text"
                        className="form-control rest-input"
                        id="Street"
                        placeholder="Enter Street"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="ciTy">City</label>
                      <input
                        type="text"
                        className="form-control rest-input "
                        id="ciTy"
                        placeholder="Enter City"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 input-boxes">
                    <div className="form-group">
                      <label for="sTate">State</label>
                      <input
                        type="text"
                        className="form-control"
                        id="sTate"
                        placeholder="Enter State"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label for="zIp">Zip Code</label>
                      <input
                        type="text"
                        className="form-control"
                        id="zIp"
                        placeholder="Zip Code"
                      />
                    </div>
                  </div>
                </div>
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="text-right">
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-secondary btns"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        id="submit"
                        name="submit"
                        className="btn btn-primary btns"
                        // onClick={logValues}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage2;
