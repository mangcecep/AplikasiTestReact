import React from "react";

import Navbar from "../../components/Navbar";
import HeaderProfile from "../../components/HeaderProfile";
import YourProfile from "../../components/YourProfile";
import Footer from "../../components/Footer";
import CharProfile from "../../components/CharProfile";
import StrengthProfile from "../../components/StrengthProfile";
import SelfLeadership from "../../components/SelfLeadership";
import PrimaryProfile from "../../components/PrimaryProfile";
import ProfileSupport from "../../components/ProfileSupport";
import ConflictProfile from "../../components/ConflictProfile";

import { starImage } from "../../components/images";

function Profile() {
  return (
    <div className="container">
      <Navbar loginProp={{ isLogin: true }} />
      <HeaderProfile />
      <YourProfile />
      <CharProfile />
      <StrengthProfile />
      <SelfLeadership
        title="Self-leadership"
        text="Pemimpin dengan keingintahuan dan wawasan yang luas. yang mampu
              mengatasi berbagai hal macam gejolak di dalam dirinya dengan baik.
              Tipe pemimpin yang mampu untuk mnjadi penjaga atas
              keterlakkasaannya sebua hal atau aset, dimana hal ini berarti
              bahwa ia adalah seorang pemimpin yang mampu menghasilkan
              keberhasilan tanpa harus melepas aset yang saat ini dimilikinya,
              berupa sumber daya manusia (SDM, properti, kapital, dll)"
      />
      <PrimaryProfile />
      <ProfileSupport />
      <ConflictProfile />
      <section className="jumbotron">
        <h4 className="title text-center">
          Nilai (value) untuk menggunakan kekuaran diri Anda
        </h4>
        <p>
          Apakah hal-hal yanag bernilai penting bagi anda? bagaimana hal-hal
          yang dianggap penting itu mempengaruhi Anda dalam menciptakan kekayaan
          dan kesuksesan Anda? Dua pertanyaan tersebut merupakan pertanyaan
          penting, yang tidak perlu untuk diketahui dan dipahami oleh
          masing-masing dari diri kita.
        </p>
        <p>
          Perbedaan tersebut bisa menjadi sumber konflik maupun penghambat
          ketika kita berinteraksi dengan orang lain yang berbeda profil Shio
          Kaya-nya, namun juga bisa justru menjadi nilai kekuatan yang saling
          melengkapi dan menjadi pendorong (booster) untuk berkolaborasi
          mencapai tujuan bersama.
        </p>
        <div className="card bg-light">
          <div className="row clearfix">
            <div className="col-lg-2 col-md-2 col-sm-2">
              <p className="text-center my-auto py-4">
                <stong>Inovasi</stong>
              </p>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8">
              <p className="my-auto py-4">
                <stong>
                  Kreativitas ide merupakan hal yang kurang diperhatikan dan
                  kadang berpengaruh dalam pengambilan keputusan, inovasi baru.
                </stong>
              </p>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2">
              <img
                src={starImage.url}
                alt={starImage.alt}
                width="20%"
                height="auto"
                className="my-auto py-4"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
