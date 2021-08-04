import React from "react";
// import { Switch, Route } from "react-router-dom";
import "./App.css";

import { Navbar } from "./components/Navbar/navbar.js";
import { MainContent } from "./components/MainContent/index";
import { Footer } from "./components/Footer/footer";

function App() {
  return (
    <>
      <div className="desktop-nav">
        <Navbar />
        <h1 className="heading">
          Doll <br />
          Directory
        </h1>
        <Footer />
      </div>

      <MainContent />
    </>
  );
}

export default App;
