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
      --warnaPertama: #673AE7;
      --warnaKedua: #8661EF;
      --warnaKetiga: #A58AF3;
      --warnaKeempat: #979797;
      --warnaKelima: #F7B75C;
      --warnaKeenam: #F4A22D;
      --warnaKetujuh: #CE7E0B;
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
      width: 70px;
      height: 70px;
      border: 1px solid var(--warnaPertama);
      border-radius: 100%;
      margin-right: 40px;
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
      width: 60px;
      height: 60px;
      border: 1px solid var(--warnaKedua);
      border-radius: 100%;
      margin-right: 40px;
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
      width: 50px;
      height: 50px;
      border: 1px solid var(--warnaKetiga);
      border-radius: 100%;
      margin-right: 40px;
      position: relative;
    }

    .circleSeven {
       width: 70px;
      height: 70px;
      border: 1px solid var(--warnaKetujuh);
      border-radius: 100%;
      margin-left: 40px;
      position: relative;
    }
    
    .circleFour {
      width: 40px;
      height: 40px;
      border: 1px solid var(--warnaKeempat);
      border-radius: 100%;
      margin-right: 40px;
      position: relative;
    }

    .circleSix {
      width: 60px;
      height: 60px;
      border: 1px solid var(--warnaKeenam);
      border-radius: 100%;
      margin-left: 40px;
      position: relative;
    }
    
    .circleFive {
      width: 50px;
      height: 50px;
      border: 1px solid var(--warnaKelima);
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
    .circle::after {
      background: var(--warnaPertama);
      opacity: 0;
      transition: 0.3s;
    }

    .circleTwo:before,
    .circleTwo::after {
      background: var(--warnaKedua);
      opacity: 0;
      transition: 0.3s;
    }

    .circleThree:before,
    .circleThree::after {
      background: var(--warnaKetiga);
      opacity: 0;
      transition: 0.3s;
    }

    .circleFive:before,
    .circleFive::after {
      background: var(--warnaKelima);
      opacity: 0;
      transition: 0.3s;
    }

    .circleSix:before,
    .circleSix::after {
      background: var(--warnaKeenam);
      opacity: 0;
      transition: 0.3s;
    }

    .circleSeven:before,
    .circleSeven:after {
      background: var(--warnaKetujuh);
      opacity: 0;
      transition: 0.3s;
    }
    
    .circleFour:before,
    .circleFour::after {
      background: var(--warnaKeempat);
      opacity: 0;
      transition: 0.3s;
    }

    .circleEight:before,
    .circleNine:before {
      background: var(--second-color);
      opacity: 0;
      transition: 0.3s;
    }
    
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
    input:focus + .circle {
      border: 1px solid var(--warnaPertama);
    }

    input:hover + .circleTwo,
    input:focus + .circleTwo {
      border: 1px solid var(--warnaKedua);
    }
    
    input:hover + .circleThree,
    input:focus + .circleThree {
      border: 1px solid var(--warnaKetiga);
    }

    input:hover + .circleFour,
    input:focus + .circleFour {
      border: 1px solid var(--warnaKeempat);
    }

    input:hover + .circleFive,
    input:focus + .circleFive {
      border: 1px solid var(--warnaKelima);
    }

    input:hover + .circleSix,
    input:focus + .circleSix {
      border: 1px solid var(--warnaKeenam);
    }

    input:hover + .circleSeven,
    input:focus + .circleSeven {
      border: 1px solid var(--warnaKetujuh);
    }    
    
    input:hover + .circleEight,
    input:focus + .circleEight {
      border: 1px solid var(--first-color);
    }

    input:hover + .circle:before,
    input:focus + .circle:before {
      background: var(--warnaPertama);
    }

    input:hover + .circleTwo:before,
    input:focus + .circleTwo:before {
      background: var(--warnaKedua);
    }
    
    input:hover + .circleThree:before,
    input:focus + .circleThree:before {
      background: var(--warnaKetiga);
    }

    input:hover + .circleFour:before,
    input:focus + .circleFour:before {
      background: var(--warnaKeempat);
    }
    
    input:hover + .circleFive:before,
    input:focus + .circleFive:before {
      background: var(--warnaKelima);
    }

    input:hover + .circleSix:before,
    input:focus + .circleSix:before {
      background: var(--warnaKeenam);
    }
    
    input:hover + .circleSeven:before,
    input:focus + .circleSeven:before {
      background: var(--warnaKetujuh);
    }
    
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
        border: 1px solid var(--warnaPertama);
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
        border: 1px solid var(--warnaKedua);
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
        border: 1px solid var(--warnaKetiga);
        border-radius: 100%;
        margin-right: 10px;
        position: relative;
      }
  
      .circleSeven {
        width: 30px;
        height: 30px;
        border: 1px solid var(--warnaKetujuh);
        border-radius: 100%;
        margin-left: 10px;
        position: relative;
      }
      
      .circleFour {
        width: 18px;
        height: 18px;
        border: 1px solid var(--warnaKeempat);
        border-radius: 100%;
        margin-right: 10px;
        position: relative;
      }
  
      .circleSix {
        width: 25px;
        height: 25px;
        border: 1px solid var(--warnaKeenam);
        border-radius: 100%;
        margin-left: 5px;
        position: relative;
      }
      
      .circleFive {
        width: 20px;
        height: 20px;
        border: 1px solid var(--warnaKelima);
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
            </section>
          </div>
        </div>
      </div>
    </FormQuestion>
  );
}

export default FourtyEightQuest;
