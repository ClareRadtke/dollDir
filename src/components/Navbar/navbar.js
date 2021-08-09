import React from "react";
import { destroyToken, isValidToken } from "../../utils/auth";
import styles from "./navbar.module.css";

export function Link(props) {
  return (
    <li className={props.active ? `${styles.active}` : `${styles.navLink}`}>
      <a href={props.to} onClick={props.onClick}>
        {props.children}
      </a>
    </li>
  );
}

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
