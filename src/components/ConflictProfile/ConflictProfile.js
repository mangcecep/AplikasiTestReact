import React from "react";
import CardConflict from "../CardConflict";
import styled from "styled-components";

const Conflict = styled.section`
  .jumbotron {
    background-color: #F8F8F5;
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
  p {
    @font-face {
      font-family: "Poppins SemiBold";
      src: local("Poppins SemiBold"),
        url(../../assets/fonts/Poppins-SemiBold.ttf) format("truetype");
    }
    font-family: "Poppins SemiBold";
  }

  span {
    @font-face {
      font-family: "Poppins ExtraBold";
      src: local("Poppins ExtraBold"),
        url(../../assets/fonts/Poppins-ExtraBold.ttf) format("truetype");
    }
    font-family: "Poppins ExtraBold";
  }

  @media screen and (max-width: 420px) {
    h4 {
      margin-top:-20px;
    }
  }
`;

function ConflictProfile() {
  return (
    <Conflict className="container">
      <div className="jumbotron">
      <h4 className="text-center">
        Konflik antara orang-orang yang berbeda profil
      </h4>
      <p>
        Keberadaan konflik di suatu kolaborasi dalam organisasi atau tim
        merupakan hal yang tidak dapat dihindari. Konflik sering muncul dan
        terjadi pada setip hubungan antar manusia. Konflik atau pertentangan
        pada kondisi tertentu merupakan tanda adanya ketidaksesuaian. Proses
        mempertajam gagasan/ ide, atau menunjukan adanya kesalahpahaman.
      </p>
      <p>
        <span>Primer</span>{" "}
      </p>
      <div className="row clearfix">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content">
            <CardConflict
              title="Bard"
              subtitle="Kekuatan : Pengaruh"
              text="Bertolak belakang penuh, perdebatan total dalam kekuatan, model
        komunikasi, nilai (value) yang dianggap penting, dan cara alami untuk
        memperoleh keberhasilan."
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content"></div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content">
            <CardConflict
              title="Wizard"
              subtitle="Kekuatan : Kreativitas"
              text="Bertolak belakang penuh, perdebatan total dalam kekuatan, model
        komunikasi, nilai (value) yang dianggap penting, dan cara alami untuk
        memperoleh keberhasilan."
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content">
            <CardConflict
              title="Knight"
              subtitle="Kekuatan : Hubungan"
              text="Bertolak belakang penuh, perdebatan total dalam kekuatan, model
        komunikasi, nilai (value) yang dianggap penting, dan cara alami untuk
        memperoleh keberhasilan."
            />
          </div>
        </div>
      </div>
      <p>
        <span>Sekunder</span>{" "}
      </p>
      <div className="row clearfix">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content">
            <CardConflict
              title="Wizard"
              subtitle="Kekuatan : Kreativitas"
              text="Bertolak belakang penuh, perdebatan total dalam kekuatan, model
        komunikasi, nilai (value) yang dianggap penting, dan cara alami untuk
        memperoleh keberhasilan."
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content">
            <CardConflict
              title="Knight"
              subtitle="Kekuatan : Hubungan"
              text="Bertolak belakang penuh, perdebatan total dalam kekuatan, model
        komunikasi, nilai (value) yang dianggap penting, dan cara alami untuk
        memperoleh keberhasilan."
            />
          </div>
        </div>
      </div>
      <p>
        <span>Tersier</span>{" "}
      </p>
      <div className="row clearfix">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content">
            <CardConflict
              title="Arbiter"
              subtitle="Kekuatan : Kreativitas"
              text="Bertolak belakang penuh, perdebatan total dalam kekuatan, model
        komunikasi, nilai (value) yang dianggap penting, dan cara alami untuk
        memperoleh keberhasilan."
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content">
            <CardConflict
              title="Knight"
              subtitle="Kekuatan : Keteraturan"
              text="Bertolak belakang penuh, perdebatan total dalam kekuatan, model
        komunikasi, nilai (value) yang dianggap penting, dan cara alami untuk
        memperoleh keberhasilan."
            />
          </div>
        </div>
      </div>
      </div>
    </Conflict>
  );
}

export default ConflictProfile;
