import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { backgorundColor } from "../images";

const Header = styled.section`
  margin-top: -108px;
  padding-bottom
  margin: center;
  img {
    size : 100%;
    position: absolute;
    z-index: -1;
  }
`;

const Player = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  margin-top: 220px;
  p {
    font-size: 33px;
  }
`;

function Heading() {
  return (
    <>
      <Header>
        <img src={backgorundColor.url} alt={backgorundColor.alt} />
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12">
            <Text className="text-center">
              <p>
                {" "}
                <strong>
                  "Senang rasanya jadi ngerti tentang diri sendiri. <br />
                  Bisa ngerjain sesuatu sesuai dengan <br />
                  potensi diri yang sebenernya"{" "}
                </strong>
              </p>
            </Text>
          </div>
          <div className="col-lg-12 col-md-12">
            <Player>
              <ReactPlayer
                className="react-player"
                url="https://www.youtube.com/watch?v=B9Wz-RwYr_Y"
                width={720}
              />
            </Player>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 text-center">
          <div className="card mt-5">
            <p>
              <strong>
                "Ikuti test potensi model keberhasilan diri anda, dan dapatkan
                deskripsi, <br />
                "akurat" tentang bagaimana pontensi Anda untuk bisa mencapai{" "}
                <br />
                keberhasilan dan kekayaan, dengan efektif dan efisien."
              </strong>
            </p>
            <button className="btn-lg btn-round bg-purple">
              Ikuti Test <i className="zmdi zmdi-hc-fw"></i>
            </button>
          </div>
        </div>
      </Header>
    </>
  );
}

export default Heading;
