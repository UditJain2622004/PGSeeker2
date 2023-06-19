import React from "react";

const FilterRadio = ({ name, value, displayName, handleChange }) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          name={name}
          value={value}
          //   checked={selectedOption3 === "multi"}
          onChange={handleChange}
        />
        {displayName}
      </label>
    </div>
  );
};

export default FilterRadio;
