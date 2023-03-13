import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonUI from "../../common/button/index";
import "./index.css";

const ServicesCard = (props) => {
  const navigate = useNavigate();

  return (
    <div className="services-card">
      <div className="services-img-div">
        <img className="services-img" src={props.image} alt="" width="100%" />
      </div>
      <div className="services-content">
        <h1>{props.title}</h1>
        <p>
          {props.content}
          <br />
          <ButtonUI
            btnText="Read more"
            onClick={() => navigate(props.path)}
          />
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
