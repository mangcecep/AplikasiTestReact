import React from "react";
import CardProfileSupport from "../CardProfileSupport";
import styled from "styled-components";

const ProfSupp = styled.section`
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

span {
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
  font-size: 14px;
}

@media screen and (max-width: 420px) {
  h4 {
    margin-top:-20px;
  }
}
`;

function ProfileSupport() {
  return (
    <ProfSupp className="container">
      <div className="jumbotron">
      <h4 className="title text-center">
        <strong>Profil yang bisa memberikan dukungan paling besar</strong>
      </h4>
      <p>
        Kekayaan dan kesuksesan sejati Anda tidak datang dari uang. Uang adalah
        pelumas untuk transaksi, energi yang menggerakan ekonomi. Kekayaan dan
        kesuksesan sejati berasal dari manusia, individu yang menggerakan
        kehidupan. Penciptaan kekayaan dan kesuksesan tidak bisa datang dengan
        berjalan sendirian. Terlalu banyak dari orang-orang di luar sana yang
        berusaha menciptakan kekayaan dan kesuksesan tanpa dukungan yang tepat
        di sekiarnya.
      </p>
      <p>
        <strong>Primer</strong>
      </p>
      <CardProfileSupport
        colSatu="Mitra"
        colDua="Kekuatan"
        colTiga="Dukugan yang diperoleh"
      />
      <CardProfileSupport
        colSatu="Wizard"
        colDua="Kreativitas"
        colTiga="Menciptakan ide, membuat konsep, membuat terobosan cepat, menggagas inovasi, menampilkan kreativitas, berpikir out-of-the-box"
      />
      <CardProfileSupport
        colSatu="Arbitter"
        colDua="Kesepakatan"
        colTiga="Menciptakan ide, membuat konsep, membuat terobosan cepat, menggagas inovasi, menampilkan kreativitas, berpikir out-of-the-box"
      />
      <CardProfileSupport
        colSatu="Marshal"
        colDua="Ketepatan"
        colTiga="Menciptakan ide, membuat konsep, membuat terobosan cepat, menggagas inovasi, menampilkan kreativitas, berpikir out-of-the-box"
      />
      <p>
        <strong>Sekunder</strong>
      </p>
      <CardProfileSupport
        colSatu="Mitra"
        colDua="Kekuatan"
        colTiga="Dukugan yang diperoleh"
      />
      <CardProfileSupport
        colSatu="Wizard"
        colDua="Kreativitas"
        colTiga="Menciptakan ide, membuat konsep, membuat terobosan cepat, menggagas inovasi, menampilkan kreativitas, berpikir out-of-the-box"
      />
      <CardProfileSupport
        colSatu="Arbitter"
        colDua="Kesepakatan"
        colTiga="Menciptakan ide, membuat konsep, membuat terobosan cepat, menggagas inovasi, menampilkan kreativitas, berpikir out-of-the-box"
      />
      <CardProfileSupport
        colSatu="Marshal"
        colDua="Ketepatan"
        colTiga="Menciptakan ide, membuat konsep, membuat terobosan cepat, menggagas inovasi, menampilkan kreativitas, berpikir out-of-the-box"
      />
      </div>
    </ProfSupp>
  );
}

export default ProfileSupport;