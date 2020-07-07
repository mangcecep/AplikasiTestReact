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
      width: 25%;
      height: auto;
      display: inline-block;
    }
    p {
      font-size: 12px;
      display: inline;
    }
  }
`;
function ProfileResult() {
  return (
    <Row className="row clearfix">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <strong>Elemen Kisama(Tanah)</strong>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6">
        <img
          src={BackgroundLayerCopy1Image.url}
          alt={BackgroundLayerCopy1Image.alt}
          className="picture"
        />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 my-auto">
        <p>
          Warna Green <br />
          PENCARI PELUANG <br />
          PEDAGANG ALAMI <br />
          PENGGUNA WAKTU EFISIEN
        </p>
      </div>
    </Row>
  );
}

export default ProfileResult;
