import React from "react";
import { group16Image } from "../../components/images";
import styled from "styled-components";
import ContentResult from "../../components/ContentResult";
import FormPremiumAccount from "../../components/FormPremiumAccount";

const Header = styled.section`
  background-image: url("${group16Image.url}");
  background-repeat: no-repeat;
  @font-face {
    font-family: "Poppins Black";
    src: local("Poppins Black"),
      url(../../assets/fonts/Poppins-Black.ttf) format("truetype");
  }
  font-family: "Poppins Black";
  h3.title {
    padding-top: 100px;
    font-size: 30px;
    text-align: center;
  }
  @media screen and (max-width: 420px) {
    h3.title {
    padding-top: 30px;
    font-size: 20px;
    text-align: center;
    }
  }
`;

const FourtyEightResult = () => {
  return (
    <>
      <Header>
        <h3 className="title">
          <strong>Profil akurat potensi model keberhasilan Anda adalah</strong>
        </h3>
      </Header>
      <ContentResult />
      <FormPremiumAccount />
    </>
  );
};

export default FourtyEightResult;
