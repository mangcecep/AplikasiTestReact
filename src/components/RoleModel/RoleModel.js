import React from "react";

function RoleModel() {
  let roleModel = [];
  let roleModelNumber = 7;
  for (let i = 0; i < roleModelNumber; i++) {
    roleModel.push(
      <div className="col-lg-3 col-md-3 col-sm-3">
        <p>
          <strong>Achmad Hamdami</strong>
        </p>
        <p>
          <i>Founder Trakindo</i>
        </p>
      </div>
    );
  }
  return (
    <section className="jumbotron">
      <h4 className="text-center">Role model - Tokoh terkenal</h4>
      <p>
        <strong>Priest</strong>
      </p>
      <div className="row clearfix">{roleModel}</div>
    </section>
  );
}

export default RoleModel;
