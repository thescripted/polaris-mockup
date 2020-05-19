import React from "react";
import "./ImageSlider.css";

const ImageSlider = ({ photoURL, title, children }) => {
  return (
    <div
      className="image-slider"
      style={{ backgroundImage: `url(${photoURL})` }}
    >
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
};

export default ImageSlider;
