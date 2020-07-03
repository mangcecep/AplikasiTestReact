import React from "react";
import CardConflict from "../CardConflict";

function ConflictProfile() {
  return (
    <section className="jumbotron">
      <h4 className="text-center">
        Konflik antara orang-orang yang berbeda profil
      </h4>
      <p>
        Keberadaan konflik di suatu kolaborasi dalam organisasi atau tim
        merupakan hal yang tidak dapat dihindari. Konflik sering muncul dan
        terjadi pada setip hubungan antar manusia. Konflik atau pertentangan
        pada kondisi tertentu merupakan tanda adanya ketidaksesuaian. Proses
        mempertajam gagasan/ ide, atau menunjukan adanya kesalahpahaman.
      </p>
      <p>
        <strong>Primer</strong>{" "}
      </p>
      <div className="row clearfix">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content">
            <CardConflict
              title="Bard"
              subtitle="Kekuatan : Pengaruh"
              text="Bertolak belakang penuh, perdebatan total dalam kekuatan, model
        komunikasi, nilai (value) yang dianggap penting, dan cara alami untuk
        memperoleh keberhasilan."
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content"></div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content">
            <CardConflict
              title="Wizard"
              subtitle="Kekuatan : Kreativitas"
              text="Bertolak belakang penuh, perdebatan total dalam kekuatan, model
        komunikasi, nilai (value) yang dianggap penting, dan cara alami untuk
        memperoleh keberhasilan."
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content">
            <CardConflict
              title="Knight"
              subtitle="Kekuatan : Hubungan"
              text="Bertolak belakang penuh, perdebatan total dalam kekuatan, model
        komunikasi, nilai (value) yang dianggap penting, dan cara alami untuk
        memperoleh keberhasilan."
            />
          </div>
        </div>
      </div>
      <p>
        <strong>Sekunder</strong>{" "}
      </p>
      <div className="row clearfix">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content">
            <CardConflict
              title="Wizard"
              subtitle="Kekuatan : Kreativitas"
              text="Bertolak belakang penuh, perdebatan total dalam kekuatan, model
        komunikasi, nilai (value) yang dianggap penting, dan cara alami untuk
        memperoleh keberhasilan."
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content">
            <CardConflict
              title="Knight"
              subtitle="Kekuatan : Hubungan"
              text="Bertolak belakang penuh, perdebatan total dalam kekuatan, model
        komunikasi, nilai (value) yang dianggap penting, dan cara alami untuk
        memperoleh keberhasilan."
            />
          </div>
        </div>
      </div>
      <p>
        <strong>Tersier</strong>{" "}
      </p>
      <div className="row clearfix">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content">
            <CardConflict
              title="Arbiter"
              subtitle="Kekuatan : Kreativitas"
              text="Bertolak belakang penuh, perdebatan total dalam kekuatan, model
        komunikasi, nilai (value) yang dianggap penting, dan cara alami untuk
        memperoleh keberhasilan."
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="content">
            <CardConflict
              title="Knight"
              subtitle="Kekuatan : Keteraturan"
              text="Bertolak belakang penuh, perdebatan total dalam kekuatan, model
        komunikasi, nilai (value) yang dianggap penting, dan cara alami untuk
        memperoleh keberhasilan."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConflictProfile;
