import React from "react";

function StrengthProfile() {
  return (
    <section className="jumbotron">
      <div className="content">
        <h3 className="text-center">Kekuatan : Keamanan</h3>
        <div className="row clearfix">
          <div className="col-lg-2 col-md-2 col-sm-2">Sisi produktif</div>
          <div className="col-lg-1 col-md-1 col-sm-1">:</div>
          <div className="col-lg-9 col-md-9 col-sm-9">
            Keseimbangan, stabilitas, ketenangan, kesabaran, harmoni,
            menghadirkan, keteraturan, mempengaruhi, terorganisir, kelembutan,
            kehalusan, ketepatan
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2">Sisi tantangan</div>
          <div className="col-lg-1 col-md-1 col-sm-1">:</div>
          <div className="col-lg-9 col-md-9 col-sm-9">
            Egois (Self-centered), naristik, mengabaikan, overaktif,
            ketidakseimbangan emosi, menyembungikan, menahan, misterius
            kebingungan
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrengthProfile;
