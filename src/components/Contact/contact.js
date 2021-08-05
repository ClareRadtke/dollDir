import React from "react";
import styles from "./contact.module.css";

export function Contact(props) {
  return (
    <form className={styles.contactForm}>
      <div className={styles.header}>
        <p>Have ideas or suggestions for the site, found or having an issue?</p>
        <h1>Get in touch!</h1>
      </div>
      <div className={styles.firstnameContainer}>
        <label htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" name="firstname" required />
      </div>
      <div className={styles.lastnameContainer}>
        <label htmlFor="lastname">Last Name</label>
        <input type="text" id="lastname" name="lastname" required />
      </div>

      <div className={styles.emailContainer}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          required
          type="email"
          pattern=".+@.+\..+"
        />
      </div>
      <div className={styles.messageContainer}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows="1"
          cols="17"
          spellCheck="true"
          minLength="1"
        ></textarea>
      </div>

      <div className={styles.buttonContainer}>
        <button
          type="submit"
          value="Send"
          id="sign-up"
          className={`${styles.button} ${styles.signup}`}
        >
          Send
        </button>
        <a href="/" className={`${styles.button} ${styles.cancel}`}>
          Cancel
        </a>
      </div>
    </form>
  );
}
