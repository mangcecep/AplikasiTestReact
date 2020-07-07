import React from "react";
import styled from "styled-components";

import { RectanglejpgImage } from "../images";

const FormRegister = styled.section`
  background-image: url("${RectanglejpgImage.url}");
  margin-top: 30px;
  padding: 60px;
  @font-face {
    font-family: "Poppins Medium";
    src: local("Poppins Medium"),
      url(../../assets/fonts/Poppins-Medium.ttf) format("truetype");
  }
  font-family: "Poppins Medium";
  p, label {
    font-size : 20px;
    padding: auto;
  }

  @media screen and (max-width: 420px) {
    p, label {
      font-size : 15px;
      padding: auto;
    }
  }
`;

function FormRegisterComp() {
  return (
    <FormRegister className="container">
      <div className="row clearfix">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="content">
            <p className="title">
              <strong>
                Anda membutuhkan profil yang lebih sepesifik? <br />
                Hanya 1 profil yang benar-benar detail dan akurat?{" "}
              </strong>
            </p>
            <p>
              Kami bisa menyediakan untuk Anda. secara GRATIS. <br />
              Anda cukup terlebih dahulu melengkapi beberapa <br />
              infomasi disamping.
            </p>
            <p>
              Anda juga cukup memberikan 10 menit tambahan <br />
              dari waktu Anda, untuk mengisi tambahan <br />
              pertanyaan, dan memperoleh hasil yang lebih <br />
              detail dan akurat
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <form>
            <div className="body">
              <div className="form-group">
                <label className="card-inside-title">Nama</label>
                <input type="text" className="form-control bg-white" />
              </div>
              <div className="form-group">
                <label className="card-inside-title">Email</label>
                <input type="text" className="form-control bg-white" />
              </div>
              <div className="form-group">
                <label className="card-inside-title">Nomor Hp</label>
                <input type="text" className="form-control bg-white" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </FormRegister>
  );
}

export default FormRegisterComp;
