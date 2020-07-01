import React from "react";
import Navbar from "../../components/Navbar";

function Profile() {
  return (
    <div className="container">
      <Navbar loginProp={{ isLogin: true }} />
      <p>Profile</p>
    </div>
  );
}

export default Profile;
