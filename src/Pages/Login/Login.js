import React from "react";
import Navbar from "../../components/Navbar";
import FormLogin from "../../components/FormLogin";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <div className="container">
      <Navbar />
      <FormLogin />
      <Footer />
    </div>
  );
};

export default Login;
