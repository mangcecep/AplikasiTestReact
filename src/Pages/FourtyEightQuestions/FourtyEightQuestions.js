import React from "react";
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
