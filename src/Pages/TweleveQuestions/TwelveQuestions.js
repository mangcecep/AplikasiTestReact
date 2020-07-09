import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import HeaderTwelveQuestion from "../../components/HeaderTwelveQuestion";
import Footer from "../../components/Footer";
import FormTwelve from "../../components/FormTwelve";

const Questions = styled.div`
  @font-face {
    font-family: "Poppins Regular";
    src: local("Poppins Regular"),
      url(../../assets/fonts/Poppins-Regular.ttf) format("truetype");
  }
  font-family: "Poppins Regular";
`;
const TwelveQuestions = () => {
  return (
    <Questions className="container">
      <Navbar loginProp={{ isLogin: false }} />
      <HeaderTwelveQuestion />
      <FormTwelve />
      <Footer />
    </Questions>
  );
};

export default TwelveQuestions;
