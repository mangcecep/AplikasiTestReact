import React from "react";
import ProfileResult from "../ProfileResult";
import styled from "styled-components";
import { BackgroundLayerCopyImage, ovalPng } from "../images";

const ContentResult = styled.div`
  @font-face {
    font-family: "Poppins Medium";
    src: local("Poppins Medium"),
      url(../../assets/fonts/Poppins-Medium.ttf) format("truetype");
  }
  font-family: "Poppins Medium";
  img.absolute {
    width: 75%;
    height: auto;
    position: relative;
    z-index: -1;
  }
  img.relative {
    margin-left: 100px;
    margin-top: -450px;
    width: 50%;
    height: auto;
  }
  @media screen and (max-width: 420px) {
    .title {
      text-align: center;
    }
    img.absolute {
      margin-left: 70px;
      width: 75%;
      height: auto;
      position: relative;
      z-index: -1;
    }
    img.relative {
      margin-left: 100px;
      margin-top: -300px;
      width: 50%;
      height: auto;
    }
  }
`;

function index() {
  return (
    <ContentResult>
      <h5 className="title">MERCHANT</h5>
      <h5 className="title">(The Mediator)</h5>
      <div className="row clearfix mt-5">
        <div className="col-lg-5 col-md-5 col-sm-5">
          <img src={ovalPng.url} alt={ovalPng.alt} className="absolute" />
          <img
            src={BackgroundLayerCopyImage.url}
            alt={BackgroundLayerCopyImage.alt}
            className="relative"
          />
        </div>
        <div className="col-lg-7 col-md-7 col-sm-7">
          <div className="content ml-5">
            <p>
              Negosiator ulung. Pedagang yang handal, Pencari peluang. Pengguna
              waktu yang efektif dan efisien, fleksibel, Bekerja dalam pola/
              parameter tertentu, berdasarkan data.
            </p>
            <p>
              Seseorang yang mampu memanfaatkan kekuatan dari wawasan yang luas,
              yang menampung apapun dari segala penjuru. mencapai keberhasilan
              dengan menerima berbagai hal, dan memanfaatkannya untuk
              keberhasilan yang lebih besar
            </p>
            <ProfileResult />
          </div>
        </div>
      </div>
    </ContentResult>
  );
}

export default index;
