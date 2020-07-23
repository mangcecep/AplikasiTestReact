import React from "react";
import { BackgroundLayerCopy1Image } from "../images";
import styled from "styled-components";

const Row = styled.div`
  .picture {
    margin-left: 20px;
    width:80%;
    heigth: 80%;
  }
  .text {
    margin-top: 40px;
  }
  p {
    font-size: 17px;
    display: inline;
    @font-face {
      font-family: "Poppins SemiBold";
      src: local("Poppins SemiBold"),
        url(../../assets/fonts/Poppins-SemiBold.ttf) format("truetype");
    }
    font-family: "Poppins SemiBold";
  }
  @media screen and (max-width: 420px) {
    .picture {
      margin-left: 10px;
      position: absolute;
      width: 30%;
      height: auto;
    }
    .text {
      margin-top: 10px;
      margin-left: 150px;
      font-size: 7px;
    }
  }
  .judul {
    @font-face {
      font-family: "Poppins ExtraBold";
      src: local("Poppins ExtraBold"),
        url(../../assets/fonts/Poppins-ExtraBold.ttf) format("truetype");
    }
    font-family: "Poppins ExtraBold";
  }
  .title {
    display: flex;
    flex-wrap: nowrap;
  }
`;

const Circle = styled.div`
  margin-left: 20px;
  margin-top: -10px;
  width: 40px;
  height: 40px;
  background: #8EBC50;
  border-radius: 100%;
`;
function ProfileResult() {
  return (
    <Row>
      <div className="row clearfix">
        <div className="col-md-12 col-sm-12">
          <p className="judul">Elemen Kisma (Tanah)</p>
        </div>
      </div>
      <div className="row clearfix mt-4">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <img
            src={BackgroundLayerCopy1Image.url}
            alt={BackgroundLayerCopy1Image.alt}
            className="picture"
          />
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="text">
            <div className="title">
              <p className="color">Warna GREEN </p>
              <Circle/>
            </div>
            <br />
            <p>PENCARI PELUANG </p>
            <br />
            <p>PEDAGANG ALAMI </p>
            <br />
            <p>PENGGUNA WAKTU EFISIEN</p>
          </div>
        </div>
      </div>
    </Row>
  );
}

export default ProfileResult;
