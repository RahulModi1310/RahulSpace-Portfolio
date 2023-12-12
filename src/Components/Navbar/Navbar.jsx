import React from "react";
import Logo from "../../assets/Logo.png";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        {/* Left Nav block */}
        <div className={styles.left_nav_block}>
          <img src={Logo} alt="" />
          <span>Rahul's Space</span>
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
