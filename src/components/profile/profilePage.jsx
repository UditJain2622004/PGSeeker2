import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./profilePage.css";
import { getProfile, updateProfile } from "../../api";
import swal from "sweetalert";

const ProfilePage = () => {
  let user = useSelector((state) => state.user);
  const [name, setName] = useState("...");
  const [email, setEmail] = useState("...");
  const [phone, setPhone] = useState("...");
  const [about, setAbout] = useState("...");
  const [addressDetails, setAddressDetails] = useState({
    locality: user.address?.locality,
    city: user.address?.city,
    state: user.address?.state,
    pincode: user.address?.pincode,
  });
  const [pgs, setPGs] = useState([]);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handleDetailsChange = (e, setWhat) => {
    setWhat(e.target.value);
  };

  const handleAddressDetailsChange = (event) => {
    setAddressDetails({
      ...addressDetails,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    // Function to make the API request
    const fetchProfile = async () => {
      try {
        const response = await getProfile(user._id);
        if (response.status === "success") {
          const { user, pgs } = response.data;
          setName(user.name);
          setEmail(user.email);
          setPhone(user.phone);
          setAbout(user.about);
          if (user.address) setAddressDetails(user.address);

          setPGs(pgs);
        } else {
          swal("Error", response.error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProfile(); // Call the function to make the API request
  }, []);

  const updateMe = async () => {
    console.log(about);
    const updates = {
      name: name,
      email: email,
      phone: phone,
      about: about,
      address: addressDetails,
    };
    console.log(updates);
    const updatedUser = await updateProfile(updates, user._id);
    console.log(updatedUser);
    setName(updatedUser.data.user.name);
    setEmail(updatedUser.data.user.email);
    setPhone(updatedUser.data.user.phone);
    setAbout(updatedUser.data.user.about);
    if (updatedUser.address) setAddressDetails(updatedUser.address);
    user = updatedUser;
  };

  const logValues = () => {
    console.log(name, email, phone, about, addressDetails);
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
                    <h5 className="user-name ff_space">{name}</h5>
                    <h6 className="user-email ff_space">{email}</h6>
                  </div>
                  {user.about && (
                    <div className="about ff_space">
                      <h5>About</h5>
                      <p className="about-text">{about}</p>
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
                        Active
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
                    <h6 className="sidebar-heading">PGS You own</h6>
                    {pgs.map((pg, i) => {
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
                      <label htmlFor="fullName">Full Name</label>
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
                      <label htmlFor="website">About</label>
                      <textarea
                        name="about"
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
                      <label htmlFor="eMail">Email</label>
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
                      <label htmlFor="phone">Phone</label>
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
                      <label htmlFor="Locality">Locality</label>
                      <input
                        type="text"
                        className="form-control rest-input"
                        id="Locality"
                        name="locality"
                        placeholder="Enter Locality"
                        value={addressDetails.locality}
                        onChange={handleAddressDetailsChange}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="ciTy">City</label>
                      <input
                        type="text"
                        className="form-control rest-input "
                        id="ciTy"
                        name="city"
                        placeholder="Enter City"
                        value={addressDetails.city}
                        onChange={handleAddressDetailsChange}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 input-boxes">
                    <div className="form-group">
                      <label htmlFor="sTate">State</label>
                      <input
                        type="text"
                        className="form-control"
                        id="sTate"
                        name="state"
                        placeholder="Enter State"
                        value={addressDetails.state}
                        onChange={handleAddressDetailsChange}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="form-group">
                      <label htmlFor="pincode">Pincode</label>
                      <input
                        type="number"
                        className="form-control"
                        id="pincode"
                        name="pincode"
                        placeholder="Pincode"
                        value={addressDetails.pincode}
                        onChange={handleAddressDetailsChange}
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
                        onClick={updateMe}
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

export default ProfilePage;
