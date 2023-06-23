import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { createPG } from "./../../api";
import CheckBoxInput from "./checkboxInput";
import AddressInput from "./addressInput";
import PgAmenitiesLine from "./pgAmenitiesLine";

import "./PGOwnerForm.css";
import swal from "sweetalert";

const rules = {
  guests: "Guests",
  smoking: "Smoking",
  loudMusicAllowed: "Loud Music",
  alcoholAllowed: "Alcohol",
};
// const rules = ["guests", "smoking", "loudMusicAllowed", "alcoholAllowed"];

const amenities = {
  ac: "ac",
  fridge: "fridge",
  wifi: "wifi",
  parking: "parking",
  tv: "tv",
  nonVeg: "nonVeg",
  tiffin: "tiffin",
  laundry: "laundry",
  lift: "lift",
  microwave: "microwave",
  cleaning: "cleaning",
  warden: "warden",
  cctv: "cctv",
  selfCooking: "selfCooking",
  attachWashroom: "attachWashroom",
  wardrobe: "wardrobe",
};

const PGOwnerForm = () => {
  const user = useSelector((state) => state.user);
  // console.log(user);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [sharingOptions, setSharingOptions] = useState([]);

  const [pgDetails, setPGDetails] = useState({
    name: "",
    description: "",
    pgType: "",
  });

  const [addressDetails, setAddressDetails] = useState({
    locality: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [pgRules, setPGRules] = useState({
    guests: false,
    // pets: false,
    smoking: false,
    loudMusicAllowed: false,
    alcoholAllowed: false,
    securityDeposit: "",
    noticePeriod: "",
    gateClosingTime: "",
  });

  const [ContactInfo, setContactInfo] = useState({
    phone: "",
    email: user.email,
  });

  const [pgAmenities, setPGAmenities] = useState({
    ac: false,
    fridge: false,
    wifi: false,
    parking: false,
    tv: false,
    nonVeg: false,
    tiffin: false,
    laundry: false,
    lift: false,
    microwave: false,
    cleaning: false,
    warden: false,
    cctv: false,
    selfCooking: false,
    attachWashroom: false,
    wardrobe: false,
    powerBackup: false,
    library: false,
  });

  const handleAddSharingOption = () => {
    setSharingOptions([
      ...sharingOptions,
      { occupancy: "", price: 0, ac: false },
    ]);
  };

  const handleRemoveSharingOption = (index) => {
    const updatedOptions = [...sharingOptions];
    updatedOptions.splice(index, 1);
    setSharingOptions(updatedOptions);
  };

  const handleSharingOptionChange = (index, field, value) => {
    const updatedOptions = [...sharingOptions];
    updatedOptions[index][field] = value;
    setSharingOptions(updatedOptions);
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = () => {
        newImages.push({ file, dataURL: reader.result });

        if (newImages.length === files.length) {
          setImages([...images, ...newImages]);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageDeselect = (index, event) => {
    if (event) {
      event.preventDefault();
    }
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handlePGDetailsChange = (event) => {
    setPGDetails({ ...pgDetails, [event.target.name]: event.target.value });
  };

  const handleAddressDetailsChange = (event) => {
    setAddressDetails({
      ...addressDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handlePGRulesChange = (event) => {
    if (event.target.type == "checkbox") {
      setPGRules({
        ...pgRules,
        [event.target.name]: event.currentTarget.checked,
      });
    } else {
      setPGRules({ ...pgRules, [event.target.name]: event.target.value });
    }
  };

  const handlePgAmenitiesChange = (event) => {
    setPGAmenities({
      ...pgAmenities,
      [event.target.name]: event.currentTarget.checked,
    });
  };

  const handleContactInfo = (event) => {
    setContactInfo({ ...ContactInfo, [event.target.name]: event.target.value });
  };
  // const [pgData, setPGData] = useState({});

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let loadingOverlay = document.querySelector(".loading-overlay");
    let successMessage = document.querySelector(".success-message");
    let errorMessage = document.querySelector(".error-msg");
    let form = document.querySelector(".form-container");

    loadingOverlay.style.display = "block";
    // successMessage.style.display = "block";

    const { name, description, pgType } = pgDetails;
    const { noticePeriod, securityDeposit, gateClosingTime } = pgRules;
    const pg_Amenities = [pgAmenities];
    const pg_rules = [pgRules];
    // setContactInfo({ ...ContactInfo, email: user.email });

    const pgData = new FormData();
    // Add other fields to the FormData
    pgData.append("name", name);
    pgData.append("description", description);
    pgData.append("pgType", pgType);
    pgData.append("userID", user._id);

    // Append images to FormData
    images.forEach((image) => {
      pgData.append(`images`, image.file);
    });
    pgData.append("pgAmenities", JSON.stringify(pg_Amenities));
    pgData.append("sharing", JSON.stringify(sharingOptions));
    pgData.append("address", JSON.stringify(addressDetails));
    pgData.append("pgContactInfo", JSON.stringify(ContactInfo));
    pgData.append("pgRules", JSON.stringify(pg_rules));
    pgData.append("noticePeriodDays", noticePeriod);
    pgData.append("securityDeposit", securityDeposit);
    pgData.append("gateClosingTime", gateClosingTime);

    pgData.forEach((value, key) => {
      console.log("key %s: value %s", key, value);
    });
    console.log(pg_rules);

    const response = await createPG(pgData);
    // console.log(response); // log the response from the server
    if (response.status === "success") {
      form.reset();
      loadingOverlay.style.display = "none";
      swal(
        "PG Listed Successfully!!",
        "Be Ready To Welcome Some New Guests",
        "success"
      );
      // successMessage.style.display = "block";
      setTimeout(function () {
        // successMessage.style.display = "none";
        navigate("/");
        window.scrollTo(0, 0);
      }, 2000);
    } else if (response.status === "imageUploadFailed") {
      loadingOverlay.style.display = "none";
      swal(
        "PG Listed Successfully!!",
        "But for some reason, images could be uploaded. You can retry uploading them by going to your profile.",
        "warning"
      );
    } else {
      // Handle error scenario

      console.log(response);
      console.log(response.error);
      console.log(pgData);
      if (response.error.startsWith("Pg validation failed:")) {
        response.error = "Please Enter All Required Fields!!";
      }

      swal("Error!", response.error);
      // errorMessage.textContent = response.error;
      // errorMessage.style.display = "block";
      // setTimeout(function () {
      //   errorMessage.style.display = "none";
      // }, 2000);
      // console.log(form);
      // form.reset();
      loadingOverlay.style.display = "none";
    }
  };

  return (
    <div className="container complete-page">
      <form className="form-container" onSubmit={handleFormSubmit}>
        <h3 className="heading">PG DETAILS</h3>
        <hr />
        <div className="complete-form">
          {/* Name and description **********************************************************************************************/}
          <div className="row name parts part1">
            {/* <div className="form-group"> */}
            <div className="col-6 col-md-4">
              <label htmlFor="name">
                <p className="input-heading">
                  Name<span className="required-marker"> *</span>
                </p>
              </label>
            </div>
            <div className="col-12 col-md-8">
              <input
                type="text"
                id="name"
                name="name"
                size="10"
                // value={user.name}
                value={pgDetails.name}
                onChange={handlePGDetailsChange}
              />
            </div>
            {/* </div> */}
          </div>
          <div className="row description parts part2">
            {/* <div className="form-group"> */}
            <div className="col-6 col-md-4">
              <label htmlFor="description">
                <p className="input-heading">
                  Description<span className="required-marker"> *</span>
                </p>
              </label>
            </div>
            <div className="col-12 col-md-8">
              <textarea
                // rows="2"
                // cols="30"
                className=""
                id="description"
                name="description"
                value={pgDetails.description}
                onChange={handlePGDetailsChange}
              />
            </div>
            {/* </div> */}
          </div>
          {/* <hr></hr> */}
          {/* PgType **********************************************************************************************/}
          <div className="row pgtype parts part3">
            {/* <div className="form-group"> */}
            <div className="col-6 col-md-4">
              <label htmlFor="pgType">
                <p className="input-heading">
                  PG Type<span className="required-marker"> *</span>
                </p>
              </label>
            </div>
            <div className="col-12 col-md-8">
              <div className="radio-buttons">
                <div>
                  <input
                    type="radio"
                    id="male"
                    name="pgType"
                    value="male"
                    checked={pgDetails.pgType === "male"}
                    onChange={handlePGDetailsChange}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="female"
                    name="pgType"
                    value="female"
                    checked={pgDetails.pgType === "female"}
                    onChange={handlePGDetailsChange}
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="coLiving"
                    name="pgType"
                    value="coLiving"
                    // checked={pgDetails.pgType === "coliving"}
                    onChange={handlePGDetailsChange}
                  />
                  <label htmlFor="coLiving">Co-Living</label>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
          {/* <hr></hr> */}
          {/* Address **********************************************************************************************/}
          {/* <div className="address row"> */}
          <AddressInput
            partNum={4}
            handleChange={handleAddressDetailsChange}
            heading={`Address`}
            subHeading={"locality"}
            stateVar={addressDetails}
            key={1}
            inputType={"text"}
          />
          <AddressInput
            partNum={5}
            handleChange={handleAddressDetailsChange}
            heading={""}
            subHeading={"city"}
            stateVar={addressDetails}
            key={2}
            inputType={"text"}
          />
          <AddressInput
            partNum={6}
            handleChange={handleAddressDetailsChange}
            heading={""}
            subHeading={"state"}
            stateVar={addressDetails}
            key={3}
            inputType={"text"}
          />
          <AddressInput
            partNum={7}
            handleChange={handleAddressDetailsChange}
            heading={""}
            subHeading={"pincode"}
            stateVar={addressDetails}
            key={4}
            inputType={"number"}
          />
          {/* <div className="row sub-address parts part4">
            <div className="col-6 col-md-4">
              <label htmlFor="address">
                <p className="input-heading">Address :</p>
              </label>
            </div>

            <div className="col-6 col-md-2">
              <label htmlFor="locality">Locality :</label>
            </div>
            <div className="col-6 col-md-4">
              <input
                type="text"
                id="locality"
                name="locality"
                value={addressDetails.locality}
                onChange={handleAddressDetailsChange}
              />
            </div>

          </div>
          <div className="row sub-address parts part5">
            <div className="col-6 col-md-4">
              <label htmlFor="address">
                <p className="input-heading"></p>
              </label>
            </div>

            <div className="col-6 col-md-2">
              <label htmlFor="city">City :</label>
            </div>
            <div className="col-6 col-md-4">
              <input
                type="text"
                id="city"
                name="city"
                value={addressDetails.city}
                onChange={handleAddressDetailsChange}
              />
            </div>

          </div>
          <div className="row sub-address parts part6">
            <div className="col-6 col-md-4">
              <label htmlFor="address">
                <p className="input-heading"></p>
              </label>
            </div>

            <div className="col-6 col-md-2">
              <label htmlFor="state">State :</label>
            </div>
            <div className="col-6 col-md-4">
              <input
                type="text"
                id="state"
                name="state"
                value={addressDetails.state}
                onChange={handleAddressDetailsChange}
              />
            </div>

          </div>
          <div className="row sub-address parts part7">
            <div className="col-6 col-md-4">
              <label htmlFor="address">
                <p className="input-heading"></p>
              </label>
            </div>

            <div className="col-6 col-md-2">
              <label htmlFor="pincode">Pincode :</label>
            </div>
            <div className="col-6 col-md-4">
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={addressDetails.pincode}
                onChange={handleAddressDetailsChange}
              />
            </div>

          </div> */}
          {/* Sharing Options **********************************************************************************************/}
          <div className="row sharing parts part8">
            {/* <div className="form-group"> */}
            <div className="col-6 col-md-4">
              <label htmlFor="sharingoption">
                <p className="input-heading">
                  Sharing Options<span className="required-marker"> *</span>
                </p>
              </label>
            </div>
            <div className="col-12 col-md-8">
              {sharingOptions.map((option, index) => (
                <div key={index} className="sharingoption">
                  <label>
                    Occupancy<span className="required-marker"> * </span>
                    <input
                      className="sharingoptionfield"
                      type="number"
                      value={option.occupancy}
                      onChange={(e) =>
                        handleSharingOptionChange(
                          index,
                          "occupancy",
                          e.target.value
                        )
                      }
                    />
                  </label>
                  <label>
                    Price<span className="required-marker"> * </span>
                    <input
                      className="sharingoptionfield"
                      type="number"
                      value={option.price}
                      onChange={(e) =>
                        handleSharingOptionChange(
                          index,
                          "price",
                          e.target.value
                        )
                      }
                    />
                  </label>
                  <label>
                    AC:
                    <input
                      className="sharingoptionfield"
                      type="checkbox"
                      checked={option.ac}
                      onChange={(e) =>
                        handleSharingOptionChange(index, "ac", e.target.checked)
                      }
                    />
                  </label>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={() => handleRemoveSharingOption(index)}
                  >
                    <span className="cross">&#10005;</span>
                  </button>
                </div>
              ))}
              <button
                className="btn btn-outline-success p-1 btn-sm "
                type="button"
                onClick={handleAddSharingOption}
              >
                Add Sharing Option
              </button>
            </div>
            {/* </div> */}
          </div>
          {/* <hr />*/}
          {/* PG Rules **********************************************************************************************/}
          <div className="row rules parts part9">
            <div className="col-6 col-md-4">
              <label htmlFor="pgrules">
                <p className="input-heading">PG rules</p>
              </label>
            </div>
            <div className="col-12 col-md-8">
              <div className="rules-row1">
                <CheckBoxInput
                  fields={rules}
                  type={pgRules}
                  handleChange={handlePGRulesChange}
                  allowed={false}
                />
              </div>
            </div>
          </div>
          <div className="row security-deposit parts part10">
            <div className="col-6 col-md-4">
              <label htmlFor="securityDeposit">
                <p className="input-heading">Security Deposit (in INR)</p>
              </label>
            </div>
            <div className="col-12 col-md-8">
              <input
                type="number"
                id="securityDeposit"
                name="securityDeposit"
                value={pgRules.securityDeposit}
                onChange={handlePGRulesChange}
              />
            </div>
          </div>
          <div className="row notice-period parts part11">
            <div className="col-6 col-md-4">
              <label htmlFor="noticePeriod">
                <p className="input-heading">Notice Period (in days)</p>
              </label>
            </div>
            <div className="col-12 col-md-8">
              <input
                type="number"
                id="noticePeriod"
                name="noticePeriod"
                value={pgRules.noticePeriod}
                onChange={handlePGRulesChange}
              />
            </div>
          </div>
          <div className="row gate-closing-time parts part12">
            <div className="col-6 col-md-4">
              <label htmlFor="gateClosingTime">
                <p className="input-heading">Gate Closing Time</p>
              </label>
            </div>
            <div className="col-12 col-md-8">
              <input
                type="time"
                id="gateClosingTime"
                name="gateClosingTime"
                value={pgRules.gateClosingTime}
                onChange={handlePGRulesChange}
              />
            </div>
          </div>
          {/* Amenities **********************************************************************************************/}
          <PgAmenitiesLine
            start={0}
            end={3}
            heading={"PG Amenities"}
            partNumber={13}
            stateVar={pgAmenities}
            handleChange={handlePgAmenitiesChange}
          />
          <PgAmenitiesLine
            start={3}
            end={6}
            heading={""}
            partNumber={14}
            stateVar={pgAmenities}
            handleChange={handlePgAmenitiesChange}
          />
          <PgAmenitiesLine
            start={6}
            end={9}
            heading={""}
            partNumber={15}
            stateVar={pgAmenities}
            handleChange={handlePgAmenitiesChange}
          />
          <PgAmenitiesLine
            start={9}
            end={12}
            heading={""}
            partNumber={16}
            stateVar={pgAmenities}
            handleChange={handlePgAmenitiesChange}
          />
          <PgAmenitiesLine
            start={12}
            end={15}
            heading={""}
            partNumber={17}
            stateVar={pgAmenities}
            handleChange={handlePgAmenitiesChange}
          />
          <PgAmenitiesLine
            start={15}
            end={18}
            heading={""}
            partNumber={18}
            stateVar={pgAmenities}
            handleChange={handlePgAmenitiesChange}
          />
          {/* Contact Info. **********************************************************************************************/}
          <div className="row contact parts part19">
            {/* <div className="form-group"> */}
            <div className="col-6 col-md-4">
              <label htmlFor="contact">
                <p className="input-heading">
                  Contact Info<span className="required-marker"> *</span>
                </p>
              </label>
            </div>
            <div className="col-6 col-md-2">
              <label htmlFor="phone">Phone</label>
            </div>
            <div className="col-6 col-md-4">
              <input
                type="number"
                id="phone"
                name="phone"
                value={ContactInfo.phone}
                onChange={handleContactInfo}
                onWheel={(e) => {
                  // e.preventDefault();
                  const delta = Math.sign(e.deltaY);
                  if (delta > 0) {
                    console.log("Scrolling down");
                    const phone = ContactInfo.phone;
                    setContactInfo((phone) => ({
                      ...phone,
                      phone: phone.phone + 1,
                    }));
                  } else if (delta < 0) {
                    console.log("Scrolling up");
                    setContactInfo({
                      ...ContactInfo,
                      phone: ContactInfo.phone - 1,
                    });
                  }
                  console.log(e.target.value);
                }}
              />
            </div>
            {/* </div> */}
          </div>
          {/* Images **********************************************************************************************/}
          <div className="row images parts part20">
            {/* <div className="form-group"> */}
            <div className="col-6 col-md-4">
              <label htmlFor="images">
                <p className="input-heading">Images</p>
              </label>
            </div>
            <div className="col-12 col-md-8">
              <div>
                <div className="file-input">
                  Choose a file
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                  />
                </div>

                <div className="img-container">
                  {images.map((image, index) => (
                    <div key={index} className="image-wrapper">
                      <img
                        className="small-image"
                        src={image.dataURL}
                        alt={` ${index}`}
                      />
                      <button
                        className="deselect-button"
                        onClick={(event) => handleImageDeselect(index, event)}
                      >
                        <span className="cross">&#10005;</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <hr />
        <div className="submit-button">
          <button type="submit" className="form-submit-buttom">
            Submit
          </button>
        </div>
      </form>
      <div className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>
      <div className="message success-message">
        <i className="success-icon">&#10003;</i>
        <p>PG Listed Successfully!</p>
      </div>
      {/* <div className="message error-msg">
        <i className="error-icon">&#10007;</i>
        <p>Error! Please Try Again</p>
      </div> */}
      {/* <div className="success-message"></div> */}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };

// export default connect(mapStateToProps)(PGOwnerForm);
export default PGOwnerForm;
