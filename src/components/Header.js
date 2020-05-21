import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <span className="logo">logo</span>
      <div className="header-container">
        <div className="header-contacts">
          <span>
            <b>Columbus</b> 614.505.7027
          </span>
          <span>
            <b>Grandview</b> 614.505.7027
          </span>
          <span>
            <b>London</b> 614.505.7027
          </span>
          <span>
            <button className="schedule-button">Schedule Appointment</button>
          </span>
        </div>
        <span className="header-menu">
          Call
          <div className="mobile-call">
            <p>Columbus 614.505.7027 </p>
            <p>Grandview 614.505.7027 </p>
            <p>London 614.505.7027 </p>
          </div>
        </span>
        <div className="navbar">
          <ul>
            <li>
              <a href="/">About POLARIS Dental</a>
            </li>
            <li className="carat">
              <span className="treatment">
                Treatments
                <div className="dropdown-content-treatments">
                  <a href="/">Info One</a>
                  <a href="/">Info Two</a>
                  <a href="/">Info Three</a>
                </div>
              </span>
            </li>
            <li className="carat">
              <span className="patient">
                For Patients
                <div className="dropdown-content-patient">
                  <a href="/">Info One</a>
                  <a href="/">Info Two</a>
                </div>
              </span>
            </li>
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/">Contact & Locations</a>
            </li>
          </ul>
        </div>
        <span className="booking">Book</span>
        <span className="navbar-menu">
          Menu
          <div className="mobile-nav">
            <p>About POLARIS Dental</p>
            <p>Treatments</p>
            <p>For Patients</p>
            <p>News</p>
            <p>Contact & Locations</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Header;
