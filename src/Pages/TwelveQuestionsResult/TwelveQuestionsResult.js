import React from "react";
import HeaderTwelveQuestionResult from "../../components/HeaderTwelveQuestionResult";
import FormRegisterComp from "../../components/FormRegisterComponent";
import Navbar from "../../components/Navbar";

const TwelveQuestionsResult = () => {
  return (
    <>
      <Navbar loginProp={{ isLogin: false }} />
      <HeaderTwelveQuestionResult />
      <FormRegisterComp />
    </>
  );
};

export default TwelveQuestionsResult;
