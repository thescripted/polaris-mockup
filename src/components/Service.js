import React from "react";
import "./Service.css";
import ImageSlider from "./ImageSlider";

const Service = () => {
  return (
    <div className="service-container">
      <div className="service-header">
        <span>Feature Service</span>
        <span>
          <button className="button">Full Service</button>
        </span>
        <ImageSlider />
      </div>
    </div>
  );
};

export default Service;
