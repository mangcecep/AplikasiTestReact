import React from "react";

function CardElement(props) {
  const { title, text, src, alt, subtitle } = props;
  return (
    <div className="card bg-light">
      <div className="row clearfix">
        <div className="col-lg-2 col-md-2 col-sm-2">
          <p>{subtitle}</p>
          <img
            src={src}
            alt={alt}
            width="70%"
            height="auto"
            className="py-4 mx-4"
          />
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10">
          <div className="text py-4">
            <p>
              <strong>{title}</strong>
            </p>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardElement;
