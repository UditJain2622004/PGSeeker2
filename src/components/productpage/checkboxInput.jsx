import React from "react";

const checkboxInput = ({ fields, type, handleChange, allowed }) => {
  return (
    <>
      {Object.keys(fields).map((el, index) => {
        return (
          <React.Fragment key={index}>
            <div className="form-group">
              <input
                // onClick="checkUncheck()"
                type="checkbox"
                id={el}
                name={el}
                checked={type[el]}
                onChange={handleChange}
              />
              <label htmlFor={el}>
                {/* {capitalize(el)} */}
                {fields[el]}
                {allowed ? " Allowed" : ""}
              </label>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default checkboxInput;
