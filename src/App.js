import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoginPage from "./components/login/LoginPage";
import Signup from "./components/login/Signup";
import Product from "./components/productpage/product";
import Homepage from "./components/Homepage/Homepage";
import PGShow from "./components/ListPg/Pgshow";
import PGOwnerForm from "./components/productpage/PGOwnerForm";
import About from "./components/About Us/aboutus";
import Services from "./components/Services/services";
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
          <Route path="/Signup" element={<Signup />} />
          <Route path="/PGowner" element={<PGOwnerForm />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
