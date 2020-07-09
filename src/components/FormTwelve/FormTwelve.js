import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import TwelveQuest from "../TwelveQuest";
import { look10pngImage } from "../images";
import styled from "styled-components";

const Button = styled.div`
  margin-top: -120px;
`;

class FormTwelve extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      slideIndex: 0,
      updateCount: 0,
      showingResult: true,
    };
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  componentDidMount() {
    if (this.state.slideIndex === 12) {
      this.setState(this.state.showingResult === false);
    }
  }

  render() {
    const settings = {
      arrows: false,
      dots: false,
      fade: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      afterChange: () =>
        this.setState((state) => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => this.setState({ slideIndex: next }),
    };
    return (
      <section className="container">
        <form>
          <input
            onChange={(e) => this.slider.slickGoTo(e.target.value)}
            value={this.state.slideIndex}
            className="form-control"
            type="range"
            min={0}
            max={11}
          />
          <Slider {...settings} ref={(c) => (this.slider = c)}>
            <TwelveQuest
              number="1."
              question="Dalam mengerjakan sesuatu, Anda merupakan seseorang yang lebih
                  sering"
              choiceA="lakukan dulu, kalau ada masalah diselesaikan sambil
        jalan, supaya cepat"
              choiceB=" Direncanakan baik-baik dule perlahan-lahan, daripada
        nanti harus memperbaiki banyak hal"
            />
            <TwelveQuest
              number="2."
              question="pertanyaan selanjutnya nomor 2 dan seterusnya"
              choiceA="ini adalah opsi untuk pilihan jawaban pertama"
              choiceB="ini adalah opsi untuk pilihan jawaban kedua"
            />
            <TwelveQuest
              number="3."
              question="pertanyaan selanjutnya nomor 3 dan seterusnya"
              choiceA="ini adalah opsi untuk pilihan jawaban pertama"
              choiceB="ini adalah opsi untuk pilihan jawaban kedua"
            />
            <TwelveQuest
              number="4."
              question="pertanyaan selanjutnya nomor 4 dan seterusnya"
              choiceA="ini adalah opsi untuk pilihan jawaban pertama"
              choiceB="ini adalah opsi untuk pilihan jawaban kedua"
            />
            <TwelveQuest
              number="5."
              question="pertanyaan selanjutnya nomor 5 dan seterusnya"
              choiceA="ini adalah opsi untuk pilihan jawaban pertama"
              choiceB="ini adalah opsi untuk pilihan jawaban kedua"
            />
            <TwelveQuest
              number="6."
              question="pertanyaan selanjutnya nomor 6 dan seterusnya"
              choiceA="ini adalah opsi untuk pilihan jawaban pertama"
              choiceB="ini adalah opsi untuk pilihan jawaban kedua"
            />
            <TwelveQuest
              number="7."
              question="pertanyaan selanjutnya nomor 7 dan seterusnya"
              choiceA="ini adalah opsi untuk pilihan jawaban pertama"
              choiceB="ini adalah opsi untuk pilihan jawaban kedua"
            />
            <TwelveQuest
              number="8."
              question="pertanyaan selanjutnya nomor 8 dan seterusnya"
              choiceA="ini adalah opsi untuk pilihan jawaban pertama"
              choiceB="ini adalah opsi untuk pilihan jawaban kedua"
            />
            <TwelveQuest
              number="9."
              question="pertanyaan selanjutnya nomor 9 dan seterusnya"
              choiceA="ini adalah opsi untuk pilihan jawaban pertama"
              choiceB="ini adalah opsi untuk pilihan jawaban kedua"
            />
            <TwelveQuest
              number="10."
              question="pertanyaan selanjutnya nomor 10 dan seterusnya"
              choiceA="ini adalah opsi untuk pilihan jawaban pertama"
              choiceB="ini adalah opsi untuk pilihan jawaban kedua"
            />
            <TwelveQuest
              number="11."
              question="pertanyaan selanjutnya nomor 11 dan seterusnya"
              choiceA="ini adalah opsi untuk pilihan jawaban pertama"
              choiceB="ini adalah opsi untuk pilihan jawaban kedua"
            />
            <TwelveQuest
              number="12."
              question="pertanyaan selanjutnya nomor 12 dan seterusnya"
              choiceA="ini adalah opsi untuk pilihan jawaban pertama"
              choiceB="ini adalah opsi untuk pilihan jawaban kedua"
            />
          </Slider>
          <Button>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <button
                  className="btn btn-lg btn-rounded bg-purple"
                  onClick={this.previous}
                  type="button"
                >
                  Previous
                </button>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <button
                  className="btn btn-lg btn-rounded bg-purple float-right"
                  onClick={this.next}
                  type="button"
                >
                  Next
                </button>
              </div>
            </div>
          </Button>
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className={this.state.showingResult ? "fade" : "showing"}>
                <div className="container">
                  <div className="content">
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-12 col-sm-12">
                        <img
                          src={look10pngImage.url}
                          alt={look10pngImage.alt}
                        />
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 my-auto mx-auto">
                        <Link
                          className="btn btn-lg btn-round bg-purple"
                          to="twelve-questions-result"
                        >
                          lihat hasilnya
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default FormTwelve;
