import React from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Header";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";
import Trust from "../../components/Trust";
import Test from "../../components/Test";

const Home = () => {
  return (
    <>
      <Navbar loginProp={{ isLogin: false }} />
      <Heading />
      <Testimonials />
      <Trust />
      <Test />
      <Footer />
    </>
  );
};

export default Home;
