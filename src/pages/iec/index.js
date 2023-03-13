import React from "react";
import Banner from "../../common/banner";
import iec from "../../assets/services-image/iec.avif";
import "./index.css";

const IEC = () => {
  return (
    <div>
      <Banner backgroundImage={iec} title="Import & Export Code" />
      <div className="msme-text">
        <h1>Import & Export Code</h1>
        <p>
          Welcome to Chirush Professional Services, the leading provider of
          Import & Export Code (IEC) registration services in India. We are
          dedicated to providing comprehensive solutions that help businesses of
          all sizes obtain their IEC registration. With our extensive experience
          and knowledge of the Indian regulatory system, we make IEC
          registration easy and straightforward for our clients.
          <br />
          <br />
          At Chirush Professional Services, we understand that obtaining an IEC
          registration is essential for businesses that want to engage in
          international trade. That's why we offer a comprehensive suite of
          services that cover all aspects of IEC registration in India. Our team
          of expert professionals works tirelessly to ensure that your business
          obtains the required IEC registration, so you can focus on growing
          your business.
          <br />
          <h3>Our IEC registration services include:</h3>
          <ul>
            <li>
              IEC Registration: We provide comprehensive IEC registration
              services that cover all the required documentation and processes.
              Our team ensures that your IEC registration is obtained on time
              and without any delays, ensuring that your business operations are
              not interrupted.
            </li>
            <li>
              IEC Compliance: We offer comprehensive IEC compliance services to
              ensure that your business is always in compliance with the
              regulations. Our team ensures that all the required documentation
              and processes are followed, ensuring that your business operations
              are not interrupted.
            </li>
            <li>
              IEC Amendment: We provide expert services for making any changes
              in your existing IEC, including modification of the address,
              addition of directors/partners, and more.
            </li>
          </ul>
          At Chirush Professional Services, we are committed to providing the
          highest quality IEC registration services in India. Our team of
          experts is dedicated to helping you obtain your IEC registration, and
          we strive to make the process easy and stress-free. Contact us today
          to learn more about our services and how we can help you take your
          business to the next level in international trade.
        </p>
      </div>
    </div>
  );
};

export default IEC;
