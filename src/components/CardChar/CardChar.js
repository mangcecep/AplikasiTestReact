import React from "react";

function CardChar(props) {
  const { title, text } = props;
  return (
    <div className="container bg-blue text-dark">
      <div className="content">
        <div className="card">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <p className="title mt-2">
                <strong>{title}</strong>
              </p>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardChar;
