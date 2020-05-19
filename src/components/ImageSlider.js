import React from "react";
import implants from "../images/dental-implants.jpeg";
import chairs from "../images/dental-chairs.jpg";
import modelOne from "../images/model-one.jpg";
import modelTwo from "../images/model-two.jpeg";
import modelThree from "../images/model-three.jpg";

const ImageSlider = () => {
  return (
    <div className="slideshow">
      <hr />
      <figure className="slideshow-image">
        <img className="image-slider" src={implants} alt="dental implants" />
        <h2>Dental Implants</h2>
      </figure>
      <figure className="slideshow-image">
        <img className="image-slider" src={chairs} alt="dental implants" />
      </figure>
      <figure className="slideshow-image">
        <img className="image-slider" src={modelOne} alt="dental implants" />
      </figure>
      <figure className="slideshow-image">
        <img className="image-slider" src={modelTwo} alt="dental implants" />
      </figure>
      <figure className="slideshow-image">
        <img className="image-slider" src={modelThree} alt="dental implants" />
      </figure>
    </div>
  );
};

export default ImageSlider;
