import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="logo">logo</h1>
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
          <button className="button">Schedule Appointment</button>
        </span>
      </div>
      <div className="navbar">
        <ul>
          <li>
            <a href="/">About POLARIS Dental</a>
          </li>
          <li>
            <a href="/">Treatments</a>
          </li>
          <li>
            <a href="/">For Patients</a>
          </li>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">Contact & Locations</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;