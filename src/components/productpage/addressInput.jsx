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
  key,
}) => {
  return (
    <>
      <React.Fragment key={key}>
        <div className={`row sub-address parts part${partNum}`}>
          {/* <div className="form-group"> */}
          <div class="col-6 col-md-4">
            <label htmlFor="address">
              <p className="input-heading">{heading}</p>
            </label>
          </div>

          <div class="col-6 col-md-2">
            <label htmlFor={subHeading}>{`${capitalize(subHeading)} :`}</label>
          </div>
          <div class="col-6 col-md-4">
            <input
              type="text"
              id={subHeading}
              name={subHeading}
              value={stateVar[subHeading]}
              onChange={handleChange}
            />
          </div>

          {/* </div> */}
        </div>
      </React.Fragment>
    </>
  );
};

export default AddressInput;
