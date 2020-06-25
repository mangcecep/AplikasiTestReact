import React from "react";
import { logo } from "../images";

function Loader() {
  return (
    <div className="page-loader-wrapper">
      <div className="loader">
        <div className="m-t-30">
          <img
            className="zmdi-hc-spin"
            src={logo.url}
            width="48"
            height="48"
            alt={logo.alt}
          />
        </div>
        <p>Please wait...</p>
      </div>
    </div>
  );
}

export default Loader;
