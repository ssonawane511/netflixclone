/** @format */

import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
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
    <div className={`navbar ${show && "navbar__black"}`}>
      <img
        className='nav__logo'
        alt='Netflix logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png'
      />
      <img
        className='nav__avatar'
        src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
        alt='avatar'
      />
    </div>
  );
};

export default Navbar;
