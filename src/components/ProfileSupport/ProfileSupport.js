import React from "react";
import CardProfileSupport from "../CardProfileSupport";

function ProfileSupport() {
  return (
    <section className="jumbotron">
      <p className="title text-center">
        <strong>Profil yang bisa memberikan dukungan paling besar</strong>
      </p>
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
    </section>
  );
}

export default ProfileSupport;
