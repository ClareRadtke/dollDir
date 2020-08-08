import React from "react";
import "./navbar.css";

export function Navbar(props) {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <a href="">Doll Directory</a>
        </li>
        <li className="genericInfo">
          <a href="">About Doll Directory</a>
        </li>
        <li className="genericInfo">
          <a href="">Contact Me</a>
        </li>
        <li className="genericInfo">
          <a href="">Updates</a>
        </li>
      </ul>
    </nav>
  );
}
