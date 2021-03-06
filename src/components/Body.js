import React from "react";
import familyImage from "../images/smilingfamily.jpg";
import "./Body.css";
const Body = () => {
  return (
    <div className="body-container">
      <div className="copytext">
        <h4>Enhance your smile today</h4>
        <h1>Lifetime Dental Health</h1>
        <p>
          Dr. Irfhan Khan and his team welcome you to our dental offices located
          in Columbus, Grandview, and London/ Springfield. We provide a full
          range of services for adults and children. Enjoy our non-judgemental,
          friendly atmosphere and let us be your family's dental home in the
          Columbus Area!
        </p>
        <button className="button">Schedule Appointment</button>
      </div>
      <div className="image-container">
        <img
          className="family-image"
          src={familyImage}
          alt="Smiling Family"
        ></img>
      </div>
    </div>
  );
};

export default Body;
