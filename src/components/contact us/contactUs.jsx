import React from "react";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="whole-page">
      <div className="contact-us-page">
        <h1 className="contact-heading">Contact Us</h1>
        <form className="contact-us-form">
          <div className="a-form-group ">
            {/* <label className="lables" htmlFor="name">
            Name:
          </label> */}
            <input
              className="contact-us-inputs"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="a-form-group">
            {/* <label className="lables" htmlFor="email">
            Email:
          </label> */}
            <input
              size={30}
              className="contact-us-inputs"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="a-form-group">
            {/* <label className="lables" htmlFor="message">
            Message:
          </label> */}
            <textarea
              className="contact-us-inputs-textarea"
              rows={5}
              cols={25}
              id="message"
              name="message"
              placeholder="Message..."
            ></textarea>
          </div>
          <button className="contact-us-button" type="submit">
            Submit <span className="arrow">&rarr;</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
