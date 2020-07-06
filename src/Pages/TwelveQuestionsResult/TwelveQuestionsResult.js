import React from "react";
import Navbar from "../../components/Navbar";
import HeaderTwelveQuestionResult from "../../components/HeaderTwelveQuestionResult";
import Footer from "../../components/Footer";
import FormRegisterComp from "../../components/FormRegisterComponent";

const TwelveQuestionsResult = () => {
  return (
    <div className="container">
      <Navbar loginProp={{ isLogin: false }} />
      <HeaderTwelveQuestionResult />
      <FormRegisterComp />
      <Footer />
    </div>
  );
};

export default TwelveQuestionsResult;
