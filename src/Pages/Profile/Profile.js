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
import ProfileValues from "../../components/ProfileValues";
import ProfileInstinct from "../../components/ProfileInstinct";
import RoleModel from "../../components/RoleModel";
import IndustryRoleModel from "../../components/IndustryRoleModel";
import CardElement from "../../components/CardElement";

import {
  diagramImage,
  shio4Image,
  BackgroundLayerCopycopypngImage,
  shio2Image,
  sio3Image,
  sioImage,
  BackgroundLayerCopy1Image,
  BackgroundLayerCopydImage,
  BackgroundLayerCopycopy1pngImage,
} from "../../components/images";

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
              keterlakkasaannya sebuah hal atau aset, dimana hal ini berarti
              bahwa ia adalah seorang pemimpin yang mampu menghasilkan
              keberhasilan tanpa harus melepas aset yang saat ini dimilikinya,
              berupa sumber daya manusia (SDM, properti, kapital, dll)"
      />
      <PrimaryProfile />
      <ProfileSupport />
      <ConflictProfile />
      <ProfileValues />
      <ProfileInstinct />
      <RoleModel />
      <IndustryRoleModel />
      <section className="jumbotron">
        <div className="d-flex justify-content-center">
          <img
            src={diagramImage.url}
            alt={diagramImage.alt}
            className="bg-white mb-4 px-5 py-5"
            width="100%"
            height="auto"
          />
        </div>
        <CardElement
          src={shio4Image.url}
          alt={shio4Image.alt}
          text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
        />
        <CardElement
          src={BackgroundLayerCopycopypngImage.url}
          alt={BackgroundLayerCopycopypngImage.alt}
          text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
        />
        <CardElement
          src={shio2Image.url}
          alt={shio2Image.alt}
          text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
        />
        <CardElement
          src={sio3Image.url}
          alt={sio3Image.alt}
          text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
        />
        <CardElement
          src={sioImage.url}
          alt={sioImage.alt}
          text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
        />
        <CardElement
          src={BackgroundLayerCopy1Image.url}
          alt={BackgroundLayerCopy1Image.alt}
          text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
        />
        <CardElement
          src={BackgroundLayerCopydImage.url}
          alt={BackgroundLayerCopydImage.alt}
          text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
        />
        <CardElement
          src={BackgroundLayerCopycopy1pngImage.url}
          alt={BackgroundLayerCopycopy1pngImage.alt}
          text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
        />
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
