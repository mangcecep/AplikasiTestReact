/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { logo, profile2Image } from "../images";

function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const Navbar = (props) => {
  const { loginProp } = props;
  const [login, setLogin] = React.useState({ isLogin: false });
  React.useEffect(() => {
    setLogin(loginProp);
  }, []);
  // console.log(login);
  return (
    <div className="container">
      <div className="topnav" id="myTopnav">
        <Link to="/" className="logo">
          <img src={logo.url} alt={logo.alt} />
        </Link>
        <div className="topnav-right">
          {login.isLogin === true ? (
            <Link to="/profile">
              <label className="mr-3">Rendy T</label>
              <img
                src={profile2Image.url}
                alt={profile2Image.url}
                className="rounded-circle"
                width="45px"
                height="auto"
              />
            </Link>
          ) : (
            <>
              <Link to="#" className="btn-round bg-purple">
                Daftar
              </Link>
              <Link to="/login" className="btn-round bg-none">
                Masuk
              </Link>
            </>
          )}
          <a href="#" className="icon" onClick={myFunction}>
            <i className="zmdi zmdi-hc-fw"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
