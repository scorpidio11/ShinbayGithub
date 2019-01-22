import React from "react";
import "./style.css";
import logo from "./logo_b.png"; 

// This file exports both the List and ListItem components


 
  
export function FinalList({ children }) {
  return (
	    
    <div className="container-fluid">
    

      
    <a href="/"><img className="logo" src={logo} alt="Logo" /> </a>
    
   <ul className="container-fluid list-group2">{children}</ul>
    </div>
  );
}

export function FinalListItem({ children }) {
  return <li className="list-group-item3">{children}</li>;
}


