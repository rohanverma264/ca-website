import React from "react";
import Banner from "../../common/banner";
import backgroundImage from "../../assets/about-page-bg.jpg";
import aboutPic from "../../assets/about-us.jpg";
import "./index.css";

const AboutPage = () => {
  return (
    <div>
      <Banner
        backgroundImage={backgroundImage}
        title="We are a Corporate Business Agency"
      />
      <h1
        style={{
          fontWeight: "800",
          fontSize: "50px",
          color: "#0580c6",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        About Us
      </h1>
      <div className="about-page-container">
        <div className="about-page-img-div">
          <img
            className="about-page-img"
            src={aboutPic}
            alt="pic"
            width="100%"
          />
        </div>
        <div className="about-page-content-div">
          <p>
            Welcome to Chirush Professional Services, your trusted partner in
            financial services. We are a leading financial services company that
            specializes in providing a wide range of financial solutions to
            businesses and individuals in India. With our extensive experience
            and deep understanding of the Indian financial system, we are
            committed to helping our clients achieve their financial goals.
            <br />
            At Chirush Professional Services, we understand that every
            individual and business has unique financial needs, which is why we
            offer customized solutions that are tailored to meet your specific
            requirements. Whether you need accounting, bookkeeping, tax
            planning, or financial advisory services, we have a team of experts
            that will work with you to deliver the best solutions that fit your
            needs.
            <br />
            Our services include:
            <br />
            Accounting and Bookkeeping: Our team of accounting and bookkeeping
            experts provides accurate and reliable financial reports to help you
            make informed decisions about your business.
            <br />
            Tax Planning and Compliance: We help businesses and individuals
            navigate the complex world of taxation in India, ensuring compliance
            and optimizing tax savings.
            <br />
            Financial Advisory: Our experienced financial advisors provide
            expert guidance to help individuals and businesses achieve their
            long-term financial goals.
            <br />
            Business Registration and Compliance: We help businesses register
            and comply with various regulatory requirements, such as ROC
            filings, GST registration, and more.
            <br />
            At Chirush Professional Services, we are committed to providing the
            highest level of professionalism and customer service to our
            clients. Our team of experts works tirelessly to deliver the best
            financial solutions that meet your needs and exceed your
            expectations. We believe in building long-lasting relationships with
            our clients based on trust, transparency, and integrity. Contact us
            today to learn more about our services and how we can help you
            achieve your financial goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
