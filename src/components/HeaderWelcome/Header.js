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
  img.pathCopy {
    height : auto;
    width: 20%;
  }
  img.helloPng {
    height : auto;
    width: 700px;
  }
  img.path {
    height : auto;
    width: 15%;
  }
  p.title {
    font-size: 25px;
    text-align: center;
  }
`;

function HeaderWelcome() {
  return (
    <Header className="container">
      <p className="title">
        <strong>
          "" <br />
          Selamat mengikuti tes Shio Kaya <br />
          dan dapatkan deskripsi seru yang akurat tentang <br />
          karakteristik alamiah anda untuk kekayaan dan <br />
          mengapa Anda selama ini melakukan hal-hal <br />
          yang biasa Anda lakukan
        </strong>
      </p>
      <img
        src={pathCopy16Image.url}
        alt={pathCopy16Image.alt}
        className="pathCopy"
      />
      <img
        src={helloPngImage.url}
        alt={helloPngImage.alt}
        className="helloPng"
      />
      <img src={pathImage.url} alt={pathImage.alt} className="path" />
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="content mt-4">
            <h4 className="title text-center mb-4">
              SELAMAT DATANG DI SHIOKAYA
            </h4>
            <div className="text ml-5">
              <p>
                Anda cukup mengaolokasikan waktu selama 5 menit, mengisi 12
                pertanyaan singkat Shiokaya, untuk bisa <br />
                memperoleh gambaran umum tentang potensi model keberhasilan diri
                anda.
              </p>
              <br />
              <p>
                Shiokaya merupakan aat ukur untuk potensi model keberhasilan,
                yaitu cuplikan informasi tentang <br />
                bagaimana Anda bisa menggunakan potensi yang selama ini ada
                dalam diri Anda untuk bisa <br />
                mencapai keberhasilan lebih cepat dan akurat.
              </p>
              <br />
              <p>
                5 hal apa yang bisa Anda lakukan setalah mendapatkan gambaran
                umum Anda melalui Shiokaya
                <br /> ini:
              </p>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default HeaderWelcome;
