import React from "react";
import { backgroundTestimonial, loginWrapper } from "../../components/images";
const testimonial = [1, 2, 3];

function Testimonials() {
  return (
    <section className="container">
      <h3>Testimonial</h3>
      <div className="row clearfix">
        <div className="col-lg-5 col-md-12 col-sm 12">
          <img
            src={loginWrapper.url}
            alt={loginWrapper.url}
            width="250px"
            height="auto"
            style={{ marginLeft: "345px", marginTop: "-45px" }}
          />
          <br />
          <img
            src={backgroundTestimonial.url}
            alt={backgroundTestimonial.alt}
            width="auto"
            height="300px"
          />
        </div>

        <div className="col-lg-7 col-md-12 col-sm-12 float-left">
          {testimonial.map((index, testimoni) => (
            <div
              key={index}
              className="card state_w1 bg-danger ml-4"
              style={{ width: "17rem", height: "auto" }}
            >
              <div className="header">
                <img
                  src="assets/images/profile_av.jpg"
                  className="rounded-circle ml-4"
                  alt="profile-image"
                  width="70px"
                  height="auto"
                />
              </div>
              <div className="body bg-danger text-light">
                <p>
                  lorem ipsum <br />
                  <strong>lorem ipsum</strong> <br />
                  Lorem ipsum dolor sit amet <br />
                  consectetur adipsiscing elit <br />
                  Maecnas Vairus.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
