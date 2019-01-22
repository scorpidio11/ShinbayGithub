import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function EditBtn(props) {
  return (
	  
	  <button type="button" className="btn2 btn-outline-primary edit-btn" {...props} role="button" tabIndex="0">Edit</button>
	  
	  

  );
}

export default EditBtn;
