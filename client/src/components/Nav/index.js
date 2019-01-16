import React from "react";
import logo from './logo.png'; 
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div><img src={logo} alt="Logo" /></div>
      {/* <a className="navbar-brand" href="/">
        Menu
      </a> */}
      
    </nav>
  );
}

export default Nav;
