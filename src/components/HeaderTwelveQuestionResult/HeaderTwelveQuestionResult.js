import React from "react";
import styled from "styled-components";
import {
  BackgroundLayerCopyImage,
  group16Image,
  Group2copyingImage,
  PathcopyagainpngImage,
  priestImage,
  Group3pngImage,
  PathKopiimage,
  Group2CopyImage,
  marshal3Image,
  PathCopy2Image,
} from "../images";

const Header = styled.section`
  background-image: url("${group16Image.url}");
  background-size: 550px;
  background-repeat: repeat-x;
  img.pathCopy {
    height : auto;
    width: 20%;
  }
  .Group2copyingImage {
    margin-left: 50px;
    position: absolute;
    height : auto;
    width: 75%;
  }
  img.charLayer {
    position: relative;
    height : auto;
    width: 50%;
    margin-left: 50px;
    padding-left: 100px;
    padding-top: 30px
  }
  img.PathcopyagainpngImage {
    margin-left: -40px;
    width: auto;
    height: 150px;
  }
  img.PathKopiimage {
    margin-top: 240px;
    margin-left: 100px;
    width: 20%;
    height: auto
  }
  img.charPriest {
    position: relative;
    height : auto;
    width: 50%;
    margin-left: 50px;
    padding-left: 100px;
    padding-bottom: 50px;
  }
  img.PathCopy2Image {
    margin-top: 0px;
    margin-left: 250px;
    width:50%;
    height: auto
  }
  p.title {
    margin-top: 50px;
    font-size: 25px;
    text-align: center;
  }
  p.content {
    font-size: 17px;
  }
`;

function HeaderTwelveQuestionResult() {
  return (
    <Header>
      <p className="title">
        <strong>
          Selamat! di bawah ini adalah 3 kemungkinan terbesar <br />
          dari total 8 profil Shio kaya Anda. 3 kecenderungan <br />
          cara alamiah Anda, untuk bisa mencapai keberhasilan <br />
          dengan waktu dan tenaga yang lebih efektif dan efisien
        </strong>
      </p>
      <section className="container">
        <div className="content">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <img
                src={Group2copyingImage.url}
                alt={Group2copyingImage.alt}
                className="Group2copyingImage"
              />
              <img
                src={BackgroundLayerCopyImage.url}
                alt={BackgroundLayerCopyImage.alt}
                className="charLayer"
              />
              <img
                src={PathcopyagainpngImage.url}
                alt={PathcopyagainpngImage.alt}
                className="PathcopyagainpngImage"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 my-auto">
              <h4>
                <strong>Merchant</strong>
              </h4>
              <p className="content">
                Kekuatan fleksibilitas yang mampu untuk merasa <br />
                nyaman dengan kondisi yang penuh degan interaksi <br />
                sosial, juga menikmati kondisi sendirian atau <br />
                yang jauh dar keramaian, untuk memperoleh <br />
                semangat kembali
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 my-auto">
              <h4>
                <strong>Priest</strong>
              </h4>
              <p className="content">
                Menjalani instruksi dan prosedur secara baik, tidak <br />
                terganggu oleh rutinitas, namun mampu untuk <br />
                melihat celah dan kesempatan dalam meraih target/ <br />
                tujuan dengan lebih cepat{" "}
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <img
                src={Group3pngImage.url}
                alt={Group3pngImage.alt}
                className="Group2copyingImage"
              />
              <img
                src={priestImage.url}
                alt={priestImage.alt}
                className="charPriest"
              />
              <img
                src={PathKopiimage.url}
                alt={PathKopiimage.alt}
                className="PathKopiimage"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <img
                src={Group2CopyImage.url}
                alt={Group2CopyImage.alt}
                className="Group2copyingImage"
              />
              <img
                src={marshal3Image.url}
                alt={marshal3Image.alt}
                className="charLayer"
              />
              <img
                src={PathCopy2Image.url}
                alt={PathCopy2Image.alt}
                className="PathCopy2Image"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 my-auto">
              <h4>
                <strong>Marshal</strong>
              </h4>
              <p className="content">
                Mengutamakan hal yang dianggap prioritas <br />
                cenderung terstruktur dalam perencanaan maupun <br />
                implementasinya, menjadi mesin pendorong untuk <br />
                sistem yang dibangun atau dijalanjan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Header>
  );
}

export default HeaderTwelveQuestionResult;
