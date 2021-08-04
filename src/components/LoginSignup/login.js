import React from "react";
import "./login.css";

export function Login(props) {
  return (
    <form className="signup-form">
      <div className="header">
        <h1>Login</h1>
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
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          minLength="8"
          required
        />
      </div>
      <div className="button-container">
        <button type="submit" value="login" id="login" className="button login">
          Login
        </button>
        <a href="/" className="button cancel">
          Cancel
        </a>
        <div className="button-break"></div>
        <a href="/signup" className="button signup">
          Don't have an account? Signup
        </a>
      </div>
    </form>
  );
}
