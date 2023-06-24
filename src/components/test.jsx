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
