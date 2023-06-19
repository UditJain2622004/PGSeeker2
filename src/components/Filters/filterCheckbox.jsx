import React from "react";

const FilterCheckbox = ({ name, displayName, handleChange }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={name}
          //   checked={checkboxValues.wifi}
          onChange={handleChange}
        />
        {displayName}
      </label>
    </div>
  );
};

export default FilterCheckbox;
