import React from "react";
import logos2 from "../../../Image/logos2.png";
// import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-land" id="home">
    <nav className="navbar navbar-expand-lg navbar-light headr ">
      {/* <div className="container"> */}
        <img src={logos2} alt="" width="70"/>
        <a className="navbar-brand" href="##">
          OSans
        </a>
        <button
          className="navbar-toggler toggle"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          {/* <a className="nav-item nav-link one nounderline" href="##">
                Home
              </a> */}
              <a className="nav-item nav-link oneee nounderline" href="#home">
                Home
              </a>
              <a className="nav-item nav-link mar-left nounderline" href="#about">
                About
              </a>
              <a className="nav-item nav-link mar-left nounderline" href="#features">
                Features
              </a>
            {/* <Link to="/register"> */}
              <a className="nav-item nav-link mar-left nounderline" href="##">
                More
              </a>
            {/* </Link> */}
            {/* <Link to="/chat"> */}
              <a className="nav-item nav-link mar-left nounderline" href="##">
                Contact
              </a>
            {/* </Link> */}
          </div>
          <div className="ml-auto">
        <button type="button" className="btn btn-outline-primary signin">SIGN IN</button>
            </div>
        </div>
      {/* </div> */}
    </nav>
  </div>
  );
};

export default Navbar;
