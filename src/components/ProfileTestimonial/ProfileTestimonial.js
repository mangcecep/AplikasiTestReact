import React from "react";

function ProfileTestimonial(props) {
  const { ProfileTestimonial, ProfileTestimonialAlt, bgStyle } = props;
  return (
    <div
      className={`card state_w1 ${bgStyle} ml-4`}
      style={{ width: "17rem", height: "auto" }}
    >
      <div className="header">
        <img
          src={`${ProfileTestimonial}`}
          className="rounded-circle ml-4"
          alt={`${ProfileTestimonialAlt}`}
          width="70px"
          height="auto"
        />
      </div>
      <div className={`body ${bgStyle}`}>
        <p>
          lorem ipsum <br />
          <strong>lorem ipsum</strong> <br />
          Lorem ipsum dolor sit amet <br />
          consectetur adipsiscing elit <br />
          Maecnas Vairus.
        </p>
      </div>
    </div>
  );
}

export default ProfileTestimonial;
