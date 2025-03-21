import React from "react";
import { Link } from "react-router-dom";
import WordFlick from "./hello";
import Button from "./button";

export default function Menu() {
  return (
    <>
      <nav>
        <WordFlick />
        <div className="navigation">
         <Button text="About me" to="#aboutme"/>
          <Button text="Projects" to="#projects"/>
          <Button text="Contact" to="#socials"/>
        </div>
      </nav>
    </>
  );
}
