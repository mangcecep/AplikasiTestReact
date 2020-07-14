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
    margin: auto;
  }
  p {
    font-size: 15px;
  }

  p.textbutton {
    background-image: url("${group9Image.url}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 20%;
    font-size: 14px;
  }

  @media screen and (max-width: 420px) {
    p.textbutton {
      padding-left: 25px;
      background-image: url("${group9Image.url}");
      background-repeat: no-repeat;
      background-position: center;
      background-size: 50%;
      font-size: 7px;
    }
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
            <p className="textbutton text-white pr-5 pt-3 pb-4">Mulai Test</p>
          </Link>
        </div>
      </div>
    </Number>
  );
}

export default NumberImage;
