import React from "react";

import Navbar from "../../components/Navbar";
import HeaderTwelveQuestion from "../../components/HeaderTwelveQuestion";
import Footer from "../../components/Footer";
import TwelveQuest from "../../components/TwelveQuest";

// import styled from "styled-components";

const TwelveQuestions = () => {
  return (
    <div className="container">
      <Navbar />
      <HeaderTwelveQuestion />
      <TwelveQuest />
      <Footer />
    </div>
  );
};

export default TwelveQuestions;
