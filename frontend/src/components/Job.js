import React from "react";

function Job() {
  return (
    <div className="list__job">
      <div className="job__container">
        <div className="job__img">
          <img
            src="https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
            alt=""
          />
        </div>
        <div className="job__info">
          <div className="job__info-title">
            <h3>Frontend Developer</h3>
          </div>
          <div className="job__info-company">
            <h4>Kabuper production</h4>
          </div>
          <div className="job__info-location">
            <h5>CABA, Argentina</h5>
          </div>
          <div className="job__info-payment">
            <h5>US$20.000-25000</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
