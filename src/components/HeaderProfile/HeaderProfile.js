import React from "react";
import styled from "styled-components";
import ProfileResult from "../ProfileResult";

import { group9copypngImage, priestImage, loginWrapper } from "../images";

const BgWrapper = styled.section`
    position: relative;
    background-image: url("${group9copypngImage.url}");
    background-repeat: no-repeat;
    background-size: 99% 65%;
    .card img.char {
      margin: 240px 200px;
      background-color: white;
      padding : 0px 50px 20px 40px;
      height: 24rem;
      width: auto;
    }
    img.backgroundChar {
      margin-top: -80px; 
      float: right;
      width: 50%;
      height: auto;
      z-index: -1;
    }
  `;

function HeaderProfile() {
  return (
    <BgWrapper>
      <div className="row clearfix">
        <div className="col-lg-6">
          <div className="card">
            <h3>
              <strong>PRIEST (The Defender)</strong>
            </h3>
            <ProfileResult />
            <p>
              <strong>Kareakter Umum</strong>
            </p>
            <p>
              Penajaga yang baik, dapat diandalkan, sabar, berhati-hati, <br />
              berbasis fakta, safety-player, terstruktur, unggul <br />
              dengan analis informasi, cerdas dalam mengelola <br />
              reseko.
            </p>
            <p>
              Seseorang yang mampu menegakkan aturan secatra <br />
              tegas, disegani oleh orang-orang dibawahnya, dan <br />
              ditakuti oleh siapapun yang melakukan pelanggaran
              <br />
              aturan, dengan keteguhan tinggi sehingga mampu <br />
              dijdikan sebagai tauladan (Role-model)
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <img src={priestImage.url} alt={priestImage.alt} className="char" />
            <img
              src={loginWrapper.url}
              alt={loginWrapper.alt}
              className="backgroundChar"
            />
          </div>
        </div>
      </div>
    </BgWrapper>
  );
}

export default HeaderProfile;
