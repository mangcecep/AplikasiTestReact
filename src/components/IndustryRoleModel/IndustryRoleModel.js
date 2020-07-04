import React from "react";
import styled from "styled-components";
import { RectangleCopy73jpgImage } from "../images";

const Col = styled.div`
  background-image: url("${RectangleCopy73jpgImage.url}");
`;

function IndustryRoleModel() {
  let role = [];
  for (let i = 0; i < 8; i++) {
    role.push(
      <div className="row clearfix mx-auto my-1">
        <div className="col-lg-3 col-md-3 col-sm-3 bg-white text-dark py-2">
          Alchemist
        </div>
        <Col className="col-lg-8 col-md-8 col-sm-8 text-center text-dark py-2">
          Architect
        </Col>
      </div>
    );
  }
  return (
    <section className="jumbotron py-4">
      <h4 className="text-center">Role model - Industri</h4>
      <div className="row clearfix">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <p>
            <strong>Property</strong>
          </p>
          {role}
          <div className="col-lg-1 col-md-1 col-sm-1"></div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6">
          <p>
            <strong>Education</strong>
          </p>
          {role}
          <div className="col-lg-1 col-md-1 col-sm-1"></div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6">
          <p className="mt-2">
            <strong>Finance</strong>
          </p>
          {role}
          <div className="col-lg-1 col-md-1 col-sm-1"></div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6">
          <p className="mt-2">
            <strong>Manufacture</strong>
          </p>
          {role}
          <div className="col-lg-1 col-md-1 col-sm-1"></div>
        </div>
      </div>
    </section>
  );
}

export default IndustryRoleModel;
