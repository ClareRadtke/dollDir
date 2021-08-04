import React from "react";
import "./signup.css";

export function Signup(props) {
  return (
    <form className="signup-form">
      <div className="header">
        <h1>Signup</h1>
      </div>
      <div className="username-container">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div className="email-container">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          required
          type="email"
          pattern=".+@.+\..+"
        />
      </div>
      <div className="password-container">
        <label htmlFor="password">Password (8 characters minimum):</label>
        <input
          type="password"
          id="password"
          name="password"
          minLength="8"
          required
        />
      </div>
      <div className="button-container">
        <button
          type="submit"
          value="sign-up"
          id="sign-up"
          className="button signup"
        >
          Signup
        </button>
        <a href="/" className="button cancel">
          Cancel
        </a>
      </div>
    </form>
  );
}
