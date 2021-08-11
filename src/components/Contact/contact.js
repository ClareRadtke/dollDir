import React from "react";
import styles from "./contact.module.css";

export function Contact(props) {
  return (
    <form autoComplete="off" className={styles.contactForm}>
      <div className={styles.header}>
        <p className={styles.headerP}>
          Have ideas or suggestions for the site, found or having an issue?
        </p>
        <h1 className={styles.heading}>Get in touch!</h1>
      </div>
      <div className={styles.firstnameContainer}>
        <label htmlFor="firstname" className={styles.contactLabel}>
          First Name
        </label>
        <input
          className={styles.contactInput}
          type="text"
          id="firstname"
          name="firstname"
          required
        />
      </div>
      <div className={styles.lastnameContainer}>
        <label htmlFor="lastname" className={styles.contactLabel}>
          Last Name
        </label>
        <input
          className={styles.contactInput}
          type="text"
          id="lastname"
          name="lastname"
          required
        />
      </div>

      <div className={styles.emailContainer}>
        <label htmlFor="email" className={styles.contactLabel}>
          Email
        </label>
        <input
          className={styles.contactInput}
          id="email"
          name="email"
          required
          type="email"
          pattern=".+@.+\..+"
        />
      </div>
      <div className={styles.messageContainer}>
        <label htmlFor="message" className={styles.contactLabel}>
          Message
        </label>
        <textarea
          className={styles.contactTextarea}
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
