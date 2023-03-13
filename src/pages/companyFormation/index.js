import React from "react";
import Banner from "../../common/banner";
import companyFormation from "../../assets/services-image/company-formation.jpg";
import './index.css'

const CompanyFormation = () => {
  return (
    <div>
      <Banner backgroundImage={companyFormation} title="Company Formation" />
      <div className="company-formation-text">
        <h1>Company Formation</h1>
        <p>
          Welcome to Chirush Professional Services, the leading provider of
          company formation services in India. We are dedicated to helping
          entrepreneurs and businesses of all sizes establish their operations
          in India quickly and easily. With our extensive experience and
          knowledge of the Indian legal system, we make the process of company
          formation in India hassle-free and straightforward.
          <br />
          <br />
          We offer a range of company formation services that cater to the
          unique needs of our clients. Whether you are a startup, a small
          business, or a multinational corporation, we have the expertise to
          help you establish your operations in India.
          <br />
          <h3>Our services include:</h3>
          <ul>
            <li>
              Company Registration: We help you register your company with the
              ROC, the governing body responsible for the administration of
              company law in India. We ensure that your company is registered in
              compliance with all the legal requirements, ensuring a smooth and
              hassle-free registration process.
            </li>
            <li>
              Business Licensing: We help you obtain the necessary licenses and
              permits to operate your business in India, including GST
              registration, import-export code, FSSAI registration, and more.
              Our team ensures that you obtain all the necessary licenses and
              permits to operate your business legally and efficiently.
            </li>
            <li>
              Legal and Compliance Services: We offer a range of legal and
              compliance services, including legal drafting, due diligence, and
              advisory services. Our team of expert legal professionals provides
              legal guidance and support throughout the entire company formation
              process, ensuring that your business is compliant with all the
              legal requirements.
            </li>
          </ul>
          At Chirush Professional Services, we are committed to providing the
          highest quality company formation services in India. Our team of
          experts is dedicated to helping you establish your operations in India
          quickly and easily. Contact us today to learn more about our services
          and how we can help you take your business to the next level.
        </p>
      </div>
    </div>
  );
};

export default CompanyFormation;
