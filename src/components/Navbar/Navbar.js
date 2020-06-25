import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { logo } from "../images";

const Nav = styled.div`
  background-color: rgba(0, 128, 0, 0.01);
`;

function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg my-auto">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo.url} alt={logo.alt} height="auto" width="170px" />
        </Link>
        <button
          className="navbar-toggler mr-5"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="zmdi zmdi-hc-fw"></i>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end mr-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav list-unstyled">
            <li className="nav-item mr-4">
              {/* <Link to="#" className="btn btn-lg"> */}
              <strong> Masuk </strong>
              {/* </Link> */}
            </li>
            <li className="nav-item old_price">
              <Link to="#" className="btn-lg btn-round bg-purple">
                Daftar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
