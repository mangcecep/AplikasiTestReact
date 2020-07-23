import React from "react";
import styled from "styled-components";


function CardProfileSupport(props) {
  const { colSatu, colDua, colTiga } = props;
  const Prof = styled.div`
  margin-bottom: 5px;
  padding-bottom: 10px;
  p.prime {
    margin-top: 20px;
    margin-left: 20px;
    text-align: left;
    padding-bottom: 1px;
  }
  @media screen and (max-width: 420px) {
      p.prime {
        margin-bottom: 1px;
        margin-top: 12px;
        text-align: center;
        font-size: 12px;
      }
  }
  `;
  return (
    <Prof className="card bg-white text-dark">
      <div className="row clearfix">
        <div className="col-lg-2 col-md-2 col-sm-2">
          <p className="prime">
            {colSatu}
          </p>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-2">
          <p className="prime">
            <strong>{colDua}</strong>
          </p>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8">
          <p className="prime">
            {colTiga}
          </p>
        </div>
      </div>
    </Prof>
  );
}

export default CardProfileSupport;
