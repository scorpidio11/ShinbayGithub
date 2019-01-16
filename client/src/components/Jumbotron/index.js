import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div className="box jumbotron" >
      {children}
    </div>
  );
}

export default Jumbotron;
