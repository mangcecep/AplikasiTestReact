import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/HeaderWelcome";
import Footer from "../../components/Footer";
import NumberImage from "../../components/NumberImage";

const Welcome = () => {
  return (
    <div className="container">
      <Navbar loginProp={{ isLogin: false }} />
      <Header />
      <NumberImage />
      <Footer />
    </div>
  );
};

export default Welcome;
