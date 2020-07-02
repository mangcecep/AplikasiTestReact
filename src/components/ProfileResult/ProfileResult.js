import React from "react";
import { BackgroundLayerCopy1Image } from "../images";
function ProfileResult() {
  return (
    <div className="row clearfix">
      <div className="col-md-12 col-sm-12">
        <strong>Elemen Kisama(Tanah)</strong>
      </div>
      <div className="col-md-6 col-sm-6 mt-4">
        <img
          src={BackgroundLayerCopy1Image.url}
          alt={BackgroundLayerCopy1Image.alt}
          width="70%"
          height="auto"
        />
      </div>
      <div className="col-md-6 col-sm-6">
        <h5>Warna Green</h5>
        <br />
        <h5>PENCARI PELUANG</h5>
        <h5>PEDAGANG ALAMI</h5>
        <h5>PENGGUNA WAKTU EFISIEN</h5>
      </div>
    </div>
  );
}

export default ProfileResult;
