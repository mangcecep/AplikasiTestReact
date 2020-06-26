/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { logo } from "../images";

function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const Navbar = () => {
  return (
    <div className="container">
      <div className="topnav" id="myTopnav">
        <Link to="/" className="logo">
          <img src={logo.url} alt={logo.alt} />
        </Link>
        <div className="topnav-right">
          <Link to="#" className="btn-round bg-purple">
            Daftar
          </Link>
          <Link to="/login" className="btn-round bg-none">
            Masuk
          </Link>
          <a href="#" className="icon" onClick={myFunction}>
            <i className="zmdi zmdi-hc-fw"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
