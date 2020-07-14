import React from "react";
import styled from "styled-components";
import { Look211pngImage } from "../../components/images";

const Premium = styled.div`
  @font-face {
    font-family: "Poppins Regular";
    src: local("Poppins Regular"),
      url(../../assets/fonts/Poppins-Regular.ttf) format("truetype");
  }
  font-family: "Poppins Regular";
  .point {
    margin-top: 140px;
  }
  @media screen and (max-width: 420px) {
    .point {
      margin-top: -30px;
    }
    .pict {
      display: none;
    }
    .text-dark {
      margin-top: 10px;
      text-align: center;
    }
    h5,
    h2 {
      font-size: 15px;
    }
  }
`;

const PremiumPage = () => {
  return (
    <Premium>
      <section className="container bg-white text-dark">
        <div className="header text-center">
          <h2>Halaman detail PREMIUM Anda</h2>
          <p>
            untuk 10 lembar detail informasi profil Anda, yang Anda bisa
            manfaatkan untuk kemajuan diri, pekerjaan, dan bisnis Anda
          </p>
        </div>
      </section>
      <section className="container bg-white">
        <div className="row clearfix">
          <div className="col-lg-9 col-md-9 col-sm-9 my-auto">
            <h2 className="text-dark">Apa saja yang akan Saya Peroleh?</h2>
            <br />
            <h5 className="point alert alert-danger">
              Anda akan memperoleh hasil laporan detail tentang diri Anda
            </h5>
          </div>
          <br />
          <div className="col-lg-3 col-md-3 col-sm-3 mb-2">
            <img
              src={Look211pngImage.url}
              alt={Look211pngImage.alt}
              className="pict"
            />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h5 className="alert alert-danger">
              Anda akan memperoleh laporan lengkap dalam bentuk infografis yang
              mudah dimengerti
            </h5>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h5 className="alert alert-danger">
              Anda akan memperoleh akun khusus untuk Anda memperoleh informasi
              tambahan spesifik profil Anda (Berdasarkan kondisi dunia bisnis
              terkini)
            </h5>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="align-center mt-5">
              <button className="btn btn-round btn-lg bg-purple">
                ya, saya mau
              </button>
            </div>
          </div>
        </div>
      </section>
    </Premium>
  );
};

export default PremiumPage;
