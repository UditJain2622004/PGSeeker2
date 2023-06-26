import React, { useState } from "react";
import { updatePassword } from "../../../api";
import swal from "sweetalert";

const UpdatePassword = ({ user }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleDetailsChange = (e, setWhat) => {
    setWhat(e.target.value);
  };
  const updatePass = async (e) => {
    e.preventDefault();

    const Loader = document.querySelector(".loading-overlay");
    // let currentPassword = document.querySelector("#currentPassword").value;
    // let newPassword = document.querySelector("#newPassword").value;
    // let passwordConfirm = document.querySelector("#passwordConfirm").value;
    Loader.style.display = "block";

    const response = await updatePassword(
      currentPassword,
      newPassword,
      passwordConfirm,
      user._id
    );
    if (response.status === "success") {
      setCurrentPassword("");
      setNewPassword("");
      setPasswordConfirm("");
      swal("Success!", "Password Updated Successfully", "success");
    } else {
      swal("Error", response.error, "error");
    }
    Loader.style.display = "none";
  };
  return (
    <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12 mr-auto">
      <div className="profile-card update-password">
        <div className="profile-card-body">
          <h2>Change Password</h2>
          <form onSubmit={updatePass}>
            <div class="form-group">
              <label for="currentPassword">Current Password</label>
              <input
                type="password"
                class="form-control"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => handleDetailsChange(e, setCurrentPassword)}
              />
            </div>
            <div class="form-group">
              <label for="newPassword">New Password</label>
              <input
                type="password"
                class="form-control"
                id="newPassword"
                value={newPassword}
                onChange={(e) => handleDetailsChange(e, setNewPassword)}
              />
            </div>
            <div class="form-group">
              <label for="passwordConfirm">Password Confirm</label>
              <input
                type="password"
                class="form-control"
                id="passwordConfirm"
                value={passwordConfirm}
                onChange={(e) => handleDetailsChange(e, setPasswordConfirm)}
              />
            </div>
            <button class="btn btn-primary" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
