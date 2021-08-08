import React from "react";
import { destroyToken, isValidToken } from "../../utils/auth";
// import { Switch, Route } from "react-router-dom";
import styles from "./navbar.module.css";

// import { Signup } from "../LoginSignup/signup";

export function Link(props) {
  return (
    <li className={props.active ? `${styles.active}` : `${styles.navLink}`}>
      <a href={props.to} onClick={props.onClick}>
        {props.children}
      </a>
    </li>
  );
}

// active link & response
// take in link text
// take in href link

export function Navbar(props) {
  return (
    <nav className={styles.navbar}>
      <ul>
        {isValidToken() ? (
          <Link to="/login" onClick={destroyToken}>
            logout
          </Link>
        ) : (
          <>
            <Link to="/login">login</Link>
            <Link to="/signup">signup</Link>
          </>
        )}
      </ul>
    </nav>
  );
}
