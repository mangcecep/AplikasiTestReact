import React from "react";
import styled from "styled-components";
import ProfileResult from "../ProfileResult";

import { group9copypngImage, priestImage, loginWrapper } from "../images";

const BgWrapper = styled.section`
    position: relative;
    background-image: url("${group9copypngImage.url}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 120% 100%;
    margin-top: -108px;
    padding-top: 200px;
    img.char {
      margin-top: 30px;
      margin-left: 190px;
      background-color: white;
      padding : 100px 55px 80px 60px;
      height: 35rem;
      width: auto;
      box-shadow: 10px 10px 5px grey;
    }
    img.backgroundChar {
      margin-top: -55px;
      float: right;
      width: 50%;
      height: auto;
      z-index: -1;
    }

  @media screen and (max-width: 420px) {
    background-image: none;
    img.backgroundChar {
      display: none;
    }
    img.char {
      margin: auto;
      padding : 0px 0px 0px 0px;
      box-shadow: none;
      height: 20rem;
      width: auto;
      display: flex;
      align-content: center
    }
  }
  `;

function HeaderProfile() {
  return (
    <BgWrapper className="jumbotron bg-white text-dark">
      <div className="row clearfix">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h3>
            <strong>PRIEST (The Defender)</strong>
          </h3>
          <ProfileResult />
          <p className="mt-4">
            <strong>Kareakter Umum</strong>
          </p>
          <p>
            Penajaga yang baik, dapat diandalkan, sabar, berhati-hati, berbasis
            fakta, safety-player, terstruktur, unggul dengan analis informasi,
            cerdas dalam mengelola reseko.
          </p>
          <p>
            Seseorang yang mampu menegakkan aturan secatra tegas, disegani oleh
            orang-orang dibawahnya, dan ditakuti oleh siapapun yang melakukan
            pelanggaran aturan, dengan keteguhan tinggi sehingga mampu dijdikan
            sebagai tauladan (Role-model)
          </p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img src={priestImage.url} alt={priestImage.alt} className="char" />
          <img
            src={loginWrapper.url}
            alt={loginWrapper.alt}
            className="backgroundChar"
          />
        </div>
      </div>
    </BgWrapper>
  );
}

export default HeaderProfile;
