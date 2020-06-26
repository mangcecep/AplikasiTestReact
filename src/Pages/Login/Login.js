import React from "react";
import Navbar from "../../components/Navbar";
import FormLogin from "../../components/FormLogin";

import { instagramicon, waIcon, emailIcon } from "../../components/images";

const Login = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <FormLogin />
        <footer className="mt-4">
          <div className="row clearfix bg-black text-light px-4 py-4">
            <div className="col-lg-9 col-sm-12">
              <h5>ShioKaya</h5>
              <p>
                Dalam deskripsi Shio Kaya ini, anda mempelajari apa yang
                sebenarnya <br />
                mendorong, menginspirasi, dan tantangan dari karakteristik
                alamiah Anda yang unik.
                <br />
                yang bisa membantu anda dalam membangun keberhasilan dengan
                lebih efektif <br />
                dan efisien, menghemat waktu dan tenaga anda.
              </p>
            </div>
            <div className="col-lg-3 col-sm-12 my-auto">
              <div className="row clearfix">
                <div className="col-sm-2 col-xs-2 mb-2">
                  <img src={instagramicon.url} alt={instagramicon.alt} />
                </div>
                <div className="col-sm-10 col-xs-10">@tentangshiokaya</div>
                <div className="col-sm-2 col-xs-2 mb-2">
                  <img src={waIcon.url} alt={waIcon.alt} />
                </div>
                <div className="col-sm-10 col-xs-10">+62 877 0088 4964</div>
                <div className="col-sm-2 col-xs-2">
                  <img src={emailIcon.url} alt={emailIcon.alt} />
                </div>
                <div className="col-sm-10 col-xs-10">support@shiokaya.com</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Login;
