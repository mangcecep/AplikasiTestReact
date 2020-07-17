import React from "react";
import styled from "styled-components";

import { containerCarouselBackground } from "../../components/images";

const FormQuestion = styled.section`
  background-image: url("${containerCarouselBackground.url}");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  p.questions {
    font-size: 25px;
    margin-left: 50px;
    padding-left: 10px;
  }
  margin-top: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
    @media screen and (max-width: 420px) {
      background-image: url("${containerCarouselBackground.url}");
      background-repeat: no-repeat;
      background-size: 100% 90%;
      p.questions {
        font-size: 14px;
        margin-left: 5px;
        padding-left: 10px;
        margin-top: -30px;
      }
    }
`;

const Radiobtn = styled.div`
  max-width: 40px;
  position: relative;
  margin: left;
  font-size: 25px;
  position: relative;
  display: block;
  label {
    display: block;
    background: #f0f8ff;
    color: #444;
    border-radius: 5px;
    padding: 10px 20px;
    border: 2px solid #f0f8ff;
    margin-bottom: 5px;
    cursor: pointer;
    width: 900px;
    padding-left: 40px;
  }

  label:after,
  label:before {
    content: "";
    position: absolute;
    right: 11px;
    top: 11px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #f8f8ff;
  }

  label:before {
    background: transparent;
    transition: 0.1s width cubic-bezier(0.075, 0.82, 0.165, 1) 0s,
      0.3s height cubic-bezier(0.075, 0.82, 0.165, 2) 0.1s;
    z-index: 2;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: 13px;
    background-position: center;
    width: 0;
    height: 0;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNS4zIDEzLjIiPiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE0LjcuOGwtLjQtLjRhMS43IDEuNyAwIDAgMC0yLjMuMUw1LjIgOC4yIDMgNi40YTEuNyAxLjcgMCAwIDAtMi4zLjFMLjQgN2ExLjcgMS43IDAgMCAwIC4xIDIuM2wzLjggMy41YTEuNyAxLjcgMCAwIDAgMi40LS4xTDE1IDMuMWExLjcgMS43IDAgMCAwLS4yLTIuM3oiIGRhdGEtbmFtZT0iUGZhZCA0Ii8+PC9zdmc+);
  }

  input[type="radio"] {
    display: none;
    position: absolute;
    width: 100%;
    appearance: none;
  }

  input[type="radio"]:checked + label {
    background: #ccccff;
    animation-name: blink;
    animation-duration: 1s;
    border-color: #6600ff;
  }

  input[type="radio"]:checked + label:after {
    background: #6600ff;
  }
  input[type="radio"]:checked + label:before {
    width: 20px;
    height: 20px;
  }

  @keyframes blink {
    0% {
      background-color: #ffffff;
    }
    10% {
      background-color: #ffffff;
    }
    11% {
      background-color: #ffffff;
    }
    29% {
      background-color: #ffffff;
    }
    30% {
      background-color: #ffffff;
    }
    50% {
      background-color: #ffffff;
    }
    45% {
      background-color: #ffffff;
    }
    50% {
      background-color: #ffffff;
    }
    100% {
      background-color: #ffffff;
    }
  }

  @media screen and (max-width: 420px) {
    max-width: 40px;
    position: relative;
    margin-left: -40px;
    font-size: 14px;
    position: relative;
    display: block;
    label {
      display: block;
      background: #f0f8ff;
      color: #444;
      border-radius: 5px;
      padding: 10px 20px;
      border: 2px solid #f0f8ff;
      margin-bottom: 5px;
      cursor: pointer;
      width: 300px;
      padding-left: 40px;
    }
  }
`;

function TwelveQuest(props) {
  const { number, question, choiceA, choiceB, name } = props;
  return (
    <FormQuestion>
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <p className="questions">
            {number}&nbsp;{question}
          </p>
        </div>
        <div className="col-lg-11 col-md-11 col-sm-11">
          <div className="form-group ml-5 pl-2 pt-2 pb-2 text-dark">
            <Radiobtn>
              <input type="radio" id="huey" name={name} value="1" />
              <label htmlFor="huey">{choiceA}</label>
            </Radiobtn>
          </div>
          <div className="form-group ml-5 pl-2 pt-2 pb-2 text-dark">
            <Radiobtn>
              <input type="radio" id="dewey" name={name} value="2" />
              <label htmlFor="dewey">{choiceB}</label>
            </Radiobtn>
          </div>
        </div>
      </div>
    </FormQuestion>
  );
}

export default TwelveQuest;
