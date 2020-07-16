import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../../components/Navbar";
import HeaderFourtyEigthQuest from "../../components/HeaderFourtyEigthQuest";
import FormFourtyEight from "../../components/FormFourtyEight";

const FourtyEightQuestions = (props) => {
  return (
    <>
      <Navbar loginProp={{ isLogin: true }} />
      <HeaderFourtyEigthQuest />
      <FormFourtyEight />
    </>
  );
};

export default FourtyEightQuestions;
