import React from "react";
const Arrow = ({ className, clickFunction, glyph }) => {
  return (
    <div className={className} onClick={clickFunction}>
      {glyph}
    </div>
  );
};

export default Arrow;
