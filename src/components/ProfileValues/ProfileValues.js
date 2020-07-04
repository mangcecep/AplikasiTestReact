import React from "react";
import CardStarValue from "../CardStarValue";

function ProfileValues() {
  return (
    <section className="jumbotron">
      <h4 className="title text-center">
        Nilai (value) untuk menggunakan kekuatan diri Anda
      </h4>
      <p>
        Apakah hal-hal yanag bernilai penting bagi anda? bagaimana hal-hal yang
        dianggap penting itu mempengaruhi Anda dalam menciptakan kekayaan dan
        kesuksesan Anda? Dua pertanyaan tersebut merupakan pertanyaan penting,
        yang tidak perlu untuk diketahui dan dipahami oleh masing-masing dari
        diri kita.
      </p>
      <p>
        Perbedaan tersebut bisa menjadi sumber konflik maupun penghambat ketika
        kita berinteraksi dengan orang lain yang berbeda profil Shio Kaya-nya,
        namun juga bisa justru menjadi nilai kekuatan yang saling melengkapi dan
        menjadi pendorong (booster) untuk berkolaborasi mencapai tujuan bersama.
      </p>
      <CardStarValue
        starValue={2}
        title="Inovasi"
        subtitle="Kreativitas ide merupakan hal yang kurang diperhatikan dan kadang
        berpengaruh dalam pengambilan keputusan, inovasi baru."
      />
      <CardStarValue
        starValue={2}
        title="Komunikasi"
        subtitle="Kreativitas ide merupakan hal yang kurang diperhatikan da kadang berpengaruh dalam pengambilan keputusan, inovasi baru."
      />
      <CardStarValue
        starValue={5}
        title="Waktu"
        subtitle="Kreativitas ide merupakan hal yang kurang diperhatikan dan kadang berpengaruh dalam pengambilan keputusan, inovasi baru."
      />
    </section>
  );
}

export default ProfileValues;
