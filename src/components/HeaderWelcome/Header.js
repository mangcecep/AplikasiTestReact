import React from "react";
import styled from "styled-components";
import {
  helloPngImage,
  group16Image,
  pathCopy16Image,
  pathImage,
} from "../../components/images";

const Header = styled.section`
  background-image: url("${group16Image.url}");
  background-size: 550px;
  background-repeat: repeat-x;

  @font-face {
    font-family: "Poppins Medium";
    src: local("Poppins Medium"),
      urL(../../assets/fonts/Poppins-Medium.ttf) format("truetype");
  }
  font-family: "Poppins Medium";
  position: relative;
  box-shadow: none;
  .registerButton {
    box-shadow: 1px 3px 5px grey;
  }
  
  img.pathCopy {
    height : auto;
    width: 90%;
  }
  img.helloPng {
    height : auto;
    width: 150%;
  }
  img.path {
    height : auto;
    width: 70%;
    float: right;
  }
  .text {
    font-size: 15px;
  }
  p.title {
    font-size: 25px;
    text-align: center;
  }

  @media screen and (max-width: 420px) {
    h4 {
      font-size: 14px;
    }
    p.title {
      font-size: 13px;
    }
    img.pathCopy {
      height : auto;
      width: 10%;
    }
    img.helloPng {
      height : auto;
      width: 100%;
    }
    img.path {
      height : auto;
      width: 10%;
    }
  }
`;

function HeaderWelcome() {
  return (
    <Header className="container">
      <p className="title py-4">
        <strong>
          <i className="zmdi zmdi-hc-2x"></i>
          <br />
          Selamat mengikuti tes Shio Kaya <br />
          dan dapatkan deskripsi seru yang akurat tentang <br />
          karakteristik alamiah anda untuk kekayaan dan <br />
          mengapa Anda selama ini melakukan hal-hal <br />
          yang biasa Anda lakukan
        </strong>
      </p>
      <div className="row clearfix">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <img
            src={pathCopy16Image.url}
            alt={pathCopy16Image.alt}
            className="pathCopy"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <img
            src={helloPngImage.url}
            alt={helloPngImage.alt}
            className="helloPng"
          />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <img src={pathImage.url} alt={pathImage.alt} className="path" />
        </div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="content mt-4">
            <h4 className="text-center mb-4">SELAMAT DATANG DI SHIOKAYA</h4>
            <div className="text">
              <p>
                Anda cukup mengaolokasikan waktu selama 5 menit, mengisi 12
                pertanyaan singkat Shiokaya, untuk bisa memperoleh gambaran umum
                tentang potensi model keberhasilan diri anda.
              </p>
              <p>
                Shiokaya merupakan alat ukur untuk potensi model keberhasilan,
                yaitu cuplikan informasi tentang bagaimana Anda bisa menggunakan
                potensi yang selama ini ada dalam diri Anda untuk bisa mencapai
                keberhasilan lebih cepat dan akurat.
              </p>
              <p>
                5 hal apa yang bisa Anda lakukan setalah mendapatkan gambaran
                umum Anda melalui Shiokaya ini:
              </p>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default HeaderWelcome;
