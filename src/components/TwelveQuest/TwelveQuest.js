import React from "react";
import styled from "styled-components";

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

const Input = styled.input`
  font-size: 22px;
  margin-right: 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

function TwelveQuest(props) {
  const { number, question, choiceA, choiceB } = props;
  return (
    <FormQuestion>
      <div className="row clearfix">
        <div className="col-lg-1 col-md-1 col-sm-1">
          <p className="questions text-right">{number}</p>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10">
          <p className="questions">{question}</p>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1"></div>
        <div className="col-lg-11 col-md-11 col-sm-11">
          <div className="form-group ml-5 pl-2 pt-2 pb-2 bg-white text-dark">
            <div className="radiobtn">
              <Input
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked
              />
              <label htmlFor="male">{choiceA}</label>
            </div>
          </div>
          <div className="form-group ml-5 pl-2 pt-2 pb-2 bg-white text-dark">
            <div className="radiobtn">
              <Input type="radio" name="gender" value="female" id="female" />
              <span>
                <label htmlFor="female">{choiceB}</label>
              </span>
            </div>
          </div>
        </div>
      </div>
    </FormQuestion>
  );
}

export default TwelveQuest;
