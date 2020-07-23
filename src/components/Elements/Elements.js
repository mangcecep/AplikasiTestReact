import React from "react";
import CardElement from "../CardElement";
import styled from "styled-components";
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
} from "../images";

const Elm = styled.section`
h4 {
  margin-top:-40px;
  @font-face {
    font-family: "Poppins ExtraBold";
    src: local("Poppins ExtraBold"),
      url(../../assets/fonts/Poppins-ExtraBold.ttf) format("truetype");
  }
  font-family: "Poppins ExtraBold";
}

.jumbotron {
  background-color: #F8F8F5;
}
`;

function Elements() {
  return (
    <Elm className="container">
      <div className="jumbotron">
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
        displayCircle="none"
        src={shio4Image.url}
        alt={shio4Image.alt}
        text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
      />
      <CardElement
        displayCircle="none"
        src={BackgroundLayerCopycopypngImage.url}
        alt={BackgroundLayerCopycopypngImage.alt}
        text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
      />
      <CardElement
        displayCircle="none"
        src={shio2Image.url}
        alt={shio2Image.alt}
        text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
      />
      <CardElement
        displayCircle="none"
        src={sio3Image.url}
        alt={sio3Image.alt}
        text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
      />
      <CardElement
        displayCircle="none"
        src={sioImage.url}
        alt={sioImage.alt}
        text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
      />
      <CardElement
        displayCircle="none"
        src={BackgroundLayerCopy1Image.url}
        alt={BackgroundLayerCopy1Image.alt}
        text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
      />
      <CardElement
        displayCircle="none"
        src={BackgroundLayerCopydImage.url}
        alt={BackgroundLayerCopydImage.alt}
        text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
      />
      <CardElement
        displayCircle="none"
        src={BackgroundLayerCopycopy1pngImage.url}
        alt={BackgroundLayerCopycopy1pngImage.alt}
        text="Penyempurnaan yang baik, penyelesaian proses, menemukan cara yang lebih baik dan cerdas, meningkatkan efesiensi dan efektifitas produk/ sistem yang ada. Seseorang yang memiliki kemampuan beradaptasi dengan mendapatkan diri sesuai dengan dimana ia berada. Mampu untuk tetap merendah dan secara frontal berusaha untuk mengejar setiap peluang yang ada."
      />
      </div>
    </Elm>
  );
}

export default Elements;
