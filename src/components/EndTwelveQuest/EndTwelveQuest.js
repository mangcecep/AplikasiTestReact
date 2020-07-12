import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { containerCarouselBackground, look10pngImage } from "../images";

const FormQuestion = styled.section`
  background-image: url("${containerCarouselBackground.url}");
  background-repeat: no-repeat;
  background-size: 100% 100%;
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

function EndTwelveQuest(props) {
  const { number, question, choiceA, choiceB } = props;
  return (
    <>
      <FormQuestion>
        <div className="row clearfix">
          <div className="col-lg-1 col-md-1 col-sm-1">
            <p className="questions text-right">{number}</p>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10">
            <p className="questions">{question}</p>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1"></div>
          <div className="col-lg-1 col-md-1 col-sm-1">
            <div className="form-group ml-4 pl-5">
              <input
                id={`${choiceA}`}
                type="checkbox"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10">
            <div className="checkbox bg-white text-dark pt-2 pl-4 pb-1">
              <label htmlFor={`${choiceA}`}>
                <p className="labelCheckbox">{choiceA}</p>
              </label>
            </div>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1"></div>
          <div className="col-lg-1 col-md-1 col-sm-1">
            <div className="form-group ml-4 pl-5">
              <input
                id={`${choiceB}`}
                type="checkbox"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-10 col-md-10 col-sm-10">
            <div className="checkbox bg-white text-dark pt-2 pl-4 pb-1">
              <label htmlFor={`${choiceB}`}>
                <p className="labelCheckbox">{choiceB}</p>
              </label>
            </div>
          </div>
        </div>
      </FormQuestion>
      <div className="row clearfix mx-auto">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <img
            src={look10pngImage.url}
            alt={look10pngImage.alt}
            width="70%"
            height="auto"
            style={{
              position: "relative",
              marginBottom: "200px",
              zIndex: "12",
              margin: "center",
            }}
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <Link
            className="btn btn-lg btn-round bg-purple"
            to="/twelve-questions-result"
          >
            lihat hasilnya
          </Link>
        </div>
      </div>
    </>
  );
}

export default EndTwelveQuest;
