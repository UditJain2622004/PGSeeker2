import React from "react";
import swal from "sweetalert";
import UpdatePassword from "./updatePassword";

const Personal = ({
  stateVars,
  changeStateVars,
  handleDetailsChange,
  handleAddressDetailsChange,
  updateMe,
}) => {
  return (
    <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12 personal">
      <div className="profile-card">
        <div className="profile-card-body">
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <h6 className="mb-2 text-primary titles">Personal Details</h6>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 input-boxes">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter full name"
                  value={stateVars.name}
                  onChange={(e) =>
                    handleDetailsChange(e, changeStateVars.setName)
                  }
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="website">About</label>
                <textarea
                  name="about"
                  id="about"
                  cols="10"
                  rows="1"
                  className="form-control about-input"
                  placeholder="About You"
                  value={stateVars.about}
                  onChange={(e) =>
                    handleDetailsChange(e, changeStateVars.setAbout)
                  }
                ></textarea>
                {/* <input
                        type="text"
                        className="form-control rest-input"
                        id="website"
                        placeholder="About"
                      /> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 input-boxes">
              <div className="form-group">
                <label htmlFor="eMail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="eMail"
                  placeholder="Enter email ID"
                  value={stateVars.email}
                  onChange={(e) =>
                    handleDetailsChange(e, changeStateVars.setEmail)
                  }
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Enter phone number"
                  value={stateVars.phone}
                  onChange={(e) =>
                    handleDetailsChange(e, changeStateVars.setPhone)
                  }
                />
              </div>
            </div>
          </div>
          <div className="row gutters">
            <div className="col-xl-12 col-lg-8 col-md-12 col-sm-12 col-8">
              <h6 className="mt-3 mb-2 text-primary titles">Address</h6>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 input-boxes">
              {/* <div className="col-8"> */}
              <div className="form-group">
                <label htmlFor="Locality">Locality</label>
                <input
                  type="text"
                  className="form-control rest-input"
                  id="Locality"
                  name="locality"
                  placeholder="Enter Locality"
                  value={stateVars.addressDetails.locality}
                  onChange={handleAddressDetailsChange}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="ciTy">City</label>
                <input
                  type="text"
                  className="form-control rest-input "
                  id="ciTy"
                  name="city"
                  placeholder="Enter City"
                  value={stateVars.addressDetails.city}
                  onChange={handleAddressDetailsChange}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 input-boxes">
              <div className="form-group">
                <label htmlFor="sTate">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="sTate"
                  name="state"
                  placeholder="Enter State"
                  value={stateVars.addressDetails.state}
                  onChange={handleAddressDetailsChange}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="number"
                  className="form-control"
                  id="pincode"
                  name="pincode"
                  placeholder="Pincode"
                  value={stateVars.addressDetails.pincode}
                  onChange={handleAddressDetailsChange}
                />
              </div>
            </div>
          </div>
          <div className="row gutters">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="text-right">
                <button
                  type="button"
                  id="submit"
                  name="submit"
                  className="btn btn-secondary btns"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  id="submit"
                  name="submit"
                  className="btn btn-primary btns"
                  onClick={updateMe}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
