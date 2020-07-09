import React from "react";
import styled from "styled-components";
import ProfileResult from "../ProfileResult";

import { group9copypngImage, priestImage, loginWrapper } from "../images";

const BgWrapper = styled.section`
    position: relative;
    background-image: url("${group9copypngImage.url}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 120% 120%;
    margin-top: -108px;
    padding-top: 200px;
    .card img.char {
      margin-top: 125px;
      margin-left: 115px;
      background-color: white;
      padding : 50px 50px 50px 50px;
      height: 40rem;
      width: auto;
      box-shadow: 10px 10px 5px grey;
    }
    .card img.backgroundChar {
      margin-right: 30px;
      margin-top: -55px; 
      float: right;
      width: 50%;
      height: auto;
      z-index: -1;
    }

  @media screen and (max-width: 420px) {
    background-image: none;
  }
  `;

function HeaderProfile() {
  return (
    <BgWrapper className="jumbotron bg-white text-dark">
      <div className="row clearfix">
        <div className="authentication">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="card">
              <h3>
                <strong>PRIEST (The Defender)</strong>
              </h3>
              <ProfileResult />
              <p>
                <strong>Kareakter Umum</strong>
              </p>
              <p>
                Penajaga yang baik, dapat diandalkan, sabar, berhati-hati,{" "}
                <br />
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
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="card">
              <img
                src={priestImage.url}
                alt={priestImage.alt}
                className="char"
              />
              <img
                src={loginWrapper.url}
                alt={loginWrapper.alt}
                className="backgroundChar"
              />
            </div>
          </div>
        </div>
      </div>
    </BgWrapper>
  );
}

export default HeaderProfile;
