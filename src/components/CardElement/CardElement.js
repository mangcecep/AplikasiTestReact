import React from "react";
import styled from "styled-components";

const Card = styled.div`
position: flex;
margin-top:10px;
margin-bottom: 1px;
border-radius: 8px;
.text {
  margin-top: 10px;
  margin-bottom: 10px;
}
p.title {
  @font-face {
    font-family: "Poppins ExtraBold";
    src: local("Poppins ExtraBold"),
      url(../../assets/fonts/Poppins-ExtraBold.ttf) format("truetype");
  }
  font-family: "Poppins ExtraBold";
}
background-color: white;
.image {
  margin-left: 51px;
  margin-top: 15px;
  position: relative;
}
border: 1px solid #979797;
  @media screen and (max-width: 420px) {
      display: flex;
      flex-wrap: nowrap;
      .image {
        width: 20%;
        margin-top: 30px;
        margin-left: 20px;
        position: absolute;
      }
      .text, p.title {
        font-size: 13px;
        margin-left: 50px;
      }
      .content {
        display: flex;
        font-size: 10px;
        margin-left: 50px;
      }
  }
`;

const Circle = styled.div`
  margin-left: 51px;
  margin-top: 15px;
  position: relative;
  width: 100px;
  height: 100px;
  background: #40E0D0;
  border-radius: 100%;
  @media screen and (max-width: 420px) {
      width: 70px;
      height: 70px;
      margin-top: 30px;
      margin-left: 20px;
      position: absolute;
  }
`;

function CardElement(props) {
  const { title, text, src, alt, subtitle, displayCircle } = props;
  return (
    <Card className="card">
      <div className="row">
        <div className="col-md-2 col-sm-2">
        <Circle style={{display: `${displayCircle}`}}/>
          <p>{subtitle}</p>
          <img
            src={src}
            alt={alt}
            width="70%"
            height="auto"
            className="image"
          />
        </div>
        <div className="col-md-10 col-sm-10">
          <div className="text">
            <p className="title">
              <strong>{title}</strong>
            </p><br/>
            <p className="content">{text}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardElement;
