import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-list-container">
        <div className="footer-list">
          <h3>Who we are</h3>
          <Link>
            <p>Home</p>
          </Link>
          <Link>
            <p>About Us</p>
          </Link>
          <Link>
            <p>Contact Us</p>
          </Link>
        </div>
        <div className="footer-list">
          <h3>What we do</h3>
          <Link>
            <p>Transfer Pricing</p>
          </Link>
          <Link>
            <p>Tax Dispute Resolution Services</p>
          </Link>
          <Link>
            <p>Mergers & Acquisitions</p>
          </Link>
          <Link>
            <p>Regulatory & Corporate Secretarial</p>
          </Link>
        </div>
        <div className="footer-list">
          <h3>Important Link</h3>
          <Link to='https://incometaxindia.gov.in/Pages/default.aspx'>
            <p>Income Tax Dept.</p>
          </Link>
          <Link to='https://cbec.gov.in/'>
            <p>Central Board of Excise & Customs</p>
          </Link>
          <Link to='https://mca.gov.in/'>
            <p>Ministry of Corporate Affairs</p>
          </Link>
          <Link to='https://epfindia.com/site_en/'>
            <p>Employees Provident Fund</p>
          </Link>
        </div>
        <div className="footer-list">
          <h3>Contact Us</h3>
          <p>16 strand road 601A, 6th Floor,</p>
          <p>Diamond Heritage, Kolkata-700001</p>
          <Link to="tel:+919147063895">
            <p>+91 914 706 3895</p>
          </Link>
          <Link to="mailto:caportal@sagipl.com">
            <p>caportal@sagipl.com</p>
          </Link>
        </div>
      </div>
      <hr />
      <p className="copyright-text">© 2023 <b>Chartered Accountants</b>. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
