import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { group16Image } from "../../components/images";
import styled from "styled-components";
import ContentResult from "../../components/ContentResult";
import FormPremiumAccount from "../../components/FormPremiumAccount";

const Header = styled.section`
  background-image: url("${group16Image.url}");
  background-repeat: no-repeat;
  h3.title {
    padding-top: 100px;
    font-size: 30px;
    text-align: center;
  }
`;

const FourtyEightResult = () => {
  return (
    <div className="container">
      <Navbar loginProp={{ isLogin: true }} />
      <Header>
        <h3 className="title">
          <strong>Profil akurat potensi model keberhasilan Anda adalah</strong>
        </h3>
      </Header>
      <ContentResult />
      <FormPremiumAccount />
      <Footer />
    </div>
  );
};

export default FourtyEightResult;
