import React from "react";
import "./Arrow.css";
const Arrow = ({ className, clickFunction, glyph }) => {
  return (
    <div className={className} onClick={clickFunction}>
      {glyph}
    </div>
  );
};

export default Arrow;
