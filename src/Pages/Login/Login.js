import React from "react";
import Navbar from "../../components/Navbar";
import FormLogin from "../../components/FormLogin";

const Login = () => {
  return (
    <>
      <Navbar loginProp={{ isLogin: false }} />
      <FormLogin />
    </>
  );
};

export default Login;
