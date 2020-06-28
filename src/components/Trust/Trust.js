import React from "react";
import { trustImageOne, trustImageTwo, trustImageThree } from "../images";

function Trust() {
  return (
    <section className="container">
      <div className="content">
        <h4 className="text-center">Mengapa mempercayai kami?</h4>
        <div className="row clearfix mt-5 justify-content-center">
          <div className="col-lg-4 col-md-col-sm-12">
            <img
              src={trustImageOne.url}
              alt={trustImageOne.alt}
              width="100rem"
              height="auto"
            />
            <p>
              <strong>
                Lorem Ipsum <br />
                dolor siamet
              </strong>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur adipiscing alit <br />
              Maecenas.
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <img
              src={trustImageTwo.url}
              alt={trustImageTwo.alt}
              width="100rem"
              height="auto"
            />
            <p>
              <strong>
                Lorem Ipsum <br />
                dolor siamet
              </strong>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur adipiscing alit <br />
              Maecenas.
            </p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <img
              src={trustImageThree.url}
              alt={trustImageThree.alt}
              width="100rem"
              height="auto"
            />
            <p>
              <strong>
                Lorem Ipsum <br />
                dolor siamet
              </strong>
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet <br />
              consectetur adipiscing alit <br />
              Maecenas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trust;
