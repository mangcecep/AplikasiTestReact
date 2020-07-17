import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { look10pngImage, prevImage, nextImage } from "../../components/images";
import { Link } from "react-router-dom";
import FourtyEightQuest from "../FourtyEightQuest.js";

const Button = styled.div`
  position: relative;
  p:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 420px) {
    font-size: 14px;
    p.align-right {
      margin-top: -35px;
    }
  }
`;

const FormFont = styled.section`
  @font-face {
    font-family: "Poppins Regular";
    src: local("Poppins Regular"),
      url(../../assets/fonts/Poppins-Regular.ttf) format("truetype");
  }
  font-family: "Poppins Regular";
  font-size: 25px;
`;

class FormFourtyEight extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      value: "",
      slideIndex: 0,
      updateCount: 0,
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      zIndex: -1,
      arrows: true,
      dots: false,
      fade: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      adaptiveHeight: true,
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    };
    return (
      <FormFont className="container mx-center">
        <div className="content-lg">
          <input
            onChange={(e) => this.slider.slickGoTo(e.target.value)}
            value={this.state.slideIndex}
            className="form-control"
            type="range"
            min={0}
            max={48}
          />
          <form>
            <Slider {...settings} ref={(c) => (this.slider = c)}>
              <div className="card">
                <FourtyEightQuest
                  number="1."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal1"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="2."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal2"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="3."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal3"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="4."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal4"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="5."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal5"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="6."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal6"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="7."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal7"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="8."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal8"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="9."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal9"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="10."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal10"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="11."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal11"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="12."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal12"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="13."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal13"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="14."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal14"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="15."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal15"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="16."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal16"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="17."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal17"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="18."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal18"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="19."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal19"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="20."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal20"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="21."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal21"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="22."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal22"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="23."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal23"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="24."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal24"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="25."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal25"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="26."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal26"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="27."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal27"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="28."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal28"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="29."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal29"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="30."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal30"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="31."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal31"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="32."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal32"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="33."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal33"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="34."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal34"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="35."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal35"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="36."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal36"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="37."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal37"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="38."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal38"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="39."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal39"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="40."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal40"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="41."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal41"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="42."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal42"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="43."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal43"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="44."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal44"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="45."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal45"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="46."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal46"
                />
              </div>
              <div className="card">
                <FourtyEightQuest
                  number="47."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal47"
                />
              </div>

              <div className="card">
                <FourtyEightQuest
                  number="48."
                  question="yang merupakan prioritas bagi Anda adalah memastikan"
                  name="soal48"
                />
                <div className="content">
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
                    <div className="col-lg-6 col-md-6 col-sm-6 mx-auto my-auto">
                      <Link
                        className="btn btn-lg btn-round bg-purple"
                        to="/twelve-questions-result"
                      >
                        lihat hasilnya
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <Button>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <p className="prev" onClick={this.previous}>
                    <span className="mr-2">
                      <img
                        src={prevImage.url}
                        alt={prevImage.alt}
                        width="10%"
                        height="auto"
                      />
                    </span>
                    <strong>Kembali</strong>
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <p className="align-right" onClick={this.next}>
                    <strong>Selanjutnya</strong>
                    <span className="ml-2">
                      <img
                        src={nextImage.url}
                        alt={nextImage.alt}
                        width="10%"
                        height="auto"
                      />
                    </span>
                  </p>
                </div>
              </div>
            </Button>
          </form>
        </div>
      </FormFont>
    );
  }
}

export default FormFourtyEight;
