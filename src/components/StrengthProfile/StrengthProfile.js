import React from "react";
import styled from "styled-components";

const Strength = styled.section`
p {
  font-family: "Poppins SemiBold";
}
.tab {
  float: right;
}
.text {
  @font-face {
    font-family: "Poppins SemiBold";
    src: local("Poppins SemiBold"),
      url(../../assets/fonts/Poppins-SemiBold.ttf) format("truetype");
  }
  font-family: "Poppins SemiBold";
  margin-left: -25px;
}
h4 {
  margin-top:-40px;
  @font-face {
    font-family: "Poppins ExtraBold";
    src: local("Poppins ExtraBold"),
      url(../../assets/fonts/Poppins-ExtraBold.ttf) format("truetype");
  }
  font-family: "Poppins ExtraBold";
}
  .jumbotron {
    background-color: #F8F8F5;
    padding: -10px;
  }
  font-size: 14px;

  @media screen and (max-width: 420px) {
      font-size: 10px;
      h4 {
        margin-top:-15px;
      }
      .mobile {
        display: flex;
        .text {
          margin-top: -32px;
          margin-left:90px;
        }
      }
      .tab {
        float: none;
        margin-left: 10px;
      }
    }
  }
`;

function StrengthProfile() {
  return (
    <Strength className="container">
      <div className="jumbotron">
        <h4 className="text-center">
          <strong>Kekuatan : Keamanan</strong>
        </h4>
        <div className="row clearfix mobile">
            <div className="col-lg-3 col-md-3 col-sm-3">
              <p>Sisi produktif<span className="tab">:</span></p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9">
              <p className="text">Keseimbangan, stabilitas, ketenangan, kesabaran, harmoni,
              menghadirkan, keteraturan, mempengaruhi, terorganisir, kelembutan,
              kehalusan, ketepatan</p>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-2">
              <p>Sisi tantangan<span className="tab">:</span></p>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9">
            <p className="text">Egois (Self-centered), naristik, mengabaikan, overaktif,
            ketidakseimbangan emosi, menyembungikan, menahan, misterius
            kebingungan</p>
            </div>
        </div>
      </div>
    </Strength>
  );
}

export default StrengthProfile;
