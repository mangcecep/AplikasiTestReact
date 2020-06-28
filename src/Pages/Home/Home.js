import React from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";

import { backgroundTestimonial, loginWrapper } from "../../components/images";

const Testimonial = styled.section``;

const testimonial = [1, 2, 3];

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Heading />
      <div className="container">
        <h3>Testimonial</h3>
        <div className="row clearfix">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <img src={loginWrapper.url} alt={loginWrapper.url} />
            <img
              src={backgroundTestimonial.url}
              alt={backgroundTestimonial.alt}
            />
          </div>

          <div className="col-lg-8 col-md-12 col-sm-12 float-left text-center">
            {testimonial.map((index, testimoni) => (
              <div
                key={index}
                className="card state_w1 bg-danger ml-4"
                style={{ width: "16rem", height: "auto" }}
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
                    Lorem ipsum dolor sit a <br />
                    consectetur adipsiscing elit <br />
                    Maecnas Vairus.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
