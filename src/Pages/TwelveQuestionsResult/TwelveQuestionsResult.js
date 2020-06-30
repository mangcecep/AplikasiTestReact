import React from "react";
import Navbar from "../../components/Navbar";
import HeaderTwelveQuestionResult from "../../components/HeaderTwelveQuestionResult";
import Footer from "../../components/Footer";
import FormRegisterComp from "../../components/FormRegisterComponent";

function TwelveQuestionsResult() {
  return (
    <div className="container">
      <Navbar />
      <HeaderTwelveQuestionResult />
      <FormRegisterComp />
      <Footer />
    </div>
  );
}

export default TwelveQuestionsResult;
