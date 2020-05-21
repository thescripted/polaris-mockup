import React, { useState, useEffect } from "react";
import "./Service.css";
import ImageSlider from "./ImageSlider";
import implants from "../images/dental-implants.jpeg";
import chairs from "../images/dental-chairs.jpg";
import dental from "../images/dental-objects.jpeg";
import modelOne from "../images/model-one.jpg";
import modelTwo from "../images/model-two.jpeg";
import Arrow from "./Arrow";
import { useWindowDimensions } from "../hooks";

const Service = () => {
  const [translate, setTranslate] = useState(0);
  const [disableLeft, setDisableLeft] = useState(false);
  const [disableRight, setDisableRight] = useState(false);
  /* disableLeft and disableRight logically ideally should be kept in a custom hook*/

  const { height, width } = useWindowDimensions();

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

  const sliderSize = Math.min(width, 900);
  const viewableImages = Math.floor(sliderSize / 220);
  const indexable = slidesData.length - viewableImages;
  console.log(indexable);
  const nextSlide = () => {
    /* All the values here are hard-coded for the sake of demonstration */
    /* The translate value should be equal to the width of the images + padding */
    setTranslate(translate - 220);
  };
  const prevSlide = () => {
    setTranslate(translate + 220);
  };

  /* Upon re-render, effect will determine if slide should be disabled or not */
  useEffect(() => {
    if (translate <= -220 * indexable) {
      setDisableRight(true);
    } else {
      setDisableRight(false);
    }

    if (translate >= 0) {
      setDisableLeft(true);
    } else {
      setDisableLeft(false);
    }
  }, [translate]);

  return (
    <div className="service-container">
      <div className="service-header">
        <h2>Featured Services</h2>
        <span>
          <button className="button desktop-button">Full Services</button>
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
            translateX={translate}
          />
        ))}
      </div>
      <div className="arrow-container">
        <Arrow
          className={`slide-arrow ${disableLeft && "disable"}`}
          direction="left"
          clickFunction={!disableLeft ? prevSlide : () => {}}
          glyph="&#8249;"
        />

        <Arrow
          className={`slide-arrow ${disableRight && "disable"}`}
          direction="right"
          clickFunction={!disableRight ? nextSlide : () => {}}
          glyph="&#8250;"
        />
        <button className="button mobile-button">Full Services</button>
      </div>
    </div>
  );
};

export default Service;
