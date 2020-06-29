import React from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { containerCarouselBackground } from "../images";

const FormQuestion = styled.section`
  ol.number {
    padding-top: 40px;
    padding-top: 40px;

    list-style-type: number;
    font-size: 32px;
  }
  margin-top: 50px;
  margin-bottom: 200px;
  img {
    position: absolute;
    z-index: -1;
  }
  p.labelCheckbox {
    font-size: 25px;
  }
`;

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function TwelveQuest() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {list.map((_, index) => (
        <FormQuestion className="container" key={index}>
          <img
            src={containerCarouselBackground.url}
            alt={containerCarouselBackground.alt}
          />
          <div className="row clearfix">
            <div className="col-lg-12 col-12 col-sm-12">
              <form
                className="form-horizontal mt-4 ml-5"
                style={{ width: "100%" }}
              >
                <ol className="number">
                  <li>
                    Dalam mengerjakan sesuatu, Anda merupakan seseorang yang
                    lebih sering
                  </li>
                </ol>
                <div className="form-group">
                  <div className="checkbox">
                    <input id="checkbox" type="checkbox" />
                    <label htmlFor="checkbox">
                      <p className="labelCheckbox">
                        lakukan dulu, kalau ada masalah diselesaikan sambil
                        jalan, supaya cepat{" "}
                      </p>
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="checkbox">
                    <input id="checkbox2" type="checkbox" />
                    <label htmlFor="checkbox2">
                      <p className="labelCheckbox">
                        Direncanakan baik-baik dule perlahan-lahan, daripada
                        nanti harus memperbaiki banyak hal
                      </p>
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </FormQuestion>
      ))}
    </Slider>
  );
}

export default TwelveQuest;
