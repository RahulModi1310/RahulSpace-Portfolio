import React, { useState } from "react";
import Hamburger from "./Hamburger";
import styles from "./MobileNavbar.module.css";
import Logo from "../../../assets/Logo.png";
import ThemeToggle from "../ThemeToggle";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const HamburgerHandler = () => {
    setIsHamburgerOpen((prevstate) => {
      return !prevstate;
    });
  };

  const LinkHandler = () => {
    setIsHamburgerOpen(false);
  };

  return (
    <nav className={styles.navbar__nav}>
      <NavLink to="/" onClick={LinkHandler} className={styles.navbar__logo}>
        <img src={Logo} alt="" />
        <span>
          Rahul's Space
        </span>
      </NavLink>

      <ul
        className={`${styles.navbar__navMenu} ${
          isHamburgerOpen ? "" : styles.notActive
        }`}
      >
        <li>
          <NavLink onClick={LinkHandler} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink onClick={LinkHandler} to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink onClick={LinkHandler} to="/blogs">Blogs</NavLink>
        </li>
      </ul>
      <div className={styles.nav__buttons}>
        <ThemeToggle />
        <Hamburger isOpen={isHamburgerOpen} onClick={HamburgerHandler} />
      </div>
    </nav>
  );
};

export default MobileNavbar;
