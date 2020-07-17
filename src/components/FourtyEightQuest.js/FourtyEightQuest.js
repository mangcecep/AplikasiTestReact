import React from "react";
import styled from "styled-components";
import { containerCarouselBackground } from "../images";

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
  img {
    position: absolute;
    z-index: -1;
  }
    font-size: 19px;
    .radiobtn {
      position: relative;
      display: block;
    }

    section::before,
    section::after {
      content: "";
      display: inline;
      border-radius: 100%;
      position: absolute;
    }
    
    .container {
      --first-color: #e91e63;
      --second-color: #bf00ff;
    }
    
    label {
      display: inline-flex;
      justify-content: start;
      align-items: center;
      flex-wrap: nowrap;
      margin: 12px 0;
      cursor: pointer;
      position: relative;
    }
    
    input {
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
    
    .circle {
      width: 60px;
      height: 60px;
      border: 1px solid var(--second-color);
      border-radius: 100%;
      margin-right: 25px;
      position: relative;
    }

    .circleNine {
      width: 60px;
      height: 60px;
      border: 1px solid var(--second-color);
      border-radius: 100%;
      margin-left: 25px;
      position: relative;
    }
    
    .circleTwo {
      width: 50px;
      height: 50px;
      border: 1px solid var(--second-color);
      border-radius: 100%;
      margin-right: 25px;
      position: relative;
    }

    .circleEight {
      width: 50px;
      height: 50px;
      border: 1px solid var(--second-color);
      border-radius: 100%;
      margin-left: 25px;
      position: relative;
    }
    
    .circleThree {
      width: 40px;
      height: 40px;
      border: 1px solid var(--second-color);
      border-radius: 100%;
      margin-right: 25px;
      position: relative;
    }

    .circleSeven {
      width: 40px;
      height: 40px;
      border: 1px solid var(--second-color);
      border-radius: 100%;
      margin-left: 25px;
      position: relative;
    }
    
    .circleFour {
      width: 30px;
      height: 30px;
      border: 1px solid var(--second-color);
      border-radius: 100%;
      margin-right: 25px;
      position: relative;
    }

    .circleSix {
      width: 30px;
      height: 30px;
      border: 1px solid var(--second-color);
      border-radius: 100%;
      margin-left: 10px;
      position: relative;
    }
    
    .circleFive {
      width: 25px;
      height: 25px;
      border: 1px solid var(--second-color);
      border-radius: 100%;
      margin-right: 10px;
      position: relative;
    }
    
    .circle::before,
    .circle::after,
    .circleTwo::before,
    .circleTwo::after,
    .circleThree::before,
    .circleThree::after,
    .circleFour::before,
    .circleFour::after,
    .circleFive::before,
    .circleFive::after,
    .circleSix::before,
    .circleSix::after,
    .circleSeven::before,
    .circleSeven::after,
    .circleEight::before,
    .circleEight::after,
    .circleNine::before,
    .circleNine::after {
      content: "";
      display: block;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      position: absolute;
      transform: scale(0);
      transform-origin: center center;
    }
    
    .circle:before,
    .circleTwo:before,
    .circleThree:before,
    .circleFour:before,
    .circleFive:before,
    .circleSix:before,
    .circleSeven:before,
    .circleEight:before,
    .circleNine:before {
      background: var(--second-color);
      opacity: 0;
      transition: 0.3s;
    }
    
    .circle::after,
    .circleTwo::after,
    .circleThree::after,
    .circleFour::after,
    .circleFive::after,
    .circleSix::after,
    .circleSeven:after,
    .circleEight:after,
    .circleNine:after {
      background: var(--first-color);
      opacity: 0.4;
      transition: 0.6s;
    }
    
    .text {
      color: var(--second-color);
      font-weight: bold;
    }
    
    input:checked + .circle::before,
    input:checked + .circleTwo::before,
    input:checked + .circleThree::before,
    input:checked + .circleFour::before,
    input:checked + .circleFive::before,
    input:checked + .circleSix::before,
    input:checked + .circleSeven::before,
    input:checked + .circleEight::before,
    input:checked + .circleNine::before {
      opacity: 1;
      transform: scale(1);
    }
    
    input:hover + .circle,
    input:focus + .circle,
    input:hover + .circleTwo,
    input:focus + .circleTwo,
    input:hover + .circleThree,
    input:focus + .circleThree,
    input:hover + .circleFour,
    input:focus + .circleFour,
    input:hover + .circleFive,
    input:focus + .circleFive,
    input:hover + .circleSix,
    input:focus + .circleSix,
    input:hover + .circleSeven,
    input:focus + .circleSeven,
    input:hover + .circleEight,
    input:focus + .circleEight {
      border: 1px solid var(--first-color);
    }
    
    input:hover + .circle:before,
    input:focus + .circle:before,
    input:hover + .circleTwo:before,
    input:focus + .circleTwo:before,
    input:hover + .circleThree:before,
    input:focus + .circleThree:before,
    input:hover + .circleFour:before,
    input:focus + .circleFour:before,
    input:hover + .circleFive:before,
    input:focus + .circleFive:before,
    input:hover + .circleSix:before,
    input:focus + .circleSix:before,
    input:hover + .circleSeven:before,
    input:focus + .circleSeven:before,
    input:hover + .circleEight:before,
    input:focus + .circleEight:before {
      background: var(--first-color);
    }
    
    input:hover ~ .text {
      color: var(--first-color);
    }
    
    input:focus + .circle::after,
    input:active + .circle::after,
    input:focus + .circleTwo::after,
    input:active + .circleTwo::after,
    input:focus + .circleThree::after,
    input:active + .circleThree::after,
    input:focus + .circleFour::after,
    input:active + .circleFour::after,
    input:focus + .circleFive::after,
    input:active + .circleFive::after,
    input:focus + .circleSix::after,
    input:active + .circleSix::after,
    input:focus + .circleSeven::after,
    input:active + .circleSeven::after,
    input:focus + .circleEight::after,
    input:active + .circleEight::after {
      opacity: 0.1;
      transform: scale(2);
    }
    @media screen and (max-width: 420px) {
      background-image: url("${containerCarouselBackground.url}");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      p.questions {
        font-size: 14px;
        margin-left: 20px;
        padding-left: 10px;
      }
      p.text-center {
        font-size: 10px;
        float: left;
      }
      p.text-right{
        font-size: 10px;
        margin-top: -50px;
      }

      .circle {
        width: 30px;
        height: 30px;
        border: 1px solid var(--second-color);
        border-radius: 100%;
        margin-right: 10px;
        position: relative;
      }
  
      .circleNine {
        width: 30px;
        height: 30px;
        border: 1px solid var(--second-color);
        border-radius: 100%;
        margin-left: 10px;
        position: relative;
      }
      
      .circleTwo {
        width: 25px;
        height: 25px;
        border: 1px solid var(--second-color);
        border-radius: 100%;
        margin-right: 10px;
        position: relative;
      }
  
      .circleEight {
        width: 25px;
        height: 25px;
        border: 1px solid var(--second-color);
        border-radius: 100%;
        margin-left: 10px;
        position: relative;
      }
      
      .circleThree {
        width: 20px;
        height: 20px;
        border: 1px solid var(--second-color);
        border-radius: 100%;
        margin-right: 10px;
        position: relative;
      }
  
      .circleSeven {
        width: 20px;
        height: 20px;
        border: 1px solid var(--second-color);
        border-radius: 100%;
        margin-left: 10px;
        position: relative;
      }
      
      .circleFour {
        width: 15px;
        height: 15px;
        border: 1px solid var(--second-color);
        border-radius: 100%;
        margin-right: 10px;
        position: relative;
      }
  
      .circleSix {
        width: 15px;
        height: 15px;
        border: 1px solid var(--second-color);
        border-radius: 100%;
        margin-left: 5px;
        position: relative;
      }
      
      .circleFive {
        width: 15px;
        height: 15px;
        border: 1px solid var(--second-color);
        border-radius: 100%;
        margin-right: 5px;
        position: relative;
      }
    }     
`;

const handleChange = (e) => {
  console.log({ value: e.target.value });
};

function FourtyEightQuest(props) {
  const { number, question, name } = props;
  return (
    <FormQuestion>
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <p className="questions">
            {number}&nbsp;{question}
          </p>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5 ml-4 pl-4">
          <p className="text-center">
            Semua prosedur berjalan
            <br /> dengan baik
          </p>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5 mr-4 pl-4">
          <p className="text-right">
            Kerjasama dengan mitra
            <br /> terjaga dengan baik
          </p>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="align-center">
            <section className="container">
              <label>
                <input
                  type="radio"
                  name={name}
                  value="1"
                  onChange={handleChange}
                />
                <span className="circle"></span>
              </label>
              <label>
                <input
                  type="radio"
                  name={name}
                  value="2"
                  onChange={handleChange}
                />
                <span className="circleTwo"></span>
              </label>
              <label>
                <input
                  type="radio"
                  name={name}
                  value="3"
                  onChange={handleChange}
                />
                <span className="circleThree"></span>
              </label>
              <label>
                <input
                  type="radio"
                  name={name}
                  value="4"
                  onChange={handleChange}
                />
                <span className="circleFour"></span>
              </label>
              <label>
                <input
                  type="radio"
                  name={name}
                  value="5"
                  onChange={handleChange}
                />
                <span className="circleFive"></span>
              </label>
              <label>
                <input
                  type="radio"
                  name={name}
                  value="6"
                  onChange={handleChange}
                />
                <span className="circleSix"></span>
              </label>
              <label>
                <input
                  type="radio"
                  name={name}
                  value="7"
                  onChange={handleChange}
                />
                <span className="circleSeven"></span>
              </label>
              <label>
                <input
                  type="radio"
                  name={name}
                  value="8"
                  onChange={handleChange}
                />
                <span className="circleEight"></span>
              </label>
              <label>
                <input
                  type="radio"
                  name={name}
                  value="9"
                  onChange={handleChange}
                />
                <span className="circleNine"></span>
              </label>
            </section>
          </div>
        </div>
      </div>
    </FormQuestion>
  );
}

export default FourtyEightQuest;
