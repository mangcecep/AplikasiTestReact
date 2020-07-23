import React from "react";

function CardConflict(props) {
  const { title, subtitle, text } = props;
  return (
    <div className="card bg-white text-dark py-4 px-4">
      <p>
        <span>{title}</span>
      </p>
      <p>{subtitle}</p>
      <p>{text}</p>
    </div>
  );
}

export default CardConflict;
