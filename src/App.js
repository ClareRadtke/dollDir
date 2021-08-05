import React from "react";
import { Route } from "react-router-dom";
import styles from "./App.module.css";

import { Navbar } from "./components/Navbar/navbar.js";
import { MainContent } from "./components/MainContent/index";
import { Footer } from "./components/Footer/footer";

function App() {
  return (
    <>
      <div className={styles.desktopNav}>
        <Navbar />
        <a href="/" className={styles.heading}>
          Doll <br />
          Directory
        </a>
        <Footer />
      </div>

      <Route path="/">
        <MainContent />
      </Route>
    </>
  );
}

export default App;
