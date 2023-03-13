import React from "react";
import Slideshow from "../../components/slideshow";
import About from "./about";
import Services from "./services";
import Contact from "./contact";

const HomePage = () => {
  return (
    <div>
      <Slideshow />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default HomePage;
