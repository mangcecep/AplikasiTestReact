import React from "react";
import { BackgroundLayerCopydImage } from "../images";
import CardElement from "../CardElement";

import styled from "styled-components";

const Char = styled.section`
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
function Characteristic() {
  return (
    <Char className="container">
      <div className="jumbotron">
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h4 className="text-center">
              <strong>Karakteristik</strong>
            </h4>
            <p>
              Memajukan bisnis dengan cara memperbanyakan peluang atau sumber
              penghasilan, tidak masalah kecil, tapi dengan volume yang
              besar(Multiple source of income). mengembalikan energi ketika
              lelah, dengan melakukan hal-hal yang bersifat pribadi, hanya
              dengan sendiri atau dengan orang yang benar-benar dianggap dekat
              (Self-recharging). Mencari detail dalam berbagai hal terlebih
              dahulu, tertrik pada penjelasan yang sifatnya spesifik, bermasalah
              utuk mau menerima gambaran umum terlebih dahulu. 
            </p><br /><br />
            <p>
              Memahami segala yang terjadi dengan merasakan ke dalam diri,
              dengan mempertimbangkan suara dan logika yang muncul dalam
              pikiran, dan seringkali membutuhkan untuk mengalami langsung untuk
              percaya. Mengutamakan keuetan untuk mencapai sebuah target,
              fleksibel namun tetap mengikat sebuah struktur yang ada, supportif
              dan menjadi pendorong utama dalam menghasilkan/ mencapai suatu
              hal.
            </p><br /><br />
            <p>
              Fokus pada komitmen yang sudah ada, dengan fleksibilitas yang akan
              disesuaikan terhadap kemungkinan terjadi perubahan pada metode
              atau proses yang juga sudah ditentukan. Berpikir secara logis,
              sekaligus mempertimbangkan berbagai aspek terkait dengan emosi dan
              perasaan, untuk bisa mencapai keputusan yang adil namun humanis.
            </p>
          </div>
          <CardElement
            src={BackgroundLayerCopydImage.url}
            alt={BackgroundLayerCopydImage.url}
            displayCircle="none"
            title="Element : Samudera"
            text="Melambungkan keluasan dan kelapangan, sebagai muara yang menerima berbagai aliran air. Seorang yang berpikiran terbuka, bersedia menyerap bebrbagai hal baru, mau menerima masukan dengan lapang dada."
          />
          <CardElement
            title="Warna : Tosca"
            text="Warna yang melambangkan konsentrasi, keseimbangan emosional, stabilitas diri, dan juga kesabaran, yang menghadirkan kejernihan pikiran dan kepercayaan diri, mengendalikan dan menyembuhkan."
          />
        </div>
      </div>
    </Char>
  );
}

export default Characteristic;
