import React from "react";
import styled from "styled-components";

import Navbar from "../../components/Navbar";
import HeaderProfile from "../../components/HeaderProfile";
import YourProfile from "../../components/YourProfile";
import Characteristic from "../../components/Characteristic";
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

const Prof = styled.div`
  @font-face {
    font-family: "Poppins Regular";
    src: local("Poppins Regular"),
      url(../../assets/fonts/Poppins-Regular.ttf) format("truetype");
  }
  font-family: "Poppins Regular";
`;

const Profile = () => {
  return (
    <Prof>
      <Navbar loginProp={{ isLogin: true }} />
      <HeaderProfile />
      <YourProfile />
      <Characteristic />
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
    </Prof>
  );
};

export default Profile;
