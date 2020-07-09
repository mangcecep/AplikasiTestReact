import React from "react";
import TwelveQuest from "../../components/TwelveQuest";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Questions = () => {
  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => (
      <div key={index}>
        <TwelveQuest
          number={num}
          question="Pertanyaan"
          choiceA="pilihan A"
          choiceB="pilihan B"
        />
      </div>
    ));

  return (
    <>
      <Slider
        dots={false}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={false}
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>
    </>
  );
};

export default Questions;
