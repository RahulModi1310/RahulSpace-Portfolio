//Dependencies Import
import React from "react";

//Stylesheet Imports
import styles from "./Hamburger.module.css";

//Image Imports

const Hamburger = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${styles.hamburger__ham} ${
        props.isOpen ? styles.active : ""
      }`}
    >
      <div
        className={`${styles.hamburger__burger} ${styles.hamburger__burger1}`}
      ></div>
      <div
        className={`${styles.hamburger__burger} ${styles.hamburger__burger2}`}
      ></div>
      <div
        className={`${styles.hamburger__burger} ${styles.hamburger__burger3}`}
      ></div>
    </div>
  );
};

export default Hamburger;
