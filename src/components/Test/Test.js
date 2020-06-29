import React from "react";

import { greenBackgroundImage, buttonImage } from "../images";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Content = styled.div`
  .background {
    position: relative;
    margin-left: -160px;
    z-index: -1;
  }
  h4 {
    position: realtive;
    margin-top: -230px;
    margin-bottom: 140px;
  }
  p {
    margin-top: -129px;
    margin-right: 25px;
    margin-bottom: 100px;
    color: white;
  }
  .button {
    margin-top: -200px;
  }
`;

function Test() {
  return (
    <section className="container mt-4 mb-0">
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-ms-12">
          <Content className="content align-center">
            <img
              src={greenBackgroundImage.url}
              alt={greenBackgroundImage.alt}
              className="background"
            />
            <h4>
              Lorem ipsum dolor sit amet consectetur <br />
              adipiscing elit
            </h4>
            <Link to="/welcome">
              <img
                src={buttonImage.url}
                alt={buttonImage.alt}
                width="150px"
                height="auto"
                className="button"
              />
              <p>Ikuti Test</p>
            </Link>
          </Content>
        </div>
      </div>
    </section>
  );
}

export default Test;
