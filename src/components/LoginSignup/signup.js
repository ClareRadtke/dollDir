import React from "react";
import styles from "./signup.module.css";

export function Signup(props) {
  return (
    <form className={styles.signupForm}>
      <div className={styles.header}>
        <h1>Signup</h1>
      </div>
      <div className={styles.usernameContainer}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div className={styles.emailContainer}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          required
          type="email"
          pattern=".+@.+\..+"
        />
      </div>
      <div className={styles.passwordContainer}>
        <label htmlFor="password">Password (8 characters minimum):</label>
        <input
          type="password"
          id="password"
          name="password"
          minLength="8"
          required
        />
      </div>
      <div className={styles.buttonContainer}>
        <button
          type="submit"
          value="sign-up"
          id="sign-up"
          className={`${styles.button} ${styles.signup}`}
        >
          Signup
        </button>
        <a href="/" className={`${styles.button} ${styles.cancel}`}>
          Cancel
        </a>
      </div>
    </form>
  );
}
