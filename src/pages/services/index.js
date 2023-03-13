import React from "react";
import Banner from "../../common/banner/index";
import servicesImg from "../../assets/services.jpg";
import gst from "../../assets/gst.png";
import company from "../../assets/company.jpg";
import tax from "../../assets/tax.webp";
import financialServices from "../../assets/Financial-services.jpg";
import ServicesCard from "../../components/serviceCard";
import "./index.css";

const ServicesPage = () => {
  const url = '/services'
  
  const servicesArray = [
    {
      image: gst,
      title: "Goods and Services Tax",
      path: `${url}/gst`,
      content: "At Chirush Professional Services, we understand that managing GST compliance can be a daunting and overwhelming task. That's why we offer a comprehensive suite of services that cover all aspects of GST registration and filing in India. Our team of expert professionals works tirelessly to ensure that your business is compliant with all the GST regulations and requirements, so you can focus on growing your business.",
    },
    {
      image: financialServices,
      title: "Company Formation",
      path: `${url}/company-formation`,
      content: "At Chirush Professional Services, we understand that starting a business can be a daunting and overwhelming task. That's why we offer a comprehensive suite of services that cover all aspects of company formation in India, from registering your company with the Registrar of Companies (ROC) to obtaining the necessary licenses and permits. Our team of expert professionals works tirelessly to ensure that your business is set up efficiently and legally, so you can focus on growing your business.",
    },
    {
      image: tax,
      title: "Accounting, Book Keeping & ITR Return",
      path: `${url}/accounting`,
      content: "At Chirush Professional Services, we understand that managing finances can be a daunting and overwhelming task. That's why we offer a comprehensive suite of services that cover all aspects of accounting, bookkeeping, and income tax returns in India. Our team of expert professionals works tirelessly to ensure that your business is compliant with all the financial regulations and requirements, so you can focus on growing your business.",
    },
    {
      image: company,
      title: "CMA DATA & Project Report",
      path: `${url}/cma-data`,
      content: "At Chirush Professional Services, we understand that managing finances can be a daunting and overwhelming task. That's why we offer a comprehensive suite of services that cover all aspects of CMA data and project report services in India. Our team of expert professionals works tirelessly to ensure that your business is compliant with all the financial regulations and requirements, so you can focus on growing your business.",
    },
    {
      image: company,
      title: "Printing & Stationary Services",
      path: `${url}/printing`,
      content: "At Chirush Professional Services, we understand that producing high-quality financial prints and stationary can be a time-consuming and laborious process. That's why we offer a comprehensive suite of services that cover all aspects of financial printing and stationary in India. Our team of expert professionals works tirelessly to ensure that your prints and stationary are of the highest quality and delivered on time, so you can focus on growing your business.",
    },
    {
      image: company,
      title: "ROC return & Compliance",
      path: `${url}/roc`,
      content: "At Chirush Professional Services, we understand that managing ROC compliance can be a daunting and overwhelming task. That's why we offer a comprehensive suite of services that cover all aspects of ROC compliance and filing in India. Our team of expert professionals works tirelessly to ensure that your business is compliant with all the ROC regulations and requirements, so you can focus on growing your business.",
    },
    {
      image: company,
      title: "Trade License Registration",
      path: `${url}/trade-license`,
      content: "At Chirush Professional Services, we understand that obtaining and maintaining a trade license can be a time-consuming and complicated process. That's why we offer a comprehensive suite of services that cover all aspects of trade license registration and renewal in India. Our team of expert professionals works tirelessly to ensure that your business obtains and maintains the required trade license, so you can focus on growing your business.",
    },
    {
      image: company,
      title: "MSME Registration",
      path: `${url}/msme`,
      content: "At Chirush Professional Services, we understand that obtaining an MSME registration can be a complicated process, but it is essential for businesses to avail the benefits of various government schemes and policies. That's why we offer a comprehensive suite of services that cover all aspects of MSME registration in India. Our team of expert professionals works tirelessly to ensure that your business obtains the required MSME registration, so you can focus on growing your business.",
    },
    {
      image: company,
      title: "Import & Export Code",
      path: `${url}/iec`,
      content: "At Chirush Professional Services, we understand that obtaining an IEC registration is essential for businesses that want to engage in international trade. That's why we offer a comprehensive suite of services that cover all aspects of IEC registration in India. Our team of expert professionals works tirelessly to ensure that your business obtains the required IEC registration, so you can focus on growing your business.",
    },
  ];

  return (
    <div>
      <Banner title="Services We Offer" backgroundImage={servicesImg} />
      <div className="services-cards">
        {servicesArray.map((el) => (
          <ServicesCard
            title={el.title}
            image={el.image}
            content={el.content}
            path={el.path}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
