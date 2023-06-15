import React from "react";
import "./aboutus.css";
import img from "./../Homepage/images/aboutus.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="blue_clr">About Us</h1>
      <div className="about-content">
        <div className="about-description">
          <p>
            We are dedicated to providing high-quality and comfortable Paying
            Guest accommodations for students and working professionals. Our
            goal is to create a safe and homely environment where residents can
            focus on their studies or work without any worries.
          </p>
          <p>
            At our PG facilities, we offer a range of amenities including
            high-speed Wi-Fi, 24/7 power backup, regular room cleaning, parking
            spaces, and more. Our team ensures that the premises are
            well-maintained and all necessary facilities are provided for a
            comfortable stay.
          </p>
          <p>
            Located in prime areas of the city, our PGs are surrounded by
            essential amenities such as shops, restaurants, and public
            transportation. We strive to create a vibrant community where
            residents can socialize, make new friends, and create lasting
            memories.
          </p>
        </div>
        <div className="about-image">
          <img src={img} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
