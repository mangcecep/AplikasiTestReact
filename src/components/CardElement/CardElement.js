import React from "react";
import styled from "styled-components";

const Card = styled.div`
  @media screen and (max-width: 420px) {
    .card {
      width: 100px;
      height: 80px;
    }
    img {
      margin-top: 50px;
      magin-right: 100px;
      width: 20%;
      heigth: auto;
      position: absolute;
    }
    p {
      font-size: 12px;
      margin-left: 115px;
    }
  }
`;

function CardElement(props) {
  const { title, text, src, alt, subtitle } = props;
  return (
    <Card className="card bg-light">
      <div className="row">
        <div className="col-md-2 col-sm-2">
          <p>{subtitle}</p>
          <img
            src={src}
            alt={alt}
            width="70%"
            height="auto"
            className="image py-4 mx-4"
          />
        </div>
        <div className="col-md-10 col-sm-10">
          <div className="text py-4">
            <p>
              <strong>{title}</strong>
            </p>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardElement;
