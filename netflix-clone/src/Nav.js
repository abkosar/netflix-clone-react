import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {

  // Scroll event listener  
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    // if show true then the class name is nav__black
    <div className={`nav ${show && "nav__black"}`}>  
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg:large"
        alt=""
      />
    </div>
  );
}

export default Nav;
