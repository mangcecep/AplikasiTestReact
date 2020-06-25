import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";

import { backgorundColor } from "../../components/images";

const Part = styled.nav`
  background: url(${backgorundColor.url});
  background-size: auto;
  background-repeat: no-repeat;
`;

const Home = () => {
  return (
    <Part className="container-fluid mx-auto pt-4">
      <Navbar />
      <div className="authentication">
        <div className="content">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12">
              <strong>
                <h1 className="title text-center">
                  "Senang rasanya jadi ngerti tentang diri sendiri.
                  <br /> Bisa ngerjain sesuatu sesuai dengan potensi diri yang
                  sebenernya!"
                </h1>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </Part>
  );
};

export default Home;
