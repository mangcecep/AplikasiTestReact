import React from "react";
import Chart from "../Chart";
import styled from "styled-components";

const Title = styled.section`
h3, h4 {
  @font-face {
    font-family: "Poppins ExtraBold";
    src: local("Poppins ExtraBold"),
      url(../../assets/fonts/Poppins-ExtraBold.ttf) format("truetype");
  }
  font-family: "Poppins ExtraBold";
}
p {
  font-size: 17px;
  display: inline;
  @font-face {
    font-family: "Poppins SemiBold";
    src: local("Poppins SemiBold"),
      url(../../assets/fonts/Poppins-SemiBold.ttf) format("truetype");
  }
  font-family: "Poppins SemiBold";
}
.jumbotron {
  background-color: #F8F8F5;
}
`;

function YourProfile() {
  return (
    <Title className="container">
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
              <h4 className="text-center">
                Priest
              </h4>
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
    </Title>
  );
}

export default YourProfile;
