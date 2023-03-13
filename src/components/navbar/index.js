import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

import "./index.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavBar = () => {
    setShowNavbar((prev) => !prev);
  };

  const closeNavbar = () => setShowNavbar(false);

  return (
    <div>
      <div className="navbar-container">
        <div className="logo-div">
          <Link to="/">
            <img src={logo} alt="logo" width="70%" />
          </Link>
        </div>
        <div className="menu-icon">
          <MenuIcon onClick={toggleNavBar} />
        </div>

        <div className="nav-panel">
          <div>
            <Link className="nav-links" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="nav-links" to="/about">
              About
            </Link>
          </div>
          <div>
            <Link className="nav-links" to="/services">
              Services
            </Link>
          </div>
          <div>
            <Link className="nav-links" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
      {showNavbar && (
        <div className="nav-panel-mobile">
          <div onClick={closeNavbar}>
            <Link className="nav-links" to="/">
              Home
            </Link>
          </div>
          <div onClick={closeNavbar}>
            <Link className="nav-links" to="/about">
              About
            </Link>
          </div>
          <div onClick={closeNavbar}>
            <Link className="nav-links" to="/services">
              Services
            </Link>
          </div>
          <div onClick={closeNavbar}>
            <Link className="nav-links" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
