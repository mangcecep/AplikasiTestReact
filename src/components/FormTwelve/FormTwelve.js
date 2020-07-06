import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import TwelveQuest from "../TwelveQuest";
import { look10pngImage } from "../images";

function FormTwelve() {
  // const [settings, setSettings] = React.useState({});
  // const [state, setState] = React.useState({ slideIndex: 0, updateCount: 0 });
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
    <section>
      <form>
        <p>Total updates: </p>
        <input
          // onChange={(e) => this.slider.slickGoTo(e.target.value)}
          // value={state.slideIndex}
          className="form-control mt-4"
          type="range"
          id="points"
          name="points"
          // min={state.slideIndex}
          max="3"
        />
        <fieldset>
          <Slider {...settings}>
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
          </Slider>
        </fieldset>

        <div className="container">
          <div className="content">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img src={look10pngImage.url} alt={look10pngImage.alt} />
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
      </form>
    </section>
  );
}

export default FormTwelve;
