import React from "react";
import styled from "styled-components";

import { RectangleCopy13jpgImage } from "../images";

const Card = styled.div`
  background-image: url("${RectangleCopy13jpgImage.url}");
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 420px) {
    margin-bottom: -15px;
    background-image: url("${RectangleCopy13jpgImage.url}");
    border-radius: 10px;
    background-size: 100% 80%;
  }
  p {
    font-size : 12px;
    margin-right: 2px;
  }
`;

function CardChar(props) {
  const { title, text } = props;
  return (
    <Card className="card text-dark pl-4 pt-2 pb-0">
      <div className="content">
        <div className="card">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <p className="title mt-2">
                <strong>{title}</strong>
              </p>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CardChar;
