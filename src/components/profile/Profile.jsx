import React, { useState, useEffect } from "react";
import Sidebar from "./test/sidebar";
import Personal from "./test/personal";
import UpdatePassword from "./test/updatePassword";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProfile, updateProfile } from "../../api";
import swal from "sweetalert";
import "./profilePage.css";

const Profile = () => {
  let user = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [addressDetails, setAddressDetails] = useState({
    locality: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [pgs, setPGs] = useState([]);
  const [activeButton, setActiveButton] = useState("personal");

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
      const Loader = document.querySelector(".loading-overlay");
      try {
        Loader.style.display = "block";
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
      } finally {
        Loader.style.display = "None";
      }
    };

    fetchProfile(); // Call the function to make the API request
  }, []);

  const updateMe = async () => {
    const Loader = document.querySelector(".loading-overlay");
    const updates = {
      name: name,
      email: email,
      phone: phone,
      about: about,
      address: addressDetails,
    };
    console.log(updates);
    Loader.style.display = "block";
    const updatedUser = await updateProfile(updates, user._id);
    if (updatedUser.status === "success") {
      console.log(updatedUser);
      setName(updatedUser.data.user.name);
      setEmail(updatedUser.data.user.email);
      setPhone(updatedUser.data.user.phone);
      setAbout(updatedUser.data.user.about);
      if (updatedUser.address) setAddressDetails(updatedUser.address);
      user = updatedUser.data.user;
      swal({
        title: "Success!",
        text: "Changes Saved!",
        icon: "success",
        timer: 2000,
      });
    } else {
      swal("Error", updatedUser.error);
    }

    Loader.style.display = "none";
  };
  return (
    <>
      <div className="container">
        <div className="row profile-page">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 sidebar">
            <div className="profile-card">
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
                  {about && (
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
                    {pgs.length > 0 && (
                      <h6 className="sidebar-heading">PGs You own</h6>
                    )}

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

          {activeButton === "password" ? (
            <UpdatePassword user={user} />
          ) : (
            <Personal
              stateVars={{ name, email, about, phone, addressDetails }}
              changeStateVars={{ setName, setAbout, setEmail, setPhone }}
              handleAddressDetailsChange={handleAddressDetailsChange}
              handleDetailsChange={handleDetailsChange}
              updateMe={updateMe}
            />
          )}
        </div>
      </div>
      <div class="loading-overlay">
        <div class="loading-spinner"></div>
      </div>
    </>
  );
};

export default Profile;
