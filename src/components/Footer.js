import React from "react";
import dentalObjects from "../images/dental-objects.jpeg";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-image-container">
        <img src={dentalObjects} alt="dental objects" />
      </div>
      <div className="right-of-image">
        <h2>Why Choose Polaris Dental?</h2>
        <hr />
        <div className="reasons">
          <div className="why-choose-object">
            <i className="far fa-address-card"></i>
            <h3>Flexible</h3>
            <p>
              We are open evenings and some Saturdays. No need to take time from
              work or school to attend your appointments.
            </p>
          </div>

          <div className="why-choose-object">
            <i className="far fa-address-card"></i>
            <h3>Patent Discount</h3>
            <p>
              No insurance? No problem. We offer generous discounts to help you
              afford the treatments you need and want.
            </p>
          </div>
          <div className="why-choose-object">
            <i className="far fa-address-card"></i>
            <h3>Modern Technology</h3>
            <p>
              We use advanced technology including low-radiation digital x-rays,
              Diode Laser, and computerized charting for accuracy and security.
            </p>
          </div>
          <div className="why-choose-object">
            <i className="far fa-address-card"></i>
            <h3>Insurance Accepted</h3>
            <p>
              We are in network with many insurances and will always work with
              your insurance company to help you get the most from your
              benefits.
            </p>
          </div>
          <div className="why-choose-object">
            <i className="far fa-address-card"></i>
            <h3>Comfortable Amenities</h3>
            <p>
              Our comfortable offices offer a coffee station, a kids' TV area,
              and a TV in each treatment room.
            </p>
          </div>
          <div className="why-choose-object">
            <i className="far fa-address-card"></i>
            <h3>Commiment to Excellence</h3>
            <p>
              Dr. Khan and his team stay up-to-date with the latest dental
              methods and take 6-7 times the amount of education our state
              requires.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
