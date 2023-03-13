import React, { useEffect } from "react";
import ButtonUI from "../../common/button";
import "./index.css";

const Slideshow = () => {
  let slideIndex = 1;

  useEffect(() => {
    showSlides(slideIndex);
    setInterval(() => {
      showSlides(slideIndex);
      slideIndex++;
    }, 5000);
  }, [slideIndex]);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
  };
  return (
    <div>
      {/* <!-- Slideshow container --> */}
      <div className="slideshow-container">
        {/* <!-- Full-width images with number and caption text --> */}
        <div className="mySlides slide-1 fade">
          <div className="slide-content">
            <div className="slide-1-line-1">Chartered Accountant</div>
            <div className="slide-1-line-2">Chartered Accountant</div>
            <div className="slide-1-line-3">
              Chartered Accountant is an eminent Chartered Accountant firm,
              registered under ICAI, managed by a team of professionals having a vintage of more than 2 decades
              of professional experience.
            </div>
            <ButtonUI
              backgroundColor="#ffffff"
              color="#6aa323"
              margin="30px 0"
              btnText="CONTACT US"
              style={{ padding: "10px 30px", fontSize: "25px" }}
              onHover={{ backgroundColor: "#6aa323", color: "#ffffff" }}
            />
          </div>
        </div>

        <div className="mySlides slide-2 fade">
          <div className="slide-content">
            <div className="slide-1-line-1">Chartered Accountant</div>
            <div className="slide-1-line-2">Chartered Accountant</div>
            <div className="slide-1-line-3">
              Chartered Accountant is an eminent Chartered Accountant firm,
              registered under ICAI, managed by a team of professionals having a vintage of more than 2 decades
              of professional experience.
            </div>
            <ButtonUI
              backgroundColor="#ffffff"
              color="#6aa323"
              margin="30px 0"
              btnText="CONTACT US"
              onHover={{ backgroundColor: "#6aa323", color: "#ffffff" }}
              style={{ padding: "10px 30px", fontSize: "25px" }}
            />
          </div>
        </div>

        <div className="mySlides slide-3 fade">
          <div className="slide-content">
            <div className="slide-1-line-1">Chartered Accountant</div>
            <div className="slide-1-line-2">Chartered Accountant</div>
            <div className="slide-1-line-3">
              Chartered Accountant is an eminent Chartered Accountant firm,
              registered under ICAI, managed by a team of professionals having a vintage of more than 2 decades
              of professional experience.
            </div>
            <ButtonUI
              backgroundColor="#ffffff"
              color="#6aa323"
              margin="30px 0"
              btnText="CONTACT US"
              onHover={{ backgroundColor: "#6aa323", color: "#ffffff" }}
              style={{ padding: "10px 30px", fontSize: "25px" }}
            />
          </div>
        </div>

        {/* <!-- Next and previous buttons --> */}
        <span className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </span>
        <span className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </span>
      </div>
      <br />

      {/* <!-- The dots/circles --> */}

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Slideshow;
