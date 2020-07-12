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
      position: relative;
      width: 40%;
      height: auto;
    }
    p {
      font-size: 12px;
      display: float;
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
        <div className="col-md-6 col-sm-6">
          <img
            src={BackgroundLayerCopy1Image.url}
            alt={BackgroundLayerCopy1Image.alt}
            className="picture"
          />
        </div>
        <div className="col-md-6 col-sm-6">
          <p>
            Warna Green <br />
            PENCARI PELUANG <br />
            PEDAGANG ALAMI <br />
            PENGGUNA WAKTU EFISIEN
          </p>
        </div>
      </div>
    </Row>
  );
}

export default ProfileResult;
