import React, { useState } from "react";
import WordFlick from "./hello";
import Button from "./button";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <WordFlick />

        <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon size={30} /> : <MenuIcon size={30} />}
        </div>

        {isOpen && (
          <div className="mobile-menu">
            <Button text="About me" to="#aboutme" />
            <Button text="Projects" to="#projects" />
            <Button text="Contact" to="#contact" />
          </div>
        )}

        <div className="navigation">
          <Button text="About me" to="#aboutme" />
          <Button text="Projects" to="#projects" />
          <Button text="Contact" to="#contact" />
        </div>
      </nav>
    </>
  );
}
