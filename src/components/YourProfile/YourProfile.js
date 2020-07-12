import React from "react";
import Chart from "../Chart";

function YourProfile() {
  return (
    <section className="container">
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h3 className="text-center title">Profile Anda</h3>
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-6 col-md-6 col-sm-6 my-auto mx-auto">
          <div className="jumbotron">
            <Chart />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 my-auto">
          <div className="jumbotron">
            <div className="card">
              <p className="text-center">
                <strong>Priest</strong>
              </p>
              <p>
                para pemilik shio ini adalah penjaga yang baik dan sabar serta
                dapat diandalkan. Mereka selalu berhati-hati dalam melakukan hal
                apapun terstruktur dan cerdas dalam mengelola resiko mereka juga
                sangat tegas dalam menegakkan aturan sehingga ditakuti oleh para
                pelanggar aturan para tim di bawahnya. Namun di sisi lain mereka
                sangat safety player sehingga seringkali kehilangan peluang yang
                ada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YourProfile;
