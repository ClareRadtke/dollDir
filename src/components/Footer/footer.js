import React from "react";
import styles from "./footer.module.css";

export function Link(props) {
  return (
    <li className={props.active ? `${styles.active}` : `${styles.footerLink}`}>
      <a className={styles.footerLinkA} href={props.to}>
        {props.children}
      </a>
    </li>
  );
}

export function Footer(props) {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerUl}>
        <Link to="/contact">contact</Link>
        <Link to="/about">about</Link>
      </ul>
    </footer>
  );
}
