import React from "react";
import {
  backgroundTestimonial,
  loginWrapper,
  profile1Image,
  profile2Image,
  profile3Image,
} from "../images";
import ProfileTestimonial from "../ProfileTestimonial";

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
          <ProfileTestimonial
            ProfileTestimonial={profile1Image.url}
            ProfileTestimonialAlt={profile1Image.alt}
            bgStyle="bg-danger text-light"
          />
          <ProfileTestimonial
            ProfileTestimonial={profile2Image.url}
            ProfileTestimonialAlt={profile2Image.alt}
          />
          <ProfileTestimonial
            ProfileTestimonial={profile3Image.url}
            ProfileTestimonialAlt={profile3Image.alt}
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
