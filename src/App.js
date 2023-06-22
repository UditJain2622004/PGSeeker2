import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { Provider } from "react-redux";
// import store from "./store";

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
import ProfilePage from "./components/profile/profilePage";
import ProfilePage2 from "./components/profile/ProfilePage2";
import ProtectedRoute from "./ProtectedRoute";
import Test from "./components/test";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/listedpg" element={<PGShow />} />
          <Route path="/pg" element={<Product />} />
          <Route path="/login" element={<LoginPage />} />

          <Route path="/logout" element={<LogOut />} />
          <Route path="/Signup" element={<Signup />} />

          <Route
            path="/PGowner"
            element={<ProtectedRoute component={PGOwnerForm} />}
          />

          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/profile" element={<ProfilePage2 />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
