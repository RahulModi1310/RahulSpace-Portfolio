import React, { useState } from "react";
import Hamburger from "./Hamburger";
import styles from "./MobileNavbar.module.css";
import Logo from "../../../assets/Logo.png";
import ThemeToggle from "../ThemeToggle";

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
      <div onClick={LinkHandler} className={styles.navbar__logo}>
        <img src={Logo} alt="" />
        <span>
          <a href="#About">Rahul's Space</a>
        </span>
      </div>

      <ul
        className={`${styles.navbar__navMenu} ${
          isHamburgerOpen ? "" : styles.notActive
        }`}
      >
        <li>
          <a onClick={LinkHandler} href="#About">
            About
          </a>
        </li>
        <li>
          <a onClick={LinkHandler} href="#CP">
            Competitive Programming
          </a>
        </li>
        <li>
          <a onClick={LinkHandler} href="#Projects">
            Projects
          </a>
        </li>
        <li>
          <a onClick={LinkHandler} href="#Blogs">
            Blogs
          </a>
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
