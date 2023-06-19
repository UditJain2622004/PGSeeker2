// import React, { useState } from "react";
// import "./LoginPage.css";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const validateForm = () => {
//     let errors = {};
//     let isValid = true;

//     if (!email) {
//       errors.email = "Email is required";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = "Email is invalid";
//       isValid = false;
//     }

//     if (!password) {
//       errors.password = "Password is required";
//       isValid = false;
//     }

//     setErrors(errors);

//     return isValid;
//   };

//   const handleLogin = (event) => {
//     event.preventDefault();

//     if (validateForm()) {
//       // handle login logic here, e.g. send data to backend
//       console.log("Email:", email);
//       console.log("Password:", password);

//       // show alert and clear inputs
//       alert("Form submitted successfully");
//       setEmail("");
//       setPassword("");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={handleEmailChange}
//               className={errors.email ? "error" : ""}
//             />
//             {errors.email && <span className="error-message">{errors.email}</span>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={handlePasswordChange}
//               className={errors.password ? "error" : ""}
//             />
//             {errors.password && (
//               <span className="error-message">{errors.password}</span>
//             )}
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { setUser } from "../../api";

import "./LoginPage.css";
import house2 from "../Homepage/images/bg1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api";
// import store from "../../store";

const LoginPage = ({ setUser }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

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
    event.preventDefault();

    if (validateForm()) {
      loadingOverlay.style.display = "block";
      // handle login logic here, e.g. send data to backend
      console.log("Email:", email);
      console.log("Password:", password);
      const response = await login(email, password);
      console.log(response);
      if (response.status === "success") {
        // console.log(store.getState());
        setUser(response.data.user);
        loadingOverlay.style.display = "none";
        navigate("/");
        // dispatch(setUser(response.data.user));
        // console.log(store.getState());
        // console.log(user);
      }
      // console.log(req.user);
      // show alert and clear inputs
      // alert("Form submitted successfully");
      // setEmail("");
      // setPassword("");
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
        <img className="image-sign" src={house2}></img>
      </div>
      <div class="loading-overlay">
        <div class="loading-spinner"></div>
      </div>
    </div>
  );
};

export default LoginPage;
