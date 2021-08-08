import React, { useState } from "react";
import styles from "./login.module.css";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { setToken } from "../../utils/auth";

const LOGIN = gql`
  mutation Mutation($loginEmail: String!, $loginPassword: String!) {
    login(email: $loginEmail, password: $loginPassword) {
      token
      user {
        username
        email
        _id
      }
    }
  }
`;

export function Login(props) {
  const [login, { data, loading, error }] = useMutation(LOGIN);
  const [email, updateEmail] = useState("");
  const [password, updatePassword] = useState("");
  const history = useHistory();

  return (
    <form className={styles.signupForm}>
      <div className={styles.header}>
        <h1>Login</h1>
      </div>
      <div className={styles.emailContainer}>
        <label htmlFor="email">Email:</label>
        <input
          onChange={(event) => {
            updateEmail(event.currentTarget.value);
          }}
          value={email}
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
          onChange={(event) => {
            updatePassword(event.currentTarget.value);
          }}
          value={password}
          type="password"
          id="password"
          name="password"
          minLength="8"
          required
        />
      </div>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          value="login"
          id="login"
          className={`${styles.button} ${styles.login}`}
          onClick={(event) => {
            login({
              variables: {
                loginEmail: email,
                loginPassword: password,
              },
            }).then((p) => {
              setToken(p.data.login.token);
              history.push("/home");
            });
          }}
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
