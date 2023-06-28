// {
//     "city":"hisar",
//     "price":[5000,10000],
//     "pgType":["male","mixed"],
//     "sharing":["1","2","3"],
//     "amenities":["wifi","parking"],
//     "rules":["guests"],
//     "sort":-1
// }
import React, { useState } from "react";

const SearchableSelect = () => {
  const options = ["hisar", "sirsa", "fatehabad"];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOption, setSelectedOption] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterOptions(value);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setSearchTerm("");
    setFilteredOptions(options);
  };

  const filterOptions = (value) => {
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <div>
      <input type="number" list="cars" />
      <datalist id="cars">
        <option>Volvo</option>
        <option>Saab</option>
        <option>Mercedes</option>
        <option>Audi</option>
      </datalist>
      {/* <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {filteredOptions.map((option, index) => (
          <li key={index} onClick={() => handleOptionSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
      <p>Selected option: {selectedOption}</p> */}
    </div>
  );
};

export default SearchableSelect;

// {
//     name: {
//       type: String,
//       required: [true, "No name given!! Name required"],
//       trim: true,
//     },

//     description: {
//       type: String,
//       required: [true, "No description given!! description required"],
//       trim: true,
//     },

//     address: {
//       locality: { type: String, required: true },
//       city: { type: String, required: true },
//       state: { type: String, required: true },
//       pincode: {
//         type: String,
//         required: true,
//         match: [/^[1-9][0-9]{5}$/, "Invalid pincode"],
//       },
//     },

//     sharing: {
//       type: [
//         {
//           occupancy: { type: Number, required: true },
//           price: { type: Number, required: true },
//           ac: { type: Boolean, default: false },
//         },
//       ],
//       validate: {
//         validator: function (array) {
//           return array.length >= 1;
//         },
//         message: "At least one sharing element is required.",
//       },
//       required: true,
//     },

//     pgType: {
//       type: String,
//       enum: ["male", "female", "coLiving"],
//       required: true,
//     },

//     pgContactInfo: {
//       phone: {
//         type: String,
//         required: true,
//         match: [/^\d{10}$/, "Invalid phone number"],
//       },

//     },

//     pgAmenities: [
//       {
//         wifi: { type: Boolean, default: false },
//         ac: { type: Boolean, default: false },
//         parking: { type: Boolean, default: false },
//         laundry: { type: Boolean, default: false },
//         cleaning: { type: Boolean, default: false },
//         tv: { type: Boolean, default: false },
//         fridge: { type: Boolean, default: false },
//         tiffin: { type: Boolean, default: false },
//         warden: { type: Boolean, default: false },
//         microwave: { type: Boolean, default: false },
//         lift: { type: Boolean, default: false },
//         cctv: { type: Boolean, default: false },
//         nonVeg: { type: Boolean, default: false },
//         selfCooking: { type: Boolean, default: false },
//         attachWashroom: { type: Boolean, default: false },
//         wardrobe: { type: Boolean, default: false },
//         powerBackup: { type: Boolean, default: false },
//         library: { type: Boolean, default: false },
//         // add more amenities as needed
//       },
//     ],
//     pgRules: [
//       {
//         smoking: { type: Boolean, default: false },
//         // pets: { type: Boolean, default: false },
//         guests: { type: Boolean, default: false },
//         loudMusicAllowed: { type: Boolean, default: false },
//         alcoholAllowed: { type: Boolean, default: false },
//         // hasSecurityDeposit: { type: Boolean, default: false },
//         // hasNoticePeriod: { type: Boolean, default: false },
//         // hasGateClosingTimes: { type: Boolean, default: false },
//         // add more rules as needed
//       },
//     ],

//     // photos: [{ type: String }],
//     noticePeriodDays: { type: Number, default: 0 },
//     securityDeposit: { type: Number, default: 0 },
//     gateClosingTime: { type: String },

//   },
