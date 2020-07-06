import React from "react";
import styled from "styled-components";

import { instagramicon, waIcon, emailIcon } from "../../components/images";
import PoppinsMedium from "../../assets/fonts/Poppins-Medium.ttf";

function Footer() {
  const FooterWrapper = styled.footer`
@font-face {
  font-family: "Poppins MediumItalic";
  src: local("${PoppinsMedium}"),
    url("${PoppinsMedium}") format("truetype");
}

font-family: 'Poppins MediumItalic';
font-size: 13px;

@media screen and (max-width: 768px) {
  font-size: 7px;
}
`;
  return (
    <FooterWrapper className="mt-4">
      <div className="row clearfix bg-black text-light px-4 py-4">
        <div className="col-lg-9 col-md-12 col-sm-12">
          <h5>ShioKaya</h5>
          <p>
            Dalam deskripsi Shio Kaya ini, anda mempelajari apa yang sebenarnya{" "}
            <br />
            mendorong, menginspirasi, dan tantangan dari karakteristik alamiah
            Anda yang unik.
            <br />
            yang bisa membantu anda dalam membangun keberhasilan dengan lebih
            efektif <br />
            dan efisien, menghemat waktu dan tenaga anda.
          </p>
        </div>
        <div className="col-lg-3 col-md-12 col-sm-12 my-auto mx-auto">
          <div className="d-flex justify-content-start">
            <img
              src={instagramicon.url}
              alt={instagramicon.alt}
              width="10%"
              height="auto"
            />
            <span className="ml-2 my-auto"> @tentangshiokaya</span>
          </div>

          <div className="d-flex justify-content-start">
            <img src={waIcon.url} alt={waIcon.alt} width="10%" height="auto" />
            <span className="ml-2 my-auto"> +62 877 0088 4964</span>
          </div>

          <div className="d-flex justify-content-start">
            <img
              src={emailIcon.url}
              alt={emailIcon.alt}
              width="10%"
              height="auto"
            />
            <span className="ml-2 my-auto"> support@shiokaya.com</span>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
