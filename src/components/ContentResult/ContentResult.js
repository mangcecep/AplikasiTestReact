import React from "react";
import ProfileResult from "../ProfileResult";
import styled from "styled-components";
import { BackgroundLayerCopyImage, ovalPng } from "../images";

const ContentResult = styled.div`
  img.absolute {
    width: 75%;
    height: auto;
    position: relative;
    z-index: -1;
  }
  img.relative {
    margin-left: 100px;
    margin-top: -450px;
    width: 50%;
    height: auto;
  }
`;

function index() {
  return (
    <ContentResult>
      <h5>MERCHANT</h5>
      <h4>(The Mediator)</h4>
      <div className="row clearfix mt-5">
        <div className="col-lg-5 col-md-5 col-sm-5">
          <img src={ovalPng.url} alt={ovalPng.alt} className="absolute" />
          <img
            src={BackgroundLayerCopyImage.url}
            alt={BackgroundLayerCopyImage.alt}
            className="relative"
          />
        </div>
        <div className="col-lg-7 col-md-7 col-sm-7">
          <div className="content ml-5">
            <p>
              Negosiator ulung. Pedagang yang handal, Pencari peluang. <br />
              Pengguna waktu yang efektif dan efisien, fleksibel, Bekerja <br />
              dalam pola/ parameter tertentu, berdasarkan data.
            </p>
            <p>
              Seseorang yang mampu memanfaatkan kekuatan dari <br />
              wawasan yang luas, yang menampung apapun dari segala <br />
              penjuru. mencapai keberhasilan dengan menerima berbagai <br />
              hal, dan memanfaatkannya untuk keberhasilan yang lebih <br />
              besar
            </p>
            <ProfileResult />
          </div>
        </div>
      </div>
    </ContentResult>
  );
}

export default index;
