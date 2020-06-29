import React from "react";

import styled from "styled-components";
import {
  gorup32Image,
  gorup33Image,
  gorup29Image,
  gorup31Image,
  group9Image,
} from "../images";

import { Link } from "react-router-dom";

const Number = styled.section`
  margin-left: 30px;
  margin-right: 30px;
  img.imageNumber {
    width: 60%;
    height: auto;
  }
  p {
    font-size: 15px;
  }
  img.button {
    position: absolute;
    margin-left: -70px;
    margin-bottom: 70px;
    z-index: -10;
  }
  p.textbutton {
    margin-top: 10px;
    color: #fdfefe;
    font-size: 17px;
  }
`;

function NumberImage() {
  return (
    <Number className="container">
      <div className="row clearfix mt-2 pt-4">
        <div className="col-lg-4 col-md-12 col-sm-12">
          <img
            src={gorup32Image.url}
            alt={gorup32Image.alt}
            className="imageNumber"
          />
          <p className="number">
            Melakukan penyesuaiam <br />
            dalam cara kerja Anda
          </p>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <img
            src={gorup32Image.url}
            alt={gorup32Image.alt}
            className="imageNumber"
          />
          <p className="number">
            Mengerti bagaimana Anda <br />
            bisa men-tune-up bisnis <br />
            Anda
          </p>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <img
            src={gorup33Image.url}
            alt={gorup33Image.alt}
            className="imageNumber"
          />
          <p className="number">
            Menyadari apa yang <br />
            menjadi kekuatan <br />
            maupun tantangan diri <br />
            Anda
          </p>
        </div>
        <div className="col-lg-2 col-md-12 col-sm-12"></div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <img
            src={gorup29Image.url}
            alt={gorup29Image.alt}
            className="imageNumber"
          />
          <p className="number">
            Mengerti model rekan <br />
            atau karyawan yang <br />
            anda butuhkan untuk <br />
            berhasil lebih cepat
          </p>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <img
            src={gorup31Image.url}
            alt={gorup31Image.alt}
            className="imageNumber"
          />
          <p className="number">
            Mampu untuk mencapai <br />
            sukses dengan cara yang <br />
            lebih menyenangkan
            <br />
            dalam mencapai tujuan
          </p>
        </div>
        <div className="col-lg-2 col-md-12 col-sm-12"></div>
        <div className="col-lg-12 col-md-12 col-sm-12 align-center mt-4">
          <Link to="/twelve-questions">
            <img
              src={group9Image.url}
              alt={group9Image.alt}
              width="20%"
              height="auto"
              className="button"
            />
            <p className="textbutton">Mulai Test</p>
          </Link>
        </div>
      </div>
    </Number>
  );
}

export default NumberImage;
