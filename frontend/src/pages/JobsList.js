import React from "react";
import "../assets/jobslist.scss";
import Job from "../components/Job";

function JobsList() {
  return (
    <div className="JobsList">
      <div className="JobsList__container">
        <div className="JobsList__container-hero"></div>
        <div className="JobsList__container-listContainer">
          <div className="list">
            <Job />
          </div>
        </div>
      </div>
    </div>
  );
}
export default JobsList;
