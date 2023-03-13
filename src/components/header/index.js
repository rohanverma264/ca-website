import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from '@mui/icons-material/Instagram';import "./index.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="left-header">
        <span className="header-content">
          <EmailIcon className="icon" fontSize="small" />
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="maito:professional@chirush.org"
          >
            professional@chirush.org
          </Link>
        </span>
        <span className="header-content">
          <CallIcon className="icon" fontSize="small" />
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="tel:+919147063895"
          >
            +91 914 706 3895
          </Link>
        </span>
      </div>
      <div className="right-header">
        <FacebookIcon className="icon" fontSize="small" />
        <TwitterIcon className="icon" fontSize="small" />
        <InstagramIcon className="icon" fontSize="small" />
      </div>
    </div>
  );
};

export default Header;
