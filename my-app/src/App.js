import React from "react";

import { DollList } from "./components/DollList";
import { Navbar } from "./components/Navbar/navbar.js";

const dollData = [
  { name: "Aurelia", photo: "http://placekitten.com/200/200", id: "aurelia" },
  { name: "Somni", photo: "http://placekitten.com/100/200", id: "somni" },
  { name: "Kiera", photo: "http://placekitten.com/200/200", id: "kiera" },
  {
    name: "Puppy Girls",
    photo: "http://placekitten.com/300/300",
    id: "puppy-girls",
  },
  { name: "Lichen", photo: "http://placekitten.com/200/400", id: "lichen" },
  { name: "Freesia", photo: "http://placekitten.com/150/200", id: "freesia" },
  {
    name: "Smart Doll",
    photo: "http://placekitten.com/200/300",
    id: "smart-doll",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Doll Directory</h1>
      <Navbar />
      <DollList dolls={dollData} />
    </div>
  );
}

export default App;
