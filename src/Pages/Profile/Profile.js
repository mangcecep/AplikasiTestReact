import React from "react";
import Navbar from "../../components/Navbar";
import HeaderProfile from "../../components/HeaderProfile";
import YourProfile from "../../components/YourProfile";
import Footer from "../../components/Footer";

function Profile() {
  return (
    <div className="container">
      <Navbar loginProp={{ isLogin: true }} />
      <HeaderProfile />
      <YourProfile />
      <section className="jumbotron"></section>
      <Footer />
    </div>
  );
}

export default Profile;
