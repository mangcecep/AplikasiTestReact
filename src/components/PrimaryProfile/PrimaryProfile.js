import React from "react";
import CardChar from "../CardChar";
import styled from "styled-components";

const Prime = styled.section`
.jumbotron {
  background-color: #F8F8F5;
}
h4 {
  margin-top:-40px;
  @font-face {
    font-family: "Poppins ExtraBold";
    src: local("Poppins ExtraBold"),
      url(../../assets/fonts/Poppins-ExtraBold.ttf) format("truetype");
  }
  font-family: "Poppins ExtraBold";
}

span {
  font-family: "Poppins ExtraBold";
}

p {
  @font-face {
    font-family: "Poppins SemiBold";
    src: local("Poppins SemiBold"),
      url(../../assets/fonts/Poppins-SemiBold.ttf) format("truetype");
  }
  font-family: "Poppins SemiBold";
  font-size: 14px;
}

@media screen and (max-width: 420px) {
  h4 {
    margin-top:-20px;
  }
}
`;

function PrimaryProfile() {
  return (
    <Prime className="container">
      <div className="jumbotron">
        <h4 className="text-center">Profil Utama dan Profil Bayangan</h4>
        <p className="huruf">Profil Utama (Main) Shio Kaya adalah bagian dominan dari diri anda, yang sebenarnya mendorong dan menginspirasi diri Anda. Profil Utama (Main) mencakup karakteristik alamiah Anda, yang bisa membantu Anda dalam membangun keberhasilan dengan lebih efektif dan efisien, mengemat waktu dan tenaga Anda.</p><br/>
        <p className="huruf">Profil Bayangan dari <span>PRIEST</span> adalah <span>MERCHANT</span> dan <span>MARSHAL</span></p>
        
        <p>
          <span>Priest</span>
        </p>
        <CardChar
          title="Karakter Alami"
          text="Paling mementingkan keamanan bertindak berdasarkan pemikiran
                logis dan jarang berdasarkan perasaan menunda dan menunggu untuk
                mencapai hasil maksimal"
        />
        <br />
        <CardChar
          title="Faktor Kesuksesan"
          text="Tindakan yang diambil sudah berdasarkan pertimbangan matang, Bersedia menunggu untuk data yang cukup supaya keputusan optimal. Sabar menunggu kondisi yang tepat."
        />
        <br />
        <CardChar
          title="Faktor Kegagalan"
          text="Kadang terlalu membutuhkan banyak pertimbangan dan jaminan untuk bertindak terkadang tidak memperhatikan efek dari sebuah keputusan pada tim dan orang lain."
        />
        <p>
          <span>Merchant</span>
        </p>
        <CardChar
          title="Karakter Alami"
          text="Paling mementingkan keamanan bertindak berdasarkan pemikiran
                logis dan jarang berdasarkan perasaan menunda dan menunggu untuk
                mencapai hasil maksimal"
        />
        <br />
        <CardChar
          title="Faktor Kesuksesan"
          text="Tindakan yang diambil sudah berdasarkan pertimbangan matang, Bersedia menunggu untuk data yang cukup supaya keputusan optimal. Sabar menunggu kondisi yang tepat."
        />
        <br />
        <CardChar
          title="Faktor Kegagalan"
          text="Kadang terlalu membutuhkan banyak pertimbangan dan jaminan untuk bertindak terkadang tidak memperhatikan efek dari sebuah keputusan pada tim dan orang lain."
        />
        <p>
          <span>Marshal</span>
        </p>
        <CardChar
          title="Karakter Alami"
          text="Paling mementingkan keamanan bertindak berdasarkan pemikiran
                logis dan jarang berdasarkan perasaan menunda dan menunggu untuk
                mencapai hasil maksimal"
        />
        <br />
        <CardChar
          title="Faktor Kesuksesan"
          text="Tindakan yang diambil sudah berdasarkan pertimbangan matang, Bersedia menunggu untuk data yang cukup supaya keputusan optimal. Sabar menunggu kondisi yang tepat."
        />
        <br />
        <CardChar
          title="Faktor Kegagalan"
          text="Kadang terlalu membutuhkan banyak pertimbangan dan jaminan untuk bertindak terkadang tidak memperhatikan efek dari sebuah keputusan pada tim dan orang lain."
        />
      </div>
    </Prime>
  );
}

export default PrimaryProfile;
