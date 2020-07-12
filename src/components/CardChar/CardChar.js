import React from "react";
import styled from "styled-components";

import { RectangleCopy13jpgImage } from "../images";

const Card = styled.div`
  background-image: url("${RectangleCopy13jpgImage.url}");
  background-size: cover;
  background-repeat: no-repeat;
  
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
