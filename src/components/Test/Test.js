import React from "react";
import PoppinsMedium from "../../assets/fonts/Poppins-Medium.ttf";
import { greenBackgroundImage, buttonImage } from "../images";
import styled from "styled-components";

const Content = styled.section`
background-image: url("${greenBackgroundImage.url}");
background-size: 130% 170%;
background-position: top;
background-repeat: no-repeat;
padding-bottom: 20px;
@font-face {
  font-family: "Poppins MediumItalic";
  src: local("${PoppinsMedium}"),
  url("${PoppinsMedium}") format("truetype");
}
font-family: 'Poppins MediumItalic';
.title {
    padding-top: 20px;
    font-size: 25px;
    margin-right: 25px;
}
.button {
  background-image: url("${buttonImage.url}");
  background-size: 100% 200%;
  background-repeat: no-repeat;
  background-position: center;
  padding: 5px 70px 5px 20px;
  font-size: 14px;
}

@media screen and (max-width: 420px) {
  background-size: 120% 180%;
  .title {
    font-size: 13px;
  }
  .button {
    background-size: 100% 150%;
    background-repeat: no-repeat;
    background-position: center;
    padding: 5px 45px 5px 10px;
    font-size: 12px;
  }
}
`;

function Test() {
  return (
    <section className="container">
      <div className="row clearfix align-center">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <Content>
            <p className="title">
              Lorem ipsum dolor sit amet consectetur <br />
              adipiscing elit
            </p>
            <button className="button bg-purple btn-round btn-lg">
              Ikuti Test
            </button>
          </Content>
        </div>
      </div>
    </section>
  );
}

export default Test;
