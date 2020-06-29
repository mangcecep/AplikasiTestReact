import React from "react";
import { checkList07Image } from "../images";

function HeaderTwelveQuestion() {
  return (
    <section className="container mt-3">
      <div className="row clearfix">
        <div className="col-lg-8 col-md-8 col-sm-8">
          <div className="content ml-4">
            <h3>
              Mohon kerjakan test di bawah ini <br />
              dengan memilih jawaban sesuai dengan <br />
              petunjuk yang diberikan pada tiap nomor. <br />
              Baca baik-baik dan pastikan Anda mengerti <br />
              apa yang akan anda pilih. Tiap jawaban <br />
              Anda, menentukan ketepatan hasil yang <br />
              akan berguna bagi anda sendiri.
            </h3>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <div className="content">
            <img src={checkList07Image.url} alt={checkList07Image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderTwelveQuestion;
