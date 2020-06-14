import React from "react";
import "../assets/layout.scss";

function Layout(props) {
  return (
    <div>
      <div className="Header">
        <div className="Header__container">
          <div className="Header__container-logo">Jobbers</div>
          <div className="Header__container-links"></div>
        </div>
      </div>
      {props.children}
    </div>
  );
}
export default Layout;
