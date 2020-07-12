import React from "react";

function SelfLeadership(props) {
  const { title, text, text2 } = props;
  return (
    <section className="container">
      <div className="jumbotron">
        <p className="text-center">
          <strong>{title}</strong>
        </p>
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <p>{text}</p>
            <p>{text2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SelfLeadership;
