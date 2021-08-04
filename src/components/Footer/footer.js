import React from "react";
import "./footer.css";

export function Link(props) {
  return (
    <li className={props.active ? "active" : "footer-link"}>
      <a href={props.to}>{props.children}</a>
    </li>
  );
}

export function Footer(props) {
  return (
    <footer className="footer">
      <ul>
        <Link to="/contact">contact</Link>
        <Link to="/about">about</Link>
      </ul>
    </footer>
  );
}
