import React from "react";
import "./Service.css";
import ImageSlider from "./ImageSlider";
import implants from "../images/dental-implants.jpeg";
import chairs from "../images/dental-chairs.jpg";
import Arrow from "./Arrow";

const Service = () => {
  const nextSlide = () => {
    console.log("Next Slider");
  };

  const previousSlide = () => {
    console.log("Next Slider");
  };

  return (
    <div className="service-container">
      <div className="service-header">
        <span>Feature Service</span>
        <span>
          <button className="button">Full Service</button>
        </span>
      </div>
      <hr />
      <ImageSlider photoURL={implants} title="Dental Implants">
        If you are missing one or more teeth, dental implants might be the best
        option for you to regain functionality and restore the beauty of your
        smile.
      </ImageSlider>
      <ImageSlider photoURL={chairs} title="title">
        Children Words
      </ImageSlider>
      <ImageSlider photoURL={implants} title="title">
        Children Words
      </ImageSlider>
      <ImageSlider photoURL={implants} title="title">
        Children Words
      </ImageSlider>
      <ImageSlider photoURL={implants} title="title">
        Children Words
      </ImageSlider>

      <Arrow direction="left" clickFunction={previousSlide} glyph="&#60;" />
      <Arrow direction="right" clickFunction={nextSlide} glyph="&#62;" />
    </div>
  );
};

export default Service;
