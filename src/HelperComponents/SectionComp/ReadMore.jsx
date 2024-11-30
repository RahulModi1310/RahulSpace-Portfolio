import React from "react";

import styles from "./SectionComp.module.css";
import { NavLink } from "react-router-dom";

const ReadMore = ({url, blockName, color}) => {
  return (
      <NavLink className={styles.readMore_button} to={url}>{blockName + " ->"}</NavLink>
  );
};

export default ReadMore;
