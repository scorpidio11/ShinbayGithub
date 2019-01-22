import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}


export function ScreenBtn(props) {
  return (
    <button {...props} style={{ float: "center", margin: 10 }} className="btn btn-lg">
      {props.children}
    </button>
  );
}
export function PrintBtn(props) {
  return (
    <button {...props} style={{ float: "center", margin: 10 }} className="btn btn-lg">
      {props.children}
    </button>
  );
}

export function EmailBtn(props) {
  return (
    <a {...props} style={{ float: "center", margin: 10 }} className="btn btn-lg" href="mailto:?Subject=Shinbay%20Menu" target="_top" role="button">
		{props.children}
    </a>
  );
}

export function TwBtn(props) {
  return (
    <a {...props} style={{ float: "center", margin: 10 }} className="btn btn-lg" href="https://www.facebook.com/shinbayAZ" target="_bottom" role="button">
      {props.children}
    </a>
  );
}

