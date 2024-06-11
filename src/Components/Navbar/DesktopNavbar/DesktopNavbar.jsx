import React from "react";
import Logo from "../../../assets/Logo.png";

import styles from "./DesktopNavBar.module.css";
import ThemeToggle from "../ThemeToggle";

const DesktopNavbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        {/* Left Nav block */}
        <div className={styles.left_nav_block}>
          <img src={Logo} alt="" />
          <span>
            <a href="#About">Rahul's Space</a>
          </span>
        </div>

        {/* Right Nav block */}
        <div className={styles.right_nav_block}>
          <ul>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Blogs">Blogs</a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

export default DesktopNavbar;
