import React from "react";

import Characteristic from "../Characteristic";
import CardElement from "../CardElement";

import { BackgroundLayerCopydImage, OvalCopypngImage } from "../images";

function CharProfile() {
  return (
    <section className="jumbotron">
      <div className="content">
        <Characteristic />
        <CardElement
          src={BackgroundLayerCopydImage.url}
          alt={BackgroundLayerCopydImage.url}
          title="Element : Samudera"
          text="Melambungkan keluasan dan kelapangan, sebaai muara yang menerima
              berbagai aliran air. Seorang yang berpikiran terbuka, bersedia
              menyerap bebrbagai hal baru, mau menerima masukan dengan lapang
              dada."
        />
        <CardElement
          src={OvalCopypngImage.url}
          alt={OvalCopypngImage.alt}
          title="Warna : Tosca"
          text="Warna yang melambangkan konsentrasi, keseimbangan emosional, stabilitas diri, dan juga kesabaran, yang menghadirkan kejernihan pikiran dan kepercayaan diri, mengendalikan dan menyembuhkan untuk."
        />
      </div>
    </section>
  );
}

export default CharProfile;
