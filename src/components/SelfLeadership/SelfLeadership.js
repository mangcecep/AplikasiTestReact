import React from "react";
import styled from "styled-components";

const Self = styled.section`
.container {
  background-color: red;
}
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
p {
  @font-face {
    font-family: "Poppins SemiBold";
    src: local("Poppins SemiBold"),
      url(../../assets/fonts/Poppins-SemiBold.ttf) format("truetype");
  }
  font-family: "Poppins SemiBold";
}
`;

function SelfLeadership(props) {
  const { title, text, text2 } = props;
  return (
    <Self className="container">
      <div className="jumbotron">
        <h4 className="text-center">
          {title}
        </h4>
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p>{text}</p>
            <p>{text2}</p>
          </div>
        </div>
        </div>
    </Self>
  );
}

export default SelfLeadership;
