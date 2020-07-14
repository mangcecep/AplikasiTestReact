import React from "react";
import styled from "styled-components";
import PoppinsMedium from "../../assets/fonts/Poppins-Medium.ttf";

import {
  backgroundTestimonial,
  loginWrapper,
  profile1Image,
  profile2Image,
  profile3Image,
} from "../images";
import ProfileTestimonial from "../ProfileTestimonial";

const Comment = styled.section`
@font-face {
  font-family: "Poppins MediumItalic";
  src: local("${PoppinsMedium}"),
    url("${PoppinsMedium}") format("truetype");
}
font-family: 'Poppins MediumItalic';
@media screen and (max-width: 420px) {
  .pictOne {
    display: none;
  }
}
`;

function Testimonials() {
  return (
    <Comment className="container">
      <p>
        <strong>Testimonial</strong>
      </p>
      <div className="row clearfix">
        <div className="col-lg-5 col-md-12 col-sm 12">
          <img
            src={loginWrapper.url}
            alt={loginWrapper.url}
            width="250px"
            height="auto"
            style={{ marginLeft: "345px", marginTop: "-45px" }}
            className="pictOne"
          />
          <br />
          <img
            src={backgroundTestimonial.url}
            alt={backgroundTestimonial.alt}
            width="auto"
            height="300px"
            className="pictOne"
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
    </Comment>
  );
}

export default Testimonials;
