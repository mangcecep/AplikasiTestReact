import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import HeaderTwelveQuestion from "../../components/HeaderTwelveQuestion";
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
    <Questions>
      <Navbar loginProp={{ isLogin: false }} />
      <HeaderTwelveQuestion />
      <FormTwelve />
    </Questions>
  );
};

export default TwelveQuestions;
