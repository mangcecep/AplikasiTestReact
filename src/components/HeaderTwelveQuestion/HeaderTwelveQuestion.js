import React from "react";
import { checkList07Image } from "../images";
import styled from "styled-components";

const Header = styled.section`
  @media screen and (max-width: 420px) {
    img {
      display: none;
    }
    h3 {
      font-size: 15px;
    }
    .content {
      margin-bottom: -100px;
    }
  }
`;

function HeaderTwelveQuestion() {
  return (
    <Header className="container mt-3">
      <div className="row clearfix">
        <div className="col-lg-8 col-md-8 col-sm-8">
          <div className="content ml-4">
            <h3>
              Mohon kerjakan test di bawah ini dengan memilih jawaban sesuai
              dengan petunjuk yang diberikan pada tiap nomor. Baca baik-baik dan
              pastikan Anda mengerti apa yang akan anda pilih. Tiap jawaban
              Anda, menentukan ketepatan hasil yang akan berguna bagi anda
              sendiri.
            </h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="content">
            <img src={checkList07Image.url} alt={checkList07Image.alt} />
          </div>
        </div>
      </div>
    </Header>
  );
}

export default HeaderTwelveQuestion;
