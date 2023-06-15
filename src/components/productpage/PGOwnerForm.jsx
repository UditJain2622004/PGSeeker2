// PGOwnerForm.js
// import { useState } from 'react';
// import { createPG } from './api';

// const PGOwnerForm = () => {
//     const [pgData, setPGData] = useState({});

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         console.log(pgData);
//         const response = await createPG(pgData);
//         console.log(response); // log the response from the server
//     }

//     const handleInputChange = (event) => {
//         setPGData({
//             ...pgData,
//             [event.target.name]: event.target.value
//         });
//     }

//     return (
//         <form onSubmit={handleFormSubmit}>
//             <input type="text" name="name" onChange={handleInputChange} />
//             <input type="text" name="location" onChange={handleInputChange} />
//             {/* add more input fields for other PG details */}
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// export default PGOwnerForm

import React, { useState } from "react";
import { createPG } from "./api";
import CheckBoxInput from "./checkboxInput";

import "./PGOwnerForm.css";

const rules = ["guests", "pets", "smoking", "loudMusic", "alcohol"];
const amenities = [
  "wifi",
  "ac",
  "parking",
  "fourWheelerParking",
  "roomCleaning",
  "tv",
  "fridge",
  "waterCooler",
  "warden",
  "microwave",
  "lift",
  "veg",
  "nonVeg",
  "powerBackup",
];
const amenities2 = [
  "ac",

  "lift",
  "parking",
  "fridge",

  "laundry",
  "tv",

  "wifi",
  "cleaning",

  "microwave",

  "warden",
];

const PGOwnerForm = () => {
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
    guests: "",
    pets: "",
    smoking: "",
    loudMusic: "",
    alcohol: "",
    securityDeposit: "",
    noticePeriod: "",
    gateClosingTime: "",
  });

  const [ContactInfo, setContactInfo] = useState({
    phone: "",
    email: "",
  });

  const [pgAmenities, setPGAmenities] = useState({
    wifi: "",
    ac: "",
    parking: "",
    fourWheelerParking: "",
    roomCleaning: "",
    tv: "",
    fridge: "",
    waterCooler: "",
    warden: "",
    microwave: "",
    lift: "",
    nonVeg: "",
    veg: "",
    powerBackup: "",
    laundry: "",
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
        newImages.push(reader.result);

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
    setPGRules({ ...pgRules, [event.target.name]: event.target.value });
  };

  const handleContactInfo = (event) => {
    setContactInfo({ ...ContactInfo, [event.target.name]: event.target.value });
  };
  // const [pgData, setPGData] = useState({});

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(pgDetails);
    console.log(addressDetails);
    console.log(pgRules);
    // const response = await createPG(pgData);
    // console.log(response); // log the response from the server
  };

  return (
    <div className="container complete-page">
      <form className="complete-form" onSubmit={handleFormSubmit}>
        <section className="name-description parts part1">
          <h2 className="input-heading">PG Details</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              size="10"
              value={pgDetails.name}
              onChange={handlePGDetailsChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              className="w-100"
              id="description"
              name="description"
              value={pgDetails.description}
              onChange={handlePGDetailsChange}
            />
          </div>
        </section>
        <hr></hr>

        <section className="pgtype parts part2">
          <div className="form-group">
            <label htmlFor="pgType">
              <h2 className="input-heading">PG Type</h2>
            </label>

            <div className="radio-buttons">
              <div>
                <input
                  type="radio"
                  id="male"
                  name="pgType"
                  value="Male"
                  checked={pgDetails.pgType === "Male"}
                  onChange={handlePGDetailsChange}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="pgType"
                  value="Female"
                  checked={pgDetails.pgType === "Female"}
                  onChange={handlePGDetailsChange}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="coLiving"
                  name="pgType"
                  value="Co-Living"
                  checked={pgDetails.pgType === "Co-Living"}
                  onChange={handlePGDetailsChange}
                />
                <label htmlFor="coLiving">Co-Living</label>
              </div>
            </div>
          </div>
        </section>
        <hr></hr>

        <h2 className="input-heading">Address Details</h2>
        <div className="address">
          <div className="form-group">
            <label htmlFor="locality">Locality:</label>
            <input
              type="text"
              id="locality"
              name="locality"
              value={addressDetails.locality}
              onChange={handleAddressDetailsChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={addressDetails.city}
              onChange={handleAddressDetailsChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              value={addressDetails.state}
              onChange={handleAddressDetailsChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode:</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={addressDetails.pincode}
              onChange={handleAddressDetailsChange}
            />
          </div>
        </div>

        <hr></hr>

        <section className="sharing parts part4">
          <h2 className="input-heading">Sharing Options</h2>
          {sharingOptions.map((option, index) => (
            <div key={index} className="sharingoption">
              <label>
                Occupancy:
                <input
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
                  type="number"
                  value={option.price}
                  onChange={(e) =>
                    handleSharingOptionChange(index, "price", e.target.value)
                  }
                />
              </label>
              <label>
                AC:
                <input
                  type="checkbox"
                  checked={option.ac}
                  onChange={(e) =>
                    handleSharingOptionChange(index, "ac", e.target.checked)
                  }
                />
              </label>
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={() => handleRemoveSharingOption(index)}
              >
                Remove
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
        </section>
        <hr />

        {/* <div className="rules-row1">
          <div className="form-group">
            <input
              onClick="checkUncheck()"
              type="checkbox"
              id="guests"
              name="guests"
              checked={pgRules.guests}
              onChange={handlePGRulesChange}
            />
            <label htmlFor="guests">Guests Allowed</label>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="pets"
              name="pets"
              checked={pgRules.pets}
              onChange={handlePGRulesChange}
            />
            <label htmlFor="pets">Pets Allowed</label>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="smoking"
              name="smoking"
              checked={pgRules.smoking}
              onChange={handlePGRulesChange}
            />
            <label htmlFor="smoking">Smoking Allowed</label>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="loudMusic"
              name="loudMusic"
              checked={pgRules.loudMusic}
              onChange={handlePGRulesChange}
            />
            <label htmlFor="loudMusic">Loud Music Allowed</label>
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="alcohol"
              name="alcohol"
              checked={pgRules.alcohol}
              onChange={handlePGRulesChange}
            />
            <label htmlFor="alcohol">Alcohol Allowed</label>
          </div>
        </div> */}

        <section className="rules parts part5">
          <h2 className="input-heading">PG Rules</h2>
          <div className="rules-row1">
            <CheckBoxInput
              fields={rules}
              type={pgRules}
              handleChange={setPGRules}
              allowed={true}
            />
          </div>

          <div className="rules-row2">
            <div className="form-group">
              <label htmlFor="securityDeposit">Security Deposit (in INR)</label>
              <input
                type="number"
                id="securityDeposit"
                name="securityDeposit"
                value={pgRules.securityDeposit}
                onChange={handlePGRulesChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="noticePeriod">Notice Period (in days)</label>
              <input
                type="number"
                id="noticePeriod"
                name="noticePeriod"
                value={pgRules.noticePeriod}
                onChange={handlePGRulesChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="gateClosingTime">Gate Closing Time</label>
              <input
                type="time"
                id="gateClosingTime"
                name="gateClosingTime"
                value={pgRules.gateClosingTime}
                onChange={handlePGRulesChange}
              />
            </div>
          </div>
        </section>

        <hr></hr>

        <section className="amenities parts part6">
          <h2 className="input-heading">PG Amenities</h2>
          <div className="">
            <CheckBoxInput
              className="row"
              fields={amenities2}
              type={pgAmenities}
              handleChange={setPGAmenities}
              allowed={false}
            />
          </div>
          {/* <div className="col-4">
            <CheckBoxInput
              fields={amenities2.slice(5, 10)}
              type={pgAmenities}
              handleChange={setPGAmenities}
              allowed={false}
            />
          </div> */}
          {/* <div className="amenities-row">
          <CheckBoxInput
            fields={amenities.slice(8, 12)}
            type={pgAmenities}
            handleChange={setPGAmenities}
            allowed={false}
          />
        </div> */}
        </section>

        <hr />

        <h2 className="input-heading">Contact Info</h2>
        <div className="contact">
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={ContactInfo.phone}
              onChange={handleContactInfo}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={ContactInfo.email}
              onChange={handleContactInfo}
            />
          </div>
        </div>

        <hr />

        <section className="images parts part8">
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
        </section>

        <hr />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PGOwnerForm;
