import React from "react";
import dentalObjects from "../images/dental-objects.jpeg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <img src={dentalObjects} alt="dental objects" />
      <div>
        <h1>Why Choose Polaris Dental?</h1>
        <hr />
        <div className="reasons">
          <div className="why-choose-object">Flexible</div>
          <div className="why-choose-object">Patent Discount</div>
          <div className="why-choose-object">Modern Technology</div>
          <div className="why-choose-object">Insurance Accepted</div>
          <div className="why-choose-object">Comfortable Amenties</div>
          <div className="why-choose-object">Commiment to Excellence</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
