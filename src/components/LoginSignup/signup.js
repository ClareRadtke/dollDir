import React, { useState } from "react";
import styles from "./signup.module.css";
import { gql, useMutation } from "@apollo/client";
// import { useHistory } from "react-router-dom";
import { setToken } from "../../utils/auth";

const ADD_USER = gql`
  mutation Mutation(
    $addUserEmail: String!
    $addUserUsername: String!
    $addUserPassword: String!
  ) {
    addUser(
      email: $addUserEmail
      username: $addUserUsername
      password: $addUserPassword
    ) {
      token
      user {
        username
        _id
        email
      }
    }
  }
`;

export function Signup(props) {
  const [addUser] = useMutation(ADD_USER);
  const [email, updateEmail] = useState("");
  const [username, updateUsername] = useState("");
  const [password, updatePassword] = useState("");
  // const history = useHistory();

  return (
    <form className={styles.signupForm}>
      <div className={styles.header}>
        <h1>Signup</h1>
      </div>
      <div className={styles.usernameContainer}>
        <label htmlFor="username">Username:</label>
        <input
          onChange={(event) => {
            updateUsername(event.currentTarget.value);
          }}
          value={username}
          type="text"
          id="username"
          name="username"
          required
        />
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
        <label htmlFor="password">Password (8 characters minimum):</label>
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
          value="sign-up"
          id="sign-up"
          className={`${styles.button} ${styles.signup}`}
          onClick={(event) => {
            addUser({
              variables: {
                addUserEmail: email,
                addUserUsername: username,
                addUserPassword: password,
              },
            }).then((p) => {
              setToken(p.data.addUser.token);
              window.location.assign("/home");
            });
          }}
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
