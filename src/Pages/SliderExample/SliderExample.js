import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import SlidesShowOne from "./SlidesShowOne";
import TwelveQuest from "../../components/TwelveQuest";

const SliderExample = () => {
  const Settings = {
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
    <div className="jumbotron">
      {/* <SlidesShowOne /> */}
      <section>
        <form>
          <fieldset>
            <Slider {...Settings}>
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
        </form>
      </section>
    </div>
  );
};

export default SliderExample;
