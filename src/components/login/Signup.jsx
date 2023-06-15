// import React, { useState } from "react";
// import "./SignupPage.css"

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [Confirmpassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
//   const handleUserChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };
//   const handleConfirmPasswordChange = (event) => {

//     setConfirmPassword(event.target.value);
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
//     if(Confirmpassword != password){
//       errors.confirmpassword = "values does not matched with password "
//     }

//     setErrors(errors);

//     return isValid;
//   };

//   const handleLogin = (event) => {
//     event.preventDefault();

//     if (validateForm()) {
//       // handle login logic here, e.g. send data to backend
//       console.log("Username:", username);

//       console.log("Email:", email);
//       console.log("Password:", password);
//       console.log("ConfirmPassword:", Confirmpassword);

//       // show alert and clear inputs
//       alert("Form submitted successfully");
//       setUsername("");
//       setConfirmPassword("");
//       setEmail("");
//       setPassword("");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2>Signup</h2>
//         <form onSubmit={handleLogin}>
//         <div className="form-group">
//             <label htmlFor="email">Username:</label>
//             <input
//               type="text"
//               id="text"
//               value={username}
//               onChange={handleUserChange}
//               className={errors.email ? "error" : ""}
//             />
//             {errors.email && <span className="error-message">{errors.email}</span>}
//           </div>
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
//           <div className="form-group">
//             <label htmlFor="password">Confirm Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={Confirmpassword}
//               onChange={handleConfirmPasswordChange}
//               className={errors.password ? "error" : ""}
//             />
//             {errors.password && (
//               <span className="error-message">{errors.password}</span>
//             )}
//           </div>

//           <button type="submit">Signup</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import "./style.css";
import React, { useState } from "react";
// import "./SignupPage.css";

// import "./Sign.css";

import house2 from "../Homepage/images/bg1.jpg";
const Signup = () => {
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

  const handleLogin = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // handle login logic here, e.g. send data to backend
      console.log("Username:", username);

      console.log("Email:", email);
      console.log("Password:", password);
      console.log("ConfirmPassword:", Confirmpassword);

      // show alert and clear inputs
      alert("Form submitted successfully");
      setUsername("");
      setConfirmPassword("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <div className="sign ff_space">
        <div className=" img-section">
          <img className="image-sign" src={house2}></img>
        </div>
        <div className=" form-section">
          {/* <div className="login-container"> */}
          <h2>Signup</h2>
          <form onSubmit={handleLogin}>
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
                id="password"
                value={Confirmpassword}
                onChange={handleConfirmPasswordChange}
                className={`${errors.Confirmpassword ? "error" : ""} passInput`}
              />
              {errors.Confirmpassword && (
                <span className="error-message">{errors.Confirmpassword}</span>
              )}
            </div>

            <button type="submit">Signup</button>
          </form>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
