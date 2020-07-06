import React from "react";

import Navbar from "../../components/Navbar";
import HeaderProfile from "../../components/HeaderProfile";
import YourProfile from "../../components/YourProfile";
import Footer from "../../components/Footer";
import CharProfile from "../../components/CharProfile";
import StrengthProfile from "../../components/StrengthProfile";
import SelfLeadership from "../../components/SelfLeadership";
import PrimaryProfile from "../../components/PrimaryProfile";
import ProfileSupport from "../../components/ProfileSupport";
import ConflictProfile from "../../components/ConflictProfile";
import ProfileValues from "../../components/ProfileValues";
import ProfileInstinct from "../../components/ProfileInstinct";
import RoleModel from "../../components/RoleModel";
import IndustryRoleModel from "../../components/IndustryRoleModel";
import Elements from "../../components/Elements";

const Profile = () => {
  return (
    <div className="container">
      <Navbar loginProp={{ isLogin: true }} />
      <HeaderProfile />
      <YourProfile />
      <CharProfile />
      <StrengthProfile />
      <SelfLeadership
        title="Self-leadership"
        text="Pemimpin dengan keingintahuan dan wawasan yang luas. yang mampu
              mengatasi berbagai hal macam gejolak di dalam dirinya dengan baik.
              Tipe pemimpin yang mampu untuk mnjadi penjaga atas
              keterlakkasaannya sebuah hal atau aset, dimana hal ini berarti
              bahwa ia adalah seorang pemimpin yang mampu menghasilkan
              keberhasilan tanpa harus melepas aset yang saat ini dimilikinya,
              berupa sumber daya manusia (SDM, properti, kapital, dll)"
      />
      <PrimaryProfile />
      <ProfileSupport />
      <ConflictProfile />
      <ProfileValues />
      <ProfileInstinct />
      <RoleModel />
      <IndustryRoleModel />
      <Elements />
      <Footer />
    </div>
  );
};

export default Profile;
