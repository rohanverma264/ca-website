import React from "react";
import { useNavigate } from "react-router-dom";
import aboutImage from "../../../assets/about-img.jpg";
import ButtonUI from "../../../common/button";
import "./index.css";

const About = () => {
const navigate = useNavigate();
  return (
    <div className="about-container">
      <div className="about-img-div">
        <img className="about-img" src={aboutImage} alt="pic" width="100%" />
      </div>
      <div className="about-content-div">
        <h1>About Company</h1>
        <p>
          Welcome to Chirush Professional Services, your one-stop solution for
          all your financial needs. We are a leading financial services company
          that offers a comprehensive range of services to businesses and
          individuals in India. With our expertise in the financial industry and
          our commitment to providing exceptional customer service, we have
          helped numerous clients achieve their financial goals.
          <br />
          At Chirush Professional Services, we understand that navigating the
          complex financial landscape in India can be challenging. That's why we
          offer a wide range of services that cover all aspects of financial
          planning, accounting, taxation, and compliance. Our team of experts
          works closely with you to develop customized solutions that meet your
          unique needs and help you achieve your financial objectives.
        </p>
        <ButtonUI btnText="Read more" onClick={() => navigate('/about')}/>
      </div>
    </div>
  );
};

export default About;
