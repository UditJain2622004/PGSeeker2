import React from "react";
import "./services.css";
import img from "./../Homepage/images/services4.jpg";
import img2 from "./../Homepage/images/services3.jpg";
import img3 from "./../Homepage/images/services6.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="blue_clr">Services</h1>
      <div className="services-content ">
        <div className="services-description container ">
          <div className="row m-5">
            <div className="col services-text">
              <h2 className="services-heading">PG Listing Platform</h2>
              <p>
                Our website provides a user-friendly platform for listing and
                searching for PG accommodations. We connect landlords and
                tenants, making it easier to find the perfect PG for your needs.
              </p>
            </div>
            <div className="services-image col">
              <img src={img} alt="Services" />
            </div>
          </div>

          <div className="row m-5">
            <div className="services-image col">
              <img src={img2} alt="Services" />
            </div>
            <div className="col services-text">
              <h2 className="services-heading">Advanced Search Filters</h2>
              <p>
                Our search feature allows you to filter and narrow down your
                options based on various criteria such as location, budget,
                amenities, and more. Find your ideal PG with just a few clicks.
              </p>
            </div>
          </div>

          <div className="row m-5">
            <div className="col services-text">
              <h2 className="services-heading">Real User Reviews</h2>
              <p>
                Our platform provides real user reviews from tenants who have
                stayed in PG accommodations. These reviews offer valuable
                insights and firsthand experiences, helping you make informed
                decisions.
              </p>
            </div>
            <div className="services-image col">
              <img src={img3} alt="Services" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
