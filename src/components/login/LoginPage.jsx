import React, { useState } from "react";

// import { useSelector } from "react-redux";
// import Loader from "../Homepage/Loader";
import "./LoginPage.css";
import house2 from "../Homepage/images/bg1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api";
import { store } from "./../../persistStore";
import swal from "sweetalert";

const LoginPage = () => {
  // const user = useSelector((state) => state.user);
  // console.log(user);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

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

    setErrors(errors);

    return isValid;
  };

  const handleLogin = async (event) => {
    let loadingOverlay = document.querySelector(".loading-overlay");
    // let errorMessage = document.querySelector(".error-msg");

    event.preventDefault();

    if (validateForm()) {
      loadingOverlay.style.display = "block";
      // setIsLoading(true)
      const response = await login(email, password);
      if (response.status === "success") {
        store.dispatch({
          type: "SET_USER",
          payload: response.data.user,
        });
        loadingOverlay.style.display = "none";
        // setIsLoading(false)
        navigate("/");
        window.scrollTo(0, 0);
      } else {
        swal("Error", response.error, "error");
        // errorMessage.textContent = response.error;
        // errorMessage.style.display = "block";
        // setTimeout(function () {
        //   errorMessage.style.display = "none";
        // }, 2000);

        loadingOverlay.style.display = "none";
        // setIsLoading(false)
      }
    }
  };

  return (
    <div className="sign ff_space">
      <div className="form-section">
        <div className="login">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
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
            <button type="submit" className="form-submit-buttom">
              Login
            </button>
          </form>
          <p className="mt-3">
            Don't have an account ? <Link to="/signup">SignUp</Link>
          </p>
        </div>
      </div>
      <div className=" img-section">
        <img className="image-sign" src={house2} alt="bg"></img>
      </div>
      {/* {isLoading && <Loader />} */}
      <div class="loading-overlay">
        <div class="loading-spinner"></div>
      </div>
      {/* <div class="message error-msg">
        <i class="error-icon">&#10007;</i>
        <p></p>
      </div> */}
    </div>
  );
};

export default LoginPage;
