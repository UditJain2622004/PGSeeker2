import React from "react";
import "./aboutus.css";
import img from "./../Homepage/images/aboutus5.jpg";
import img2 from "./../Homepage/images/aboutus4.jpg";
import img3 from "./../Homepage/images/aboutus3.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="blue_clr">ABOUT US</h1>
      <div className="about-content ">
        <div className="about-description container ">
          <div className="row m-5">
            <p className="col aboutus-text">
              We are dedicated to providing high-quality and comfortable Paying
              Guest accommodations for students and working professionals. Our
              goal is to create a safe and homely environment where residents
              can focus on their studies or work without any worries.
            </p>
            <div className="about-image col">
              <img className="aboutuspic" src={img} alt="About Us" />
            </div>
          </div>

          <div className="row m-5">
            <div className="about-image col">
              <img className="aboutuspic" src={img2} alt="About Us" />
            </div>
            <p className="col aboutus-text">
              At our PG facilities, we offer a range of amenities including
              high-speed Wi-Fi, 24/7 power backup, regular room cleaning,
              parking spaces, and more. Our team ensures that the premises are
              well-maintained and all necessary facilities are provided for a
              comfortable stay.
            </p>
          </div>

          <div className="row m-5">
            <p className="col aboutus-text">
              Located in prime areas of the city, our PGs are surrounded by
              essential amenities such as shops, restaurants, and public
              transportation. We strive to create a vibrant community where
              residents can socialize, make new friends, and create lasting
              memories.
            </p>
            <div className="about-image col aboutuspic">
              <img className="aboutuspic" src={img3} alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
