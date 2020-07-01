import React from "react";
import Navbar from "../../components/Navbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  containerCarouselBackground,
  look10pngImage,
} from "../../components/images";
import Footer from "../../components/Footer";

const FormQuest = styled.section`
  img {
    position: absolute;
    z-index: -1;
  }
`;

function FourtyEightQuestions() {
  const [state, setState] = React.useState({ slideIndex: 0, updateCount: 0 });
  const settings = {
    arrows: true,
    dots: false,
    fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <div className="container">
      <Navbar loginProp={{ isLogin: true }} />
      <section className="container">
        <div className="content">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h3 className="title text-center my-auto mt-5 mb-5">
                Mohon kerjakan test dibawah ini dengan memilih <br />
                jawaban sesuai dengan petunjuk yang diberikan <br />
                pada tiap nomor. Baca baik-baik dan pastikan Anda <br />
                mengerti jawaban apa yang akan Anda pilih. Tiap <br />
                jawaban Anda, menentukan ketepatan hasil yang akan <br />
                berguna bagi Anda sendiri.
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="container mt-5">
        <div className="content">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <form>
                <input
                  className="form-control"
                  type="range"
                  id="points"
                  name="points"
                  min="0"
                  max="48"
                />
                <fieldset>
                  <Slider {...settings}></Slider>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="content">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img src={look10pngImage.url} alt={look10pngImage.alt} />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 my-auto mx-auto">
              <Link
                className="btn btn-lg btn-round bg-purple"
                to="/fourty-eight-result"
              >
                lihat hasilnya
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FourtyEightQuestions;
