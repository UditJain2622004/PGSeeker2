import { React, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/Navbar";
import LoginPage from "./components/login/LoginPage";
import LogOut from "./components/login/logout";
import Signup from "./components/login/Signup";
import Product from "./components/productpage/product";
import Homepage from "./components/Homepage/Homepage";
import PGShow from "./components/ListPg/Pgshow";
import PGOwnerForm from "./components/productpage/PGOwnerForm";
import About from "./components/About Us/aboutus";
import ContactUs from "./components/contact us/contactUs";
import Services from "./components/Services/services";
import ProtectedRoute from "./ProtectedRoute";
import { checkAuthentication, logout } from "./api";

function App() {
  // const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const fetchAuthenticationStatus = async () => {
    try {
      const isAuthenticated = await checkAuthentication();
      setIsAuthenticated(isAuthenticated);
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  // fetchAuthenticationStatus();

  const handleLogin = (userData) => {
    setUser(userData);
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <>
      <Router>
        <Navbar user={user} />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/listedpg" element={<PGShow />} />
          <Route path="/pg" element={<Product />} />
          <Route path="/login" element={<LoginPage setUser={handleLogin} />} />
          {/* <Route
            path="/logout"
            onEnter={async ({ location }) => {
              await logout();
            }}
          /> */}
          <Route path="/logout" element={<LogOut setUser={handleLogin} />} />
          <Route path="/Signup" element={<Signup setUser={handleLogin} />} />
          <Route
            path="/PGowner"
            element={<ProtectedRoute component={PGOwnerForm} user={user} />}
          />
          {/* <Route path="/PGowner" element={<PGOwnerForm />} /> */}
          {/* <Route
              path="/About"
              element={<ProtectedRoute component={About} />}
            /> */}
          <Route path="/About" element={<About user={user} />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
