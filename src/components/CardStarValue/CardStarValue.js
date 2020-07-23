import React from "react";
import { starImage } from "../images";

function CardStarValue(props) {
  const { title, subtitle, starValue } = props;
  let starts = [];
  let value = starValue;
  for (let i = 0; i < value; i++) {
    starts.push(
      <img
        key={i}
        //inner loop to create columns
        src={`${starImage.url}`}
        alt={`${starImage.url}`}
        width="15%"
        height="auto"
        className="my-auto py-4 px-1"
      />
    );
  }
  return (
    <div className="card bg-white text-dark">
      <div className="row clearfix">
        <div className="col-lg-2 col-md-2 col-sm-2">
          <p className="text-center my-auto py-4">
            <strong>{title}</strong>
          </p>
        </div>
        <div className="col-lg-7 col-md-7 col-sm-7">
          <p className="my-auto py-4">
            <strong>{subtitle}</strong>
          </p>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">{starts}</div>
      </div>
    </div>
  );
}

export default CardStarValue;
