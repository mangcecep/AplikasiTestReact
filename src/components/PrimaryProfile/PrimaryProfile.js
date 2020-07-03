import React from "react";
import CardChar from "../CardChar";
import SelfLeadership from "../SelfLeadership";

function PrimaryProfile() {
  return (
    <section className="jumbotron">
      <SelfLeadership
        title="Profil Utama dan Profil Bayangan"
        text="Profil Utama (Main) Shio Kaya adalah bagian dominan dari diri anda, yang sebenarnya mendorong dan menginspirasi diri Anda. Profil Utama (Main) mencakup karakteristik alamiah Anda, yang bisa membantu Anda dalam membangun keberhasilan dengan lebih efektif dan efisien, mengemat waktu dan tenaga Anda."
        text2="Profil Bayangan dari PRIEST adalah MERCHANT dan MARSHAL"
      />
      <p>
        <strong>Priest</strong>
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
      <p className="mt-3">
        <strong>Merchant</strong>
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
      <p className="mt-3">
        <strong>Marshal</strong>
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
    </section>
  );
}

export default PrimaryProfile;
