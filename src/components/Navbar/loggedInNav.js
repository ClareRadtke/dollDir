import React from "react";
import { isValidToken } from "../../utils/auth";
import styles from "./navbar.module.css";

export function Link(props) {
  return (
    <li className={props.active ? `${styles.active}` : `${styles.navLink}`}>
      <a className={styles.navALink} href={props.to} onClick={props.onClick}>
        {props.children}
      </a>
    </li>
  );
}

export function LoggedInNavbar(props) {
  return (
    <div className={`${styles.navbar} ${styles.loggedIn}`}>
      <ul className={styles.navUl}>
        {isValidToken() ? (
          <>
            <Link to="/dashboard">dashboard</Link>
            <Link to="/new-photo">new photo</Link>
            <Link to="/new-post">new post</Link>
          </>
        ) : null}
      </ul>
    </div>
  );
}
