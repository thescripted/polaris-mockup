import React from "react";
import "./ImageSlider.css";

const ImageSlider = ({ title, photoURL, content, site, translateX }) => {
  const styles = {
    transform: `translate(${translateX}px)`,
    transition: "0.35s ease",
  };
  return (
    <div className="slide" style={styles}>
      <img src={photoURL} alt="default" />
      <div className="overlay">
        <h3>{title}</h3>
        <div className="overlay-content">
          <p>{content}</p>
          <a href="/">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
