import React from "react";
import "./RatingApp.css";

function Option() {
  return (
    <section className="container">
      <label>
        <input
          type="radio"
          name="radio"
          value="1"
          onChange={(e) => e.target.value}
        />
        <span className="circle"></span>
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          value="2"
          onChange={(e) => e.target.value}
        />
        <span className="circleTwo"></span>
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          value="3"
          onChange={(e) => e.target.value}
        />
        <span className="circleThree"></span>
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          value="4"
          onChange={(e) => e.target.value}
        />
        <span className="circleFour"></span>
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          value="5"
          onChange={(e) => e.target.value}
        />
        <span className="circleFive"></span>
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          value="6"
          onChange={(e) => e.target.value}
        />
        <span className="circleSix"></span>
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          value="7"
          onChange={(e) => e.target.value}
        />
        <span className="circleSeven"></span>
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          value="8"
          onChange={(e) => e.target.value}
        />
        <span className="circleEight"></span>
      </label>
      <label>
        <input
          type="radio"
          name="radio"
          value="9"
          onChange={(e) => e.target.value}
        />
        <span className="circleNine"></span>
      </label>
    </section>
  );
}

export default Option;
