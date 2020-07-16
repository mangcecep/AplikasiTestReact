import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/HeaderWelcome";
import NumberImage from "../../components/NumberImage";

const Welcome = () => {
  return (
    <>
      <Navbar loginProp={{ isLogin: false }} />
      <Header />
      <NumberImage />
    </>
  );
};

export default Welcome;
