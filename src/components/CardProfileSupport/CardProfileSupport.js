import React from "react";

function CardProfileSupport(props) {
  const { colSatu, colDua, colTiga } = props;
  return (
    <div className="card bg-light">
      <div className="row clearfix">
        <div className="col-lg-2 col-md-2 col-sm-2">
          <p className="text-center my-auto py-4">
            <strong>{colSatu}</strong>
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4">
          <p className="text-center my-auto py-4">
            <strong>{colDua}</strong>
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <p className="my-auto py-4">
            <strong>{colTiga}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardProfileSupport;
