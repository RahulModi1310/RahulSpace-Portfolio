import React from "react";
import Logo from "../../../assets/Logo.png";
import { NavLink } from "react-router"
import ThemeToggle from "../ThemeToggle";

import styles from "./DesktopNavbar.module.css";

const DesktopNavbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        {/* Left Nav block */}
        <NavLink to="/" className={styles.left_nav_block}>
          <img src={Logo} alt="" />
          <span>
            Rahul's Space
          </span>
        </NavLink>

        {/* Right Nav block */}
        <div className={styles.right_nav_block}>
          <ul>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

export default DesktopNavbar;
