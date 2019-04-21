import React, { useState } from "react";

import "./ClickBox.css";

const ClickBox = ({ position, width, clicks }) => {
  console.log("position", position);
  return (
    <div
      className="ClickBox tall"
      style={{ width: width, transform: `translateX(${position}px)` }}
    >
      {clicks}
    </div>
  );
};

export default ClickBox;
