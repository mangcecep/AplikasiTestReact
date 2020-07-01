import React from "react";
import styled from "styled-components";
import { RectanglejpgImage } from "../../components/images";

const FormRegister = styled.section`
  background-image: url("${RectanglejpgImage.url}");
  margin-top: 30px;
  padding: 60px;
  p, label {
    font-size : 20px;
    padding: auto;
  }
`;

function FormPremiumAccount() {
  return (
    <FormRegister className="container">
      <div className="row clearfix">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <div className="content">
            <p className="title">
              <strong>
                Dapatkan detail informasi seputar cara Anda <br />
                untuk bisa mencapai keberhasilan dan kekayaan
              </strong>
            </p>
            <p>
              6 hal apa yang bisa Anda dapatkan melalui report
              <br />
              Shiokaya Premium:
            </p>
            <ol>
              <li>Detail tentang keukatan Anda yang bisa dimanfaatkan</li>
              <li>
                Detail tentang tantangan yang akan Anda hadapai terkait diri
                Anda
              </li>
              <li>
                Detail hal-hal yang perlu Anda perhatikan atau perbaiki dalam
                keseharian Anda
              </li>
              <li>
                Detail tentang profil rekan atau karyawan yang anda buthkan
                untuk berhasil lebih cepat
              </li>
              <li>
                Cara detail Anda bisa mencapai efektifitas dan efisiensi dalam
                pekerjaan/bisnis Anda selama ini
              </li>
              <li>
                Detail tentang pola pikir yang tepat dalam menjalanjan
                pekerjaan/ bisnis dan mencapai target
              </li>
            </ol>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <form>
            <div className="body">
              <div className="form-group">
                <label className="card-inside-title">Nama Lengkap</label>
                <input type="text" className="form-control bg-white" />
              </div>
              <div className="form-group">
                <label className="card-inside-title">Email</label>
                <input type="text" className="form-control bg-white" />
                <label className="error">
                  Akses premium anda akan kami kirimkan melalui email
                </label>
              </div>
              <div className="form-group">
                <label className="card-inside-title">Nomor Hp</label>
                <input type="text" className="form-control bg-white" />
                <label className="error">
                  Nomor Hp Anda akan kami gunakan untuk korespondensi dengan
                  Anda
                </label>
              </div>
              <div className="form-group">
                <label className="card-inside-title">Kode Voucher</label>
                <input type="text" className="form-control bg-white" />
              </div>
            </div>
            <button className="btn btn-round bg-purple">
              ya, beri saya informasi detail
            </button>
          </form>
        </div>
      </div>
    </FormRegister>
  );
}

export default FormPremiumAccount;
