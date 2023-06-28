import "./style.css";
import React, { useState } from "react";
import { signup } from "../../api";
import { useNavigate } from "react-router-dom";
import { store } from "../../persistStore";

import house2 from "../Homepage/images/bg1.jpg";
import swal from "sweetalert";
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!username) {
      errors.username = "Name is required";
      isValid = false;
    }

    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    }
    if (!Confirmpassword) {
      errors.Confirmpassword = "Confirmpassword is required";
      isValid = false;
    } else if (Confirmpassword !== password) {
      errors.Confirmpassword = "values does not matched with password ";
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const handleSignup = async (event) => {
    let loadingOverlay = document.querySelector(".loading-overlay");
    event.preventDefault();

    if (validateForm()) {
      loadingOverlay.style.display = "block";

      const response = await signup(username, email, password, Confirmpassword);
      if (response.status === "success") {
        store.dispatch({
          type: "SET_USER",
          payload: response.data.user,
        });

        loadingOverlay.style.display = "none";
        navigate("/");
        window.scrollTo(0, 0);
      } else {
        swal("Error", response.error, "error");

        loadingOverlay.style.display = "none";
      }
    }
  };
  return (
    <div>
      <div className="sign ff_space">
        <div className=" img-section">
          <img className="image-sign" src={house2} alt="bg"></img>
        </div>
        <div className=" form-section">
          <h2>Signup</h2>
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="text"
                value={username}
                onChange={handleUserChange}
                className={`${errors.username ? "error" : ""} nameInput`}
              />
              {errors.username && (
                <span className="error-message">{errors.username}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className={`${errors.email ? "error" : ""} emailInput`}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className={`${errors.password ? "error" : ""} passInput`}
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                value={Confirmpassword}
                onChange={handleConfirmPasswordChange}
                className={`${errors.Confirmpassword ? "error" : ""} passInput`}
              />
              {errors.Confirmpassword && (
                <span className="error-message">{errors.Confirmpassword}</span>
              )}
            </div>

            <button type="submit" className="form-submit-buttom">
              Signup
            </button>
          </form>
          {/* <p className="mt-3">
            Already have an account ? <Link to="/login">Login</Link>
          </p> */}
          <div class="loading-overlay">
            <div class="loading-spinner"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
