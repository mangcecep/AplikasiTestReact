import React from "react";
import styled from "styled-components";
import Option from "./Option";
import { containerCarouselBackground } from "../images";

const FormQuestion = styled.section`
  background-image: url("${containerCarouselBackground.url}");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  p.questions {
    font-size: 25px;
  }
  margin-top: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
  img {
    position: absolute;
    z-index: -1;
  }
    font-size: 19px;
    .radiobtn {
      position: relative;
      display: block;
    }
`;

function FourtyEightQuest(props) {
  const { number, question } = props;
  return (
    <FormQuestion>
      <div className="row clearfix">
        <div className="col-lg-1 col-md-1 col-sm-1">
          <p className="questions text-right">{number}</p>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10">
          <p className="questions">{question}</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <p className="pl-5 ml-5">
            Semua prosedur berjalan
            <br /> dengan baik
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <p className="justify-content-end">
            Kerjasama dengan mitra
            <br /> terjaga dengan baik
          </p>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="align-center">
            <Option />
          </div>
        </div>
      </div>
    </FormQuestion>
  );
}

export default FourtyEightQuest;
