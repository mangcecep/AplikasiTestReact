import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TwelveQuest from "../TwelveQuest";
import styled from "styled-components";
import { look10pngImage, prevImage, nextImage } from "../images";
import { Link } from "react-router-dom";

const Button = styled.div`
  position: relative;
  p:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 420px) {
    p.align-right {
      margin-top: -40px;
      size: cover;
    }
  }
`;

class FormTwelve extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      slideIndex: 0,
      updateCount: 0,
    };
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
      arrows: false,
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
      <section className="container mx-center mt-5 pt-5">
        <div className="content-lg">
          <input
            onChange={(e) => this.slider.slickGoTo(e.target.value)}
            value={this.state.slideIndex}
            className="form-control"
            type="range"
            min={0}
            max={11}
          />
          <form>
            <Slider {...settings} ref={(c) => (this.slider = c)}>
              <div className="card">
                <TwelveQuest
                  number="1."
                  question="Dalam mengerjakan sesuatu, Anda merupakan seseorang yang lebih
            sering"
                  choiceA="Lakukan dulu, kalau ada masalah diselesaikan sambil
            jalan, supaya cepat"
                  choiceB=" Direncanakan baik-baik dule perlahan-lahan, daripada
            nanti harus memperbaiki banyak hal"
                  name="soal1"
                  idA="idOpsiASoal1"
                  idB="idOpsiBSoal1"
                />
              </div>
              <div className="card">
                <TwelveQuest
                  number="2."
                  question="Dalam mengerjakan sesuatu, Anda merupakan seseorang yang lebih
            sering"
                  choiceA="ini adalah opsi untuk pilihan jawaban pertama soal nomor 2"
                  choiceB="ini adalah opsi untuk pilihan jawaban kedua soal nomor 2"
                  name="soal2"
                  idA="idOpsiASoal2"
                  idB="idOpsiBSoal2"
                />
              </div>
              <div className="card">
                <TwelveQuest
                  number="3."
                  question="Dalam mengerjakan sesuatu, Anda merupakan seseorang yang lebih
            sering"
                  choiceA="ini adalah opsi untuk pilihan jawaban pertama soal nomor 3"
                  choiceB="ini adalah opsi untuk pilihan jawaban kedua soal nomor 3"
                  name="soal3"
                  idA="idOpsiASoal3"
                  idB="idOpsiBSoal3"
                />
              </div>
              <div className="card">
                <TwelveQuest
                  number="4."
                  question="Dalam mengerjakan sesuatu, Anda merupakan seseorang yang lebih
            sering"
                  choiceA="ini adalah opsi untuk pilihan jawaban pertama soal nomor 4"
                  choiceB="ini adalah opsi untuk pilihan jawaban kedua soal nomor 4"
                  name="soal4"
                  idA="idOpsiASoal4"
                  idB="idOpsiBSoal4"
                />
              </div>
              <div className="card">
                <TwelveQuest
                  number="5."
                  question="Dalam mengerjakan sesuatu, Anda merupakan seseorang yang lebih
            sering"
                  choiceA="ini adalah opsi untuk pilihan jawaban pertama soal nomor 5"
                  choiceB="ini adalah opsi untuk pilihan jawaban kedua soal nomor 5"
                  name="soal5"
                  idA="idOpsiASoal5"
                  idB="idOpsiBSoal5"
                />
              </div>
              <div className="card">
                <TwelveQuest
                  number="6."
                  question="Dalam mengerjakan sesuatu, Anda merupakan seseorang yang lebih
            sering"
                  choiceA="ini adalah opsi untuk pilihan jawaban pertama soal nomor 6"
                  choiceB="ini adalah opsi untuk pilihan jawaban kedua soal nomor 6"
                  name="soal6"
                  idA="idOpsiASoal6"
                  idB="idOpsiBSoal6"
                />
              </div>
              <div className="card">
                <TwelveQuest
                  number="7."
                  question="Dalam mengerjakan sesuatu, Anda merupakan seseorang yang lebih
            sering"
                  choiceA="ini adalah opsi untuk pilihan jawaban pertama soal nomor 7"
                  choiceB="ini adalah opsi untuk pilihan jawaban kedua soal nomor 7"
                  name="soal7"
                  idA="idOpsiASoal7"
                  idB="idOpsiBSoal7"
                />
              </div>
              <div className="card">
                <TwelveQuest
                  number="8."
                  question="Dalam mengerjakan sesuatu, Anda merupakan seseorang yang lebih
            sering"
                  choiceA="ini adalah opsi untuk pilihan jawaban pertama soal nomor 8"
                  choiceB="ini adalah opsi untuk pilihan jawaban kedua soal nomor 8"
                  name="soal8"
                  idA="idOpsiASoal8"
                  idB="idOpsiBSoal8"
                />
              </div>
              <div className="card">
                <TwelveQuest
                  number="9."
                  question="Dalam mengerjakan sesuatu, Anda merupakan seseorang yang lebih
            sering"
                  choiceA="ini adalah opsi untuk pilihan jawaban pertama soal nomor 9"
                  choiceB="ini adalah opsi untuk pilihan jawaban kedua soal nomor 9"
                  name="soal9"
                  idA="idOpsiASoal9"
                  idB="idOpsiBSoal9"
                />
              </div>
              <div className="card">
                <TwelveQuest
                  number="10."
                  question="Dalam mengerjakan sesuatu, Anda merupakan seseorang yang lebih
            sering"
                  choiceA="ini adalah opsi untuk pilihan jawaban pertama soal nomor 10"
                  choiceB="ini adalah opsi untuk pilihan jawaban kedua soal nomor 10"
                  name="soal10"
                  idA="idOpsiASoal10"
                  idB="idOpsiBSoal10"
                />
              </div>
              <div className="card">
                <TwelveQuest
                  number="11."
                  question="Dalam mengerjakan sesuatu, Anda merupakan seseorang yang lebih
            sering"
                  choiceA="ini adalah opsi untuk pilihan jawaban pertama soal nomor 11"
                  choiceB="ini adalah opsi untuk pilihan jawaban kedua soal nomor 11"
                  name="soal11"
                  idA="idOpsiASoal11"
                  idB="idOpsiBSoal11"
                />
              </div>
              <div className="card">
                <TwelveQuest
                  number="12."
                  question="Dalam mengerjakan sesuatu, Anda merupakan seseorang yang lebih
            sering"
                  choiceA="ini adalah opsi untuk pilihan jawaban pertama soal nomor 12"
                  choiceB="ini adalah opsi untuk pilihan jawaban kedua soal nomor 12"
                  name="soal12"
                  idA="idOpsiASoal12"
                  idB="idOpsiBSoal12"
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
      </section>
    );
  }
}

export default FormTwelve;
