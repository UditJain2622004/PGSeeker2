import React, { useState, useEffect } from "react";
import "./filters.css";

const Filters = () => {
  const [checkboxValues, setCheckboxValues] = useState({
    wifi: false,
    AC: false,
    parking: false,
    // wheelerparking: false,
    // powerbackup: false,
    TV: false,
    fridge: false,
    microwave: false,
    cleaning: false,
    laundry: false,
    // watercooler: false,
    // veg: false/,
    // nonVeg: false,
  });
  const [selected2Option, setSelected2Option] = useState("");
  const [submittedPrice, setSubmittedPrice] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");
  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelected2Option(selectedValue);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRadio2Change = (event) => {
    setSelectedOption3(event.target.value);
  };

  const handleLogin = (event) => {
    setSubmittedPrice(selected2Option);

    event.preventDefault();
    // handle login logic here, e.g. send data to backend
    console.log("Amenities:", checkboxValues);

    console.log("Gender:", selectedOption);

    console.log("Sharing:", selectedOption3);
  };
  useEffect(() => {
    // Log the submitted option
    console.log("Price:", submittedPrice);
  }, [submittedPrice]);

  return (
    <section className="filters">
      <div className="sign ff_space filters-body">
        <div className="form">
          <div className="login">
            <div class="vertical-line"></div>

            <h2>Filters</h2>

            <form onSubmit={handleLogin}>
              <div className="select-container">
                <label>
                  Price:
                  <select
                    classname="select-dropdown"
                    value={selected2Option}
                    onChange={handleDropdownChange}
                  >
                    <option value="selected">Price Range</option>
                    <option value="Upto 5000">Upto 5000</option>
                    <option value="Upto 10000">Upto 10000</option>
                    <option value="Above 10000">Above 10000</option>
                  </select>
                </label>
              </div>

              <h2>Gender:</h2>
              <div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value="boys"
                      checked={selectedOption === "boys"}
                      onChange={handleRadioChange}
                    />
                    Boys
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value="girls"
                      checked={selectedOption === "girls"}
                      onChange={handleRadioChange}
                    />
                    Girls
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value="others"
                      checked={selectedOption === "others"}
                      onChange={handleRadioChange}
                    />
                    Others
                  </label>
                </div>
              </div>
              <h2>Sharing:</h2>
              <div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="sharings"
                      value="single"
                      checked={selectedOption3 === "single"}
                      onChange={handleRadio2Change}
                    />
                    Single
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="sharings"
                      value="double"
                      checked={selectedOption3 === "double"}
                      onChange={handleRadio2Change}
                    />
                    Double
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="sharings"
                      value="multi"
                      checked={selectedOption3 === "multi"}
                      onChange={handleRadio2Change}
                    />
                    Multi
                  </label>
                </div>
              </div>
              <h2>Amenities:</h2>
              <div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="wifi"
                      checked={checkboxValues.wifi}
                      onChange={handleCheckboxChange}
                    />
                    Wi-Fi
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="AC"
                      checked={checkboxValues.AC}
                      onChange={handleCheckboxChange}
                    />
                    AC
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="parking"
                      checked={checkboxValues.parking}
                      onChange={handleCheckboxChange}
                    />
                    Parking
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="laundry"
                      checked={checkboxValues.laundry}
                      onChange={handleCheckboxChange}
                    />
                    Laundry
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="cleaning"
                      checked={checkboxValues.cleaning}
                      onChange={handleCheckboxChange}
                    />
                    Room-Cleaning
                  </label>
                </div>

                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="fridge"
                      checked={checkboxValues.fridge}
                      onChange={handleCheckboxChange}
                    />
                    Fridge
                  </label>
                </div>

                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="microwave"
                      checked={checkboxValues.microwave}
                      onChange={handleCheckboxChange}
                    />
                    Microwave
                  </label>
                </div>
              </div>
              <button type="submit">Apply</button>
            </form>
          </div>
        </div>
      </div>
      <div class="vertical-line"></div>
    </section>
  );
};

export default Filters;
