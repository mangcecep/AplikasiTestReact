import React from "react";
import { BackgroundLayerCopy1Image } from "../images";
import styled from "styled-components";

const Row = styled.div`
  .picture {
    margin-top: 20px;
    width: 50%;
    height: auto;
  }
  p {
    font-size: 17px;
    display: inline;
  }
  @media screen and (max-width: 420px) {
    .picture {
      margin-left: -20px;
      position: absolute;
      width: 30%;
      height: auto;
    }
    .text {
      margin-top: 10px;
      margin-left: 100px;
      font-size: 7px;
    }
  }
`;
function ProfileResult() {
  return (
    <Row>
      <div className="row clearfix">
        <div className="col-md-12 col-sm-12">
          <strong>Elemen Kisama(Tanah)</strong>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <img
            src={BackgroundLayerCopy1Image.url}
            alt={BackgroundLayerCopy1Image.alt}
            className="picture"
          />
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="text">
            <p>Warna Green </p>
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
