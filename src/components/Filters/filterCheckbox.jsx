import React from "react";

const FilterCheckbox = ({ name, displayName, handleChange, stateVar }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name={name}
          checked={stateVar[name]}
          onChange={handleChange}
        />
        {displayName}
      </label>
    </div>
  );
};

export default FilterCheckbox;
