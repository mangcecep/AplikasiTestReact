import React from "react";
import { Link } from "react-router-dom";
import {
  backgroundLogin,
  backgroundLoginBase,
  loginWrapper,
} from "../../components/images";

import PoppinsThin from "../../assets/fonts/Poppins-Thin.ttf";
import PoppinsMediumItalic from "../../assets/fonts/Poppins-MediumItalic.ttf";
import PoppinsMedium from "../../assets/fonts/Poppins-Medium.ttf";

import styled from "styled-components";

const BgWrapper = styled.section`
  background-image: url("${backgroundLoginBase.url}");
  position: relative;

  @media screen and (max-width: 768px) {
      display: none;
  }
`;

const FooterImage = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Input = styled.input`
  padding: 20px;
  border: none;
  border-bottom: 1px solid #ccc;
  width: 100%;
`;

const RowClearfix = styled.div`
  @media screen and (max-width: 1400px) {
    margin-top: 150px;
  }
`;

const FormWrapper = styled.div`
@font-face {
  font-family: "Poppins Thin";
  src: local("${PoppinsThin}"),
    url("${PoppinsThin}") format("truetype");
}

@font-face {
  font-family: "Poppins MediumItalic";
  src: local("${PoppinsMediumItalic}"),
    url("${PoppinsMediumItalic}") format("truetype");
}

@font-face {
  font-family: "Poppins MediumItalic";
  src: local("${PoppinsMedium}"),
    url("${PoppinsMedium}") format("truetype");
}

font-family: 'Poppins MediumItalic';
font-size: 12px;
`;
function FormLogin() {
  return (
    <div className="row clearfix" style={{ marginTop: "-108px" }}>
      <FormWrapper className="col-lg-6 col-sm-12">
        <div className="authentication pl-4 pr-4 mr-4 ml-4">
          <RowClearfix className="card">
            <form>
              <div className="header">
                <h5>
                  <strong>Selamat datang di Shiokaya!</strong>
                </h5>
                <br />
                <h5>
                  Silahkan masukkan email dan token <br />
                  yang anda dapatkan dari pendaftaran <br />
                  Shiokaya.
                </h5>
              </div>
              <div className="input-group">
                <label>
                  <strong>Email</strong>
                </label>
              </div>
              <div className="input-group mb-3">
                <Input
                  type="email"
                  placeholder="Anda@contoh.com"
                  className="form-control"
                />
              </div>
              <Link to="/forgotPassword">
                <p className="text-right">Lupa Password?</p>
              </Link>
              <div className="input-group">
                <label>
                  <strong>Password</strong>
                </label>
              </div>
              <div className="input-group mb-3">
                <Input
                  type="password"
                  placeholder="Masukan password Anda"
                  className="form-control"
                />
              </div>

              <button
                type="submit"
                className="buttonLogin btn bg-purple btn-primary btn-block btn-lg btn-round waves-effect waves-light"
              >
                <label>
                  <strong>Masuk</strong>
                </label>
              </button>
              <div className="mt-5">
                <p className="mb-0">
                  Belum punya akun? <Link to="register">Daftar</Link>
                </p>
              </div>
            </form>
          </RowClearfix>
        </div>
      </FormWrapper>

      <BgWrapper className="col-lg-6 col-sm-12">
        <RowClearfix>
          <div className="authentication">
            <div className="card">
              <img src={backgroundLogin.url} alt={backgroundLogin.alt} />
            </div>
          </div>
        </RowClearfix>
      </BgWrapper>
      <FooterImage
        className="col-lg-12 col-sm-12"
        style={{ marginTop: "-74px", marginLeft: "74px" }}
      >
        <div className="text-center">
          <div className="card">
            <img
              src={loginWrapper.url}
              alt={loginWrapper.url}
              width="200px"
              height="auto"
            />
          </div>
        </div>
      </FooterImage>
    </div>
  );
}

export default FormLogin;
