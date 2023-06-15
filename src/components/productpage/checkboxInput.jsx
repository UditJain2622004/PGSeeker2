import React from "react";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const checkboxInput = ({ fields, type, handleChange, allowed }) => {
  return (
    <>
      {fields.map((el) => {
        return (
          <>
            <div className="form-group">
              <input
                onclick="checkUncheck()"
                type="checkbox"
                id={el}
                name={el}
                checked={type[el]}
                onChange={handleChange}
              />
              <label htmlFor={el}>
                {capitalize(el)}
                {allowed ? " Allowed" : ""}
              </label>
            </div>
          </>
        );
      })}
    </>
  );
};

export default checkboxInput;
