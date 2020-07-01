import React from "react";
import Navbar from "../../components/Navbar";
import HeaderTwelveQuestion from "../../components/HeaderTwelveQuestion";
import Footer from "../../components/Footer";
import FormTwelve from "../../components/FormTwelve";

// console.log(state.slideIndex);
const TwelveQuestions = () => {
  return (
    <div className="container">
      <Navbar loginProp={{ isLogin: false }} />
      <HeaderTwelveQuestion />
      <FormTwelve />
      <Footer />
    </div>
  );
};

export default TwelveQuestions;
