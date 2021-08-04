import React from "react";
import "./contact.css";

export function Contact(props) {
  return (
    <form className="contact-form">
      <div className="header">
        <p>Have ideas or suggestions for the site, found or having an issue?</p>
        <h1>Get in touch!</h1>
      </div>
      <div className="firstname-container">
        <label htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" name="firstname" required />
      </div>
      <div className="lastname-container">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" id="lastname" name="lastname" required />
      </div>

      <div className="email-container">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          required
          type="email"
          pattern=".+@.+\..+"
        />
      </div>
      <div className="message-container">
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

      <div className="button-container">
        <button
          type="submit"
          value="Send"
          id="sign-up"
          className="button signup"
        >
          Send
        </button>
        <a href="/" className="button cancel">
          Cancel
        </a>
      </div>
    </form>
  );
}
