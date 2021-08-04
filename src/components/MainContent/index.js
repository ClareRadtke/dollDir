import React from "react";
import { Route } from "react-router-dom";
import "./index.css";

// Page imports
import { LandingPageContent } from "../LandingPage/landingPage";
import { Signup } from "../LoginSignup/signup";
import { Login } from "../LoginSignup/login";
import { Contact } from "../Contact/contact";
import { About } from "../About/about";
// import { DollList, dollData } from "../DollList/index";
// { <DollList dolls={dollData} /> }

// https://reactrouter.com/

// let Component = null;
// if (window.location.href === "/") Component = LandingPage;
// if (window.location.href === "/about") Component = AboutPage;
// if (window.location.href === "/contact") Component = ContactPage;

export function MainContent(props) {
  return (
    <div className="content-container">
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

      <Route exact path="/">
        <LandingPageContent />
      </Route>
    </div>
  );
}
