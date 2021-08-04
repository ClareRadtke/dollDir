import React from "react";
// import { Switch, Route } from "react-router-dom";
import "./navbar.css";

// import { Signup } from "../LoginSignup/signup";

export function Link(props) {
  return (
    <li className={props.active ? "active" : "nav-link"}>
      <a href={props.to}>{props.children}</a>
    </li>
  );
}

// active link & response
// take in link text
// take in href link

export function Navbar(props) {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
      </ul>
    </nav>
  );
}
