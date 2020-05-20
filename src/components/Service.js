import React, { useState } from "react";
import "./Service.css";
import ImageSlider from "./ImageSlider";
import implants from "../images/dental-implants.jpeg";
import chairs from "../images/dental-chairs.jpg";
import dental from "../images/dental-objects.jpeg";
import modelOne from "../images/model-one.jpg";
import modelTwo from "../images/model-two.jpeg";
import Arrow from "./Arrow";

const Service = () => {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });
  const getWidth = () => window.innerWidth;
  const slidesData = [
    {
      title: "Dental Implants",
      photoURL: implants,
      key: "1",
      content: `If you are missing one or more teeth, 
        dental implants might be the best option 
        for you to regain functionality and 
        restore the beauty of your smile.`,
      site: "/",
    },
    {
      title: "Orthodontics",
      photoURL: chairs,
      key: "al2t",
      content: "Content",
      site: "/",
    },
    {
      title: "Cosmetic Dentistry",
      photoURL: dental,
      key: "3",
      content: "Content",
      site: "/",
    },
    {
      title: "Preventative Care",
      photoURL: modelOne,
      key: "4",
      content: "Content",
      site: "/",
    },
    {
      title: "Sedation Dentistry",
      photoURL: modelTwo,
      key: "5",
      content: "Content",
      site: "/",
    },
  ];

  const nextSlide = () => {
    if (state.activeIndex === slidesData.length - 1) {
      return setState({ ...state, translate: 0, activeIndex: 0 });
    }

    setState({
      ...state,
      activeIndex: state.activeIndex + 1,
      translate: (state.activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (state.activeIndex === 0) {
      return setState({
        ...state,
        translate: (slidesData.length - 1) * getWidth(),
        activeIndex: slidesData.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: state.activeIndex - 1,
      translate: (state.activeIndex - 1) * getWidth(),
    });
  };

  return (
    <div className="service-container">
      <div className="service-header">
        <h2>Featured Services</h2>
        <span>
          <button className="button">Full Services</button>
        </span>
      </div>
      <div className="service-slides">
        <hr />
        {slidesData.map((slide) => (
          <ImageSlider
            key={slide.key}
            title={slide.title}
            photoURL={slide.photoURL}
            content={slide.content}
          />
        ))}

        <Arrow
          className="arrow"
          direction="left"
          clickFunction={prevSlide}
          glyph="&#60;"
        />

        <Arrow
          className="arrow"
          direction="right"
          clickFunction={nextSlide}
          glyph="&#62;"
        />
      </div>
    </div>
  );
};

export default Service;
