import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { backgorundColor, buttonImage } from "../images";

import { Link } from "react-router-dom";

import PoppinsMedium from "../../assets/fonts/Poppins-Medium.ttf";

const Header = styled.section`
  @font-face {
    font-family: "Poppins MediumItalic";
    src: local("${PoppinsMedium}"),
      url("${PoppinsMedium}") format("truetype");
  }
  font-family: 'Poppins MediumItalic';
  background-image: url("${backgorundColor.url}");
  background-size: 100%;
  background-position: top;
  background-repeat: no-repeat;
  padding-bottom
  margin: center;
  .button {
    margin-left: -50px;
  }
  .text {
    margin-top: 20px;
    color: white;
  }
  h5.quote {
    font-size: 18px;
  }
  img {
    size : 100%;
    position: absolute;
    z-index: -1;
  }

  @media screen and (max-width: 420px) {
    background-image: url("${backgorundColor.url}");
    background-size: 100% 30%;
  }
`;

const Player = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 420px) {
    width: auto;
    heigth: 100px;
  }
`;

const Text = styled.div`
  margin-top: 185px;
  p {
    font-size: 36px;
  }
  @media screen and (max-width: 420px) {
    p {
      margin-top: -70px;
      font-size: 13px;
    }
  }
`;

function Heading() {
  return (
    <Header className="container">
      <div className="row clearfix" style={{ marginTop: "-108px" }}>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <Text className="text-center">
            <p>
              <strong>
                {" "}
                "Senang rasanya jadi ngerti tentang diri sendiri. <br />
                Bisa ngerjain sesuatu sesuai dengan <br />
                potensi diri yang sebenarnya!"{" "}
              </strong>
            </p>
          </Text>
        </div>
        <div className="col-lg-12 col-md-12">
          <Player>
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=B9Wz-RwYr_Y"
            />
          </Player>
        </div>
        <div className="col-lg-12 col-md-12 text-center">
          <div className="card mt-5">
            <h5 className="quote">
              <strong>
                "Ikuti test potensi model keberhasilan diri anda, dan dapatkan
                deskripsi, <br />
                "akurat" tentang bagaimana pontensi Anda untuk bisa mencapai{" "}
                <br />
                keberhasilan dan kekayaan, dengan efektif dan efisien."
              </strong>
            </h5>
            <Link to="/welcome">
              <img
                src={buttonImage.url}
                alt={buttonImage.alt}
                width="150px"
                height="auto"
                className="button"
              />
              <p className="text">Ikuti Test</p>
            </Link>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default Heading;
