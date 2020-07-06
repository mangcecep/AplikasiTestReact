/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logo, profile2Image } from "../images";
import "../../assets/fonts/Poppins-Black.ttf";

const NavHeader = styled.nav`
  @font-face {
    font-family: "Poppins Black";
    src: local("Poppins Black"),
      urL(../../assets/fonts/Poppins-Black.ttf) format("truetype");
  }
  font-family: "Poppins Black";
  font-size: 12px;
  color: #141823;
  font-size: 20px;
  position: relative;
  box-shadow: none;
  .registerButton {
    box-shadow: 1px 3px 5px grey;
  }
`;

const Navbar = (props) => {
  const { loginProp } = props;
  const [login, setLogin] = React.useState({ isLogin: false });
  React.useEffect(() => {
    setLogin(loginProp);
  }, [loginProp]);
  // console.log(login);
  return (
    <NavHeader className="navbar navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo.url} alt={logo.alt} width="150px" height="auto" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="zmdi zmdi-hc-fw"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <div className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
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
                  <li className="nav-item">
                    <Link
                      to="/login"
                      className="px-4 py-2 bg-none nav-link text-dark"
                    >
                      <strong>Masuk</strong>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="#"
                      className="registerButton btn btn-round bg-purple px-4 py-2 nav-link"
                    >
                      Daftar
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </NavHeader>
  );
};

export default Navbar;
