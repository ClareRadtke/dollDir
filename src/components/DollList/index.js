import React from "react";
import "./index.css";

export function DollList(props) {
  return (
    <div className="DollList">
      {props.dolls.map((doll) => (
        <a
          href={`/doll/${doll.id}`}
          className="DollItem"
          style={{ backgroundImage: `url(${doll.photo})` }}
        >
          <span>{doll.name}</span>
        </a>
      ))}
    </div>
  );
}

export { dollData } from "./data";
