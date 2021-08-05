import React from "react";
import styles from "./login.module.css";

export function Login(props) {
  return (
    <form className={styles.signupForm}>
      <div className={styles.header}>
        <h1>Login</h1>
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
        <label htmlFor="password">Password:</label>
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
          value="login"
          id="login"
          className={`${styles.button} ${styles.login}`}
        >
          Login
        </button>
        <a href="/" className={`${styles.button} ${styles.cancel}`}>
          Cancel
        </a>
        <div className={styles.buttonBreak}></div>
        <a href="/signup" className={`${styles.button} ${styles.signup}`}>
          Don't have an account? Signup
        </a>
      </div>
    </form>
  );
}
