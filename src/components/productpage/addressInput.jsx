import React from "react";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const AddressInput = ({
  partNum,
  handleChange,
  heading,
  stateVar,
  subHeading,
  keyIndex,
  inputType,
  handleWheelChange,
}) => {
  return (
    <>
      <React.Fragment key={keyIndex}>
        <div className={`row sub-address parts part${partNum}`}>
          {/* <div className="form-group"> */}
          <div className="col-6 col-md-4">
            <label htmlFor="address">
              <p className="input-heading">{heading}</p>
            </label>
          </div>

          <div className="col-6 col-md-2">
            <label htmlFor={subHeading}>
              {`${capitalize(subHeading)}`}
              <span className="required-marker"> *</span>
            </label>
          </div>
          <div className="col-6 col-md-4">
            <input
              type={inputType}
              id={subHeading}
              name={subHeading}
              value={stateVar[subHeading]}
              onChange={handleChange}
              onWheel={handleWheelChange}
            />
          </div>

          {/* </div> */}
        </div>
      </React.Fragment>
    </>
  );
};

export default AddressInput;
