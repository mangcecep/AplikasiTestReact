import React from "react";
import Navbar from "../../components/Navbar";
import { backgroundLogin, backgroundLoginBase } from "../../components/images";
import styled from "styled-components";

const BgWrapper = styled.div`
  background-image: url("${backgroundLoginBase.url}");
`;

const Login = () => {
  return (
    <BgWrapper>
      <div className="row">
        <Navbar />

        <div className="col-lg-6 col-sm-12 bg-white">
          <div className="authentication ml-4 mr-2">
            <div className="card">
              <form>
                <div className="body">
                  <div className="header">
                    <h5>
                      <strong>Selamat Datang di Shiokaya!</strong>
                    </h5>
                    <h5>
                      Silahkan masukkan email dan token <br />
                      yang anda dapatkan dari pendaftaran <br />
                      Shiokaya.
                    </h5>
                  </div>
                  <div className="input-group">
                    <label>Email</label>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Anda@contoh.com"
                    />
                  </div>
                  <div className="input-group">
                    <label>Email</label>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Masukan password Anda"
                    />
                  </div>

                  <a
                    href="index.html"
                    className="btn bg-purple btn-primary btn-block btn-lg btn-round waves-effect waves-light"
                  >
                    <strong>Masuk</strong>
                  </a>
                  <div className="signin_with mt-3">
                    <p className="mb-0">Belum punya akun? Daftar</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-sm-12">
          <div className="authentication">
            <div className="card">
              <img src={backgroundLogin.url} alt={backgroundLogin.alt} />
            </div>
          </div>
        </div>
      </div>
    </BgWrapper>
  );
};

export default Login;
