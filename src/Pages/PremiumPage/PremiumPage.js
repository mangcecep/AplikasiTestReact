import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Look211pngImage } from "../../components/images";

function PremiumPage() {
  return (
    <div className="container">
      <Navbar loginProp={{ isLogin: true }} />
      <section className="jumbotron">
        <div className="header text-center">
          <h2>Halaman detail PREMIUM Anda</h2>
          <p>
            untuk 10 lembar detail informasi profil Anda, yang Anda bisa
            manfaatkan <br />
            untuk kemajuan diri, pekerjaan, dan bisnis Anda
          </p>
        </div>
      </section>
      <section className="jumbotron">
        <div className="row clearfix">
          <div className="col-lg-9 col-md-9 col-sm-9 my-auto">
            <h2>Apa saja yang akan Saya Peroleh?</h2>
            <br />
            <h5 className="alert alert-danger">
              Anda akan memperoleh hasil laporan detail tentang diri Anda
            </h5>
          </div>
          <br />
          <div className="col-lg-3 col-md-3 col-sm-3 mb-2">
            <img src={Look211pngImage.url} alt={Look211pngImage.alt} />
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
      <Footer />
    </div>
  );
}

export default PremiumPage;
