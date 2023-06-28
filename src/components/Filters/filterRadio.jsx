import React from "react";

const FilterRadio = ({ name, value, displayName, handleChange }) => {
  return (
    <div>
      <label>
        <input type="radio" name={name} value={value} onChange={handleChange} />
        {displayName}
      </label>
    </div>
  );
};

export default FilterRadio;
