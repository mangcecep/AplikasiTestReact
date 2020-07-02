import React from "react";
import Chart from "../Chart";

function YourProfile() {
  return (
    <section className="container">
      <div className="content">
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3 className="text-center title">Profile anda</h3>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <Chart />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 my-auto">
            <h4 className="text-center">
              <strong>Priest</strong>
            </h4>
            <p className="ml-5">
              para pemilik shio ini adalah penjaga yang <br />
              baik dan sabar serta dapat diandalkan. <br />
              Mereka selalu berhati-hati dalam melakukan <br />
              hal apapun terstruktur dan cerdas dalam <br />
              mengelola resiko mereka juga sangat tegas <br />
              dalam menegakkan aturan sehingga ditakuti <br />
              oleh para pelanggar aturan para tim di <br />
              bawahnya. Namun di sisi lain mereka sangat <br />
              safety player sehingga seringkali kehilangan <br />
              peluang yang ada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YourProfile;
