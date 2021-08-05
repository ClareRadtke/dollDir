import React from "react";
import { Route } from "react-router-dom";
import styles from "./index.module.css";

// Page imports
import { LandingPageContent } from "../LandingPage/landingPage";
import { Signup } from "../LoginSignup/signup";
import { Login } from "../LoginSignup/login";
import { Contact } from "../Contact/contact";
import { About } from "../About/about";
import { Home } from "../Home/home";

export function MainContent(props) {
  return (
    <div className={styles.contentContainer}>
      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route exact path="/">
        <LandingPageContent />
      </Route>
    </div>
  );
}
