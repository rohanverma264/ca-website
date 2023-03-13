import React from "react";
import "./index.css";

const Banner = (props) => {
  return (
    <div
      className="banner-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${props.backgroundImage})`,
      }}
    >
      <div className="banner-title">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default Banner;
