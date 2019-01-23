import React from "react";
import "./style.css";
import logo from "./logo_b.png"; 

// This file exports both the List and ListItem components


 
  
export function FinalList({ children }) {
  return (
	    
    <div className="container-fluid">
    <img className="logo" src={logo} alt="Logo" /> 
    
   <ul className="container-fluid list-group2">{children}</ul>
    </div>
  );
}

export function FinalListItem({ children }) {
  return <li className="list-group-item2">{children}</li>;
}


