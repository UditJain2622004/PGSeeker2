import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { createPG } from "./../../api";
import CheckBoxInput from "./checkboxInput";
import PgAmenitiesLine from "./pgAmenitiesLine";

import "./PGOwnerForm.css";

const rules = ["guests", "smoking", "loudMusic", "alcohol"];

const amenities = [
  "ac",
  "fridge",
  "wifi",
  "parking",
  "tv",
  "nonVeg",
  "tiffin",
  "laundry",
  "lift",
  "microwave",
  "cleaning",
  "warden",
  "cctv",
  "self cooking",
  "attach washroom",
  "wardrobe",
];

const PGOwnerForm = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
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
    loudMusic: false,
    alcohol: false,
    securityDeposit: "",
    noticePeriod: "",
    gateClosingTime: "",
  });

  const [ContactInfo, setContactInfo] = useState({
    phone: "",
    email: user.email,
  });

  const [pgAmenities, setPGAmenities] = useState({
    wifi: false,
    ac: false,
    parking: false,
    fourWheelerParking: false,
    roomCleaning: false,
    tv: false,
    fridge: false,
    waterCooler: false,
    warden: false,
    microwave: false,
    lift: false,
    nonVeg: false,
    veg: false,
    powerBackup: false,
    laundry: false,
  });

  const handleAddSharingOption = () => {
    setSharingOptions([
      ...sharingOptions,
      { occupancy: "", price: "", ac: false },
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

  const handleImageDeselect = (index) => {
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

    // pgData.forEach((value, key) => {
    //   console.log("key %s: value %s", key, value);
    // });

    const response = await createPG(pgData);
    // console.log(response); // log the response from the server
    if (response.status === "success") {
      form.reset();
      loadingOverlay.style.display = "none";
      successMessage.style.display = "block";
      setTimeout(function () {
        successMessage.style.display = "none";
        navigate("/");
      }, 2000);
    } else {
      // Handle error scenario
      console.log(response.error);
      // errorMessage.textContent =
      errorMessage.style.display = "block";
      setTimeout(function () {
        errorMessage.style.display = "none";
      }, 2000);
      console.log(form);
      form.reset();
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
          <div class="row name parts part1">
            {/* <div className="form-group"> */}
            <div class="col-6 col-md-4">
              <label htmlFor="name">
                <p className="input-heading">Name :</p>
              </label>
            </div>
            <div class="col-12 col-md-8">
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
            <div class="col-6 col-md-4">
              <label htmlFor="description">
                <p className="input-heading">Description :</p>
              </label>
            </div>
            <div class="col-12 col-md-8">
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
            <div class="col-6 col-md-4">
              <label htmlFor="pgType">
                <p className="input-heading">PG Type :</p>
              </label>
            </div>
            <div class="col-12 col-md-8">
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
          <div className="row sub-address parts part4">
            {/* <div className="form-group"> */}
            <div class="col-6 col-md-4">
              <label htmlFor="address">
                <p className="input-heading">Address :</p>
              </label>
            </div>

            <div class="col-6 col-md-2">
              <label htmlFor="locality">Locality :</label>
            </div>
            <div class="col-6 col-md-4">
              <input
                type="text"
                id="locality"
                name="locality"
                value={addressDetails.locality}
                onChange={handleAddressDetailsChange}
              />
            </div>

            {/* </div> */}
          </div>
          <div className="row sub-address parts part5">
            {/* <div className="form-group"> */}
            <div class="col-6 col-md-4">
              <label htmlFor="address">
                <p className="input-heading"></p>
              </label>
            </div>

            <div class="col-6 col-md-2">
              <label htmlFor="city">City :</label>
            </div>
            <div class="col-6 col-md-4">
              <input
                type="text"
                id="city"
                name="city"
                value={addressDetails.city}
                onChange={handleAddressDetailsChange}
              />
            </div>

            {/* </div> */}
          </div>
          <div className="row sub-address parts part6">
            {/* <div className="form-group"> */}
            <div class="col-6 col-md-4">
              <label htmlFor="address">
                <p className="input-heading"></p>
              </label>
            </div>

            <div class="col-6 col-md-2">
              <label htmlFor="state">State :</label>
            </div>
            <div class="col-6 col-md-4">
              <input
                type="text"
                id="state"
                name="state"
                value={addressDetails.state}
                onChange={handleAddressDetailsChange}
              />
            </div>

            {/* </div> */}
          </div>
          <div className="row sub-address parts part7">
            {/* <div className="form-group"> */}
            <div class="col-6 col-md-4">
              <label htmlFor="address">
                <p className="input-heading"></p>
              </label>
            </div>

            <div class="col-6 col-md-2">
              <label htmlFor="pincode">Pincode :</label>
            </div>
            <div class="col-6 col-md-4">
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={addressDetails.pincode}
                onChange={handleAddressDetailsChange}
              />
            </div>

            {/* </div> */}
          </div>
          {/* </div> */}
          {/* <hr></hr> */}
          {/* Sharing Options **********************************************************************************************/}
          <div className="row sharing parts part8">
            {/* <div className="form-group"> */}
            <div class="col-6 col-md-4">
              <label htmlFor="sharingoption">
                <p className="input-heading">Sharing Options :</p>
              </label>
            </div>
            <div class="col-12 col-md-8">
              {sharingOptions.map((option, index) => (
                <div key={index} className="sharingoption">
                  <label>
                    Occupancy:
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
                    Price:
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
            <div class="col-6 col-md-4">
              <label htmlFor="pgrules">
                <p className="input-heading">PG rules :</p>
              </label>
            </div>
            <div class="col-12 col-md-8">
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
            <div class="col-6 col-md-4">
              <label htmlFor="securityDeposit">
                <p className="input-heading">Security Deposit (in INR) :</p>
              </label>
            </div>
            <div class="col-12 col-md-8">
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
            <div class="col-6 col-md-4">
              <label htmlFor="noticePeriod">
                <p className="input-heading">Notice Period (in days) :</p>
              </label>
            </div>
            <div class="col-12 col-md-8">
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
            <div class="col-6 col-md-4">
              <label htmlFor="gateClosingTime">
                <p className="input-heading">Gate Closing Time :</p>
              </label>
            </div>
            <div class="col-12 col-md-8">
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
            heading={"PG Amenities :"}
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
          {/* <div className="row amenities parts part13">
            <div class="col-6 col-md-4">
              <label htmlFor="pgamenities">
                <p className="input-heading">PG Amenities :</p>
              </label>
            </div>
            <div class="col-12 col-md-8">
              <div className="amenities-row">
                <CheckBoxInput
                  fields={amenities2.slice(0, 3)}
                  type={pgAmenities}
                  handleChange={handlePgAmenitiesChange}
                  allowed={false}
                />
              </div>
            </div>
          </div>
          <div className="row amenities parts part14">
            <div class="col-6 col-md-4">
              <label htmlFor="pgamenities">
                <p className="input-heading"></p>
              </label>
            </div>
            <div class="col-12 col-md-8">
              <div className="amenities-row">
                <CheckBoxInput
                  fields={amenities2.slice(4, 7)}
                  type={pgAmenities}
                  handleChange={handlePgAmenitiesChange}
                  allowed={false}
                />
              </div>
            </div>
          </div>
          <div className="row amenities parts part15">
            <div class="col-6 col-md-4">
              <label htmlFor="pgamenities">
                <p className="input-heading"></p>
              </label>
            </div>
            <div class="col-12 col-md-8">
              <div className="amenities-row">
                <CheckBoxInput
                  fields={amenities2.slice(8, 11)}
                  type={pgAmenities}
                  handleChange={handlePgAmenitiesChange}
                  allowed={false}
                />
              </div>
            </div>
          </div>
          <div className="row amenities parts part16">
            <div class="col-6 col-md-4">
              <label htmlFor="pgamenities">
                <p className="input-heading"></p>
              </label>
            </div>
            <div class="col-12 col-md-8">
              <div className="amenities-row">
                <CheckBoxInput
                  fields={amenities2.slice(12, 15)}
                  type={pgAmenities}
                  handleChange={handlePgAmenitiesChange}
                  allowed={false}
                />
              </div>
            </div>
          </div>
          <div className="row amenities parts part17">
            <div class="col-6 col-md-4">
              <label htmlFor="pgamenities">
                <p className="input-heading"></p>
              </label>
            </div>
            <div class="col-12 col-md-8">
              <div className="amenities-row">
                <CheckBoxInput
                  fields={amenities2.slice(12, 15)}
                  type={pgAmenities}
                  handleChange={handlePgAmenitiesChange}
                  allowed={false}
                />
              </div>
            </div>
          </div>
          <div className="row amenities parts part18">
            <div class="col-6 col-md-4">
              <label htmlFor="pgamenities">
                <p className="input-heading"></p>
              </label>
            </div>
            <div class="col-12 col-md-8">
              <div className="amenities-row">
                <CheckBoxInput
                  fields={amenities2.slice(12, 15)}
                  type={pgAmenities}
                  handleChange={handlePgAmenitiesChange}
                  allowed={false}
                />
              </div>
            </div>
          </div> */}

          {/* Contact Info. **********************************************************************************************/}

          <div className="row contact parts part19">
            {/* <div className="form-group"> */}
            <div class="col-6 col-md-4">
              <label htmlFor="contact">
                <p className="input-heading">Contact Info :</p>
              </label>
            </div>
            <div class="col-6 col-md-2">
              <label htmlFor="phone">Phone :</label>
            </div>
            <div class="col-6 col-md-4">
              <input
                type="number"
                id="phone"
                name="phone"
                value={ContactInfo.phone}
                onChange={handleContactInfo}
              />
            </div>
            {/* </div> */}
          </div>
          {/* <div className="row contact parts part20">
            <div class="col-6 col-md-4">
              <label htmlFor="contact">
                <p className="input-heading"></p>
              </label>
            </div>
            <div class="col-6 col-md-2">
              <label htmlFor="email">Email :</label>
            </div>
            <div class="col-6 col-md-4">
              <input
                type="email"
                id="email"
                name="email"
                value={ContactInfo.email}
                onChange={handleContactInfo}
              />
            </div>
          </div> */}
          {/* Images **********************************************************************************************/}
          <div className="row images parts part20">
            {/* <div className="form-group"> */}
            <div class="col-6 col-md-4">
              <label htmlFor="images">
                <p className="input-heading">Images :</p>
              </label>
            </div>
            <div class="col-12 col-md-8">
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
                        onClick={() => handleImageDeselect(index)}
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
          {/* <section className="images parts part8">
          <h2 className="input-heading">Images</h2>
          <div>
            <div className="file-input">
              {" "}
              Choose a file
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
            </div>

            <div className="image-container">
              {images.map((image, index) => (
                <div key={index} className="image-wrapper">
                  <img className="small-image" src={image} alt={` ${index}`} />
                  <button
                    className="deselect-button"
                    onClick={() => handleImageDeselect(index)}
                  >
                    <span className="cross">&#10005;</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        </div>
        <hr />
        <div className="submit-button">
          <button type="submit" className="form-submit-buttom">
            Submit
          </button>
        </div>
      </form>
      <div class="loading-overlay">
        <div class="loading-spinner"></div>
      </div>
      <div class="message success-message">
        <i class="success-icon">&#10003;</i>
        <p>PG Listed Successfully!</p>
      </div>
      <div class="message error-msg">
        <i class="error-icon">&#10007;</i>
        <p>Error! Please Try Again</p>
      </div>
      {/* <div class="success-message"></div> */}
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
