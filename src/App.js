import React from "react";
import { Route } from "react-router-dom";
import styles from "./App.module.css";
import { isValidToken } from "./utils/auth";

import { Navbar } from "./components/Navbar/navbar";
import { LoggedInNavbar } from "./components/Navbar/loggedInNav";
import { MainContent } from "./components/MainContent/index";
import { Footer } from "./components/Footer/footer";

// TODO: Remove login/signup options when on Login or Signup pages
function App() {
  return (
    <>
      <div className={styles.desktopNav}>
        <Navbar />
        {isValidToken() ? (
          <a href="/home" className={styles.heading}>
            Doll Directory
          </a>
        ) : (
          <a href="/" className={styles.heading}>
            Doll Directory
          </a>
        )}

        <LoggedInNavbar />
        <Footer />
      </div>

      <Route path="/">
        <MainContent />
      </Route>
    </>
  );
}

export default App;
