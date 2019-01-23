import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function PrintBtn(props) {
  return (
	  
	  <button type="button" className="btn3 " {...props} role="button" tabIndex="0"><i class="fas fa-file-pdf fa-3x vl" ></i>  DOWNLOAD PDF</button>
	  
	  

  );
}

export default PrintBtn;
