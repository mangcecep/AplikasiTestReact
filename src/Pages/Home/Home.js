import React from "react";
import Heading from "../../components/Header";
import Navbar from "../../components/Navbar";

import Testimonials from "../../components/Testimonials";
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
    </>
  );
};

export default Home;
