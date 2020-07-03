import React from "react";

function SelfLeadership(props) {
  const { title, text, text2 } = props;
  return (
    <section className="jumbotron">
      <div className="content">
        <h3 className="text-center">{title}</h3>
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
