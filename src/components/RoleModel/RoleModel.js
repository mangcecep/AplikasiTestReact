import React from "react";
import styled from "styled-components";

const Role = styled.section`
.jumbotron {
  background-color: #F8F8F5;
}
h4 {
  margin-top:-40px;
  @font-face {
    font-family: "Poppins ExtraBold";
    src: local("Poppins ExtraBold"),
      url(../../assets/fonts/Poppins-ExtraBold.ttf) format("truetype");
  }
  font-family: "Poppins ExtraBold";
}

@media screen and (max-width: 420px) {
  h4 {
    margin-top:-20px;
  }
}
`;


function RoleModel() {
  let roleModel = [];
  let roleModelNumber = 7;
  for (let i = 0; i < roleModelNumber; i++) {
    roleModel.push(
      <div className="col-lg-3 col-md-3 col-sm-3" key={i}>
        <p>
          <strong>Achmad Hamdami</strong>
        </p>
        <p>
          <i>Founder Trakindo</i>
        </p>
      </div>
    );
  }
  return (
    <Role className="container">
      <div className="jumbotron">
        <h4 className="text-center">Role model - Tokoh terkenal</h4>
        <p>
          <strong>Priest</strong>
        </p>
        <div className="row clearfix">{roleModel}</div>
      </div>
    </Role>
  );
}

export default RoleModel;
