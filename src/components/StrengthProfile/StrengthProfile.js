import React from "react";
import styled from "styled-components";

const Strength = styled.div`
    font-size: 14px;

  @media screen and (max-width: 420px) {
      font-size: 8px;
    }
  }
`;

function StrengthProfile() {
  return (
    <section className="container">
      <div className="jumbotron">
        <p className="text-center">
          <strong>Kekuatan : Keamanan</strong>
        </p>
        <Strength>
          <div className="row clearfix">
            <div className="col-lg-2 col-md-2 col-sm-2">Sisi produktif</div>
            <div className="col-lg-1 col-md-1 col-sm-1">:</div>
            <div className="col-lg-9 col-md-9 col-sm-9">
              Keseimbangan, stabilitas, ketenangan, kesabaran, harmoni,
              menghadirkan, keteraturan, mempengaruhi, terorganisir, kelembutan,
              kehalusan, ketepatan
            </div>
          </div>
        </Strength>

        <Strength className="row clearfix">
          <div className="col-lg-2 col-md-2 col-sm-2">Sisi tantangan</div>
          <div className="col-lg-1 col-md-1 col-sm-1">:</div>
          <div className="col-lg-9 col-md-9 col-sm-9">
            Egois (Self-centered), naristik, mengabaikan, overaktif,
            ketidakseimbangan emosi, menyembungikan, menahan, misterius
            kebingungan
          </div>
        </Strength>
      </div>
    </section>
  );
}

export default StrengthProfile;
