import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import Personal from "./personal";
import { useSelector } from "react-redux";
import { getProfile, updateProfile } from "../../../api";
import swal from "sweetalert";

const Main = () => {
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
    const updates = {
      name: name,
      email: email,
      phone: phone,
      about: about,
      address: addressDetails,
    };
    const updatedUser = await updateProfile(updates, user._id);
    // console.log(updatedUser);
    setName(updatedUser.data.user.name);
    setEmail(updatedUser.data.user.email);
    setPhone(updatedUser.data.user.phone);
    setAbout(updatedUser.data.user.about);
    if (updatedUser.address) setAddressDetails(updatedUser.address);
    user = updatedUser;
  };

  // const logValues = () => {
  //   console.log(name, email, phone, about, addressDetails);
  // };
  return (
    <>
      <div className="container">
        <div className="row profile-page">
          {/* <Sidebar stateVars={{ name, email, about, pgs }} /> */}
          <Sidebar
            activeButton={activeButton}
            handleButtonClick={handleButtonClick}
            stateVars={{ name, email, about, pgs }}
          />
          {/* <UpdatePassword /> */}
          <Personal
            stateVars={{ name, email, about, phone, addressDetails }}
            changeStateVars={{ setName, setAbout, setEmail, setPhone }}
            handleAddressDetailsChange={handleAddressDetailsChange}
            handleDetailsChange={handleDetailsChange}
            updateMe={updateMe}
          />
        </div>
      </div>
    </>

    // <div className="profile-container">
    //   <div className="row gutters">
    //     <Sidebar
    //       activeButton={activeButton}
    //       handleButtonClick={handleButtonClick}
    //       stateVars={{ name, email, about, pgs }}
    //     />
    //     {/* <UpdatePassword /> */}
    //     <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 ff_space">
    //       <div className="profile-card">
    //         <Personal
    //           stateVars={{ name, email, about, phone, addressDetails }}
    //           changeStateVars={{ setName, setAbout, setEmail, setPhone }}
    //           handleAddressDetailsChange={handleAddressDetailsChange}
    //           handleDetailsChange={handleDetailsChange}
    //           updateMe={updateMe}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Main;
