import React from "react";
import styled from "styled-components";

const Header = styled.section`
  @font-face {
    font-family: "Poppins Regular";
    src: local("Poppins Regular"),
      url(../../assets/fonts/Poppins-Regular.ttf) format("truetype");
  }
  font-family: "Poppins Regular";
  font-size: 25px;
`;

function HeaderFourtyEigthQuest() {
  return (
    <Header className="container">
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <p className="title text-center my-auto mt-5 mb-5">
            <strong>
              Mohon kerjakan test dibawah ini dengan memilih jawaban sesuai
              dengan petunjuk yang diberikan pada tiap nomor. Baca baik-baik dan
              pastikan Anda mengerti jawaban apa yang akan Anda pilih. Tiap
              jawaban Anda, menentukan ketepatan hasil yang akan berguna bagi
              Anda sendiri.
            </strong>
          </p>
        </div>
      </div>
    </Header>
  );
}

export default HeaderFourtyEigthQuest;
