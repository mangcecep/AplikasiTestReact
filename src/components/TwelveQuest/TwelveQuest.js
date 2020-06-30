import React from "react";
import styled from "styled-components";

import { containerCarouselBackground } from "../images";

const FormQuestion = styled.section`
  p.questions {
    font-size: 25px;
    margin-top: 70px;
  }
  margin-top: 50px;
  padding: auto;
  margin-bottom: 150px;
  img {
    position: absolute;
    z-index: -1;
  }
  p.labelCheckbox {
    font-size: 25px;
  }
`;

function TwelveQuest(props) {
  const { number, question, choiceA, choiceB } = props;
  return (
    <FormQuestion>
      <img
        src={containerCarouselBackground.url}
        alt={containerCarouselBackground.alt}
      />
      <div className="row clearfix mt-4">
        <div className="col-lg-12 col-12 col-sm-12">
          <div className="row clearfix">
            <div className="col-lg-1 col-md-1 col-sm-1">
              <p className="questions text-right">{number}</p>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-10">
              <p className="questions">{question}</p>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1"></div>
            <div className="col-lg-1 col-md-1 col-sm-1"></div>
            <div className="col-lg-11 col-md-11 col-sm-11">
              <div className="form-group">
                <div className="checkbox">
                  <input id="checkbox" type="checkbox" />
                  <label htmlFor="checkbox">
                    <p className="labelCheckbox">{choiceA}</p>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1"></div>
            <div className="col-lg-11 col-md-11 col-sm-11">
              <div className="form-group">
                <div className="checkbox">
                  <input id="checkbox2" type="checkbox" />
                  <label htmlFor="checkbox2">
                    <p className="labelCheckbox">{choiceB}</p>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormQuestion>
  );
}

export default TwelveQuest;
