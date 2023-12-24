import React from "react";

import styles from "./SectionComp.module.css";

const SectionComp = (props) => {
  return (
    <>
      <div id={props.id} className={styles.main_block}>
        <h2 className={styles.block_heading}>
          {`<`} {props.title}
          {`/>`}
        </h2>
        {props.children}
      </div>
    </>
  );
};

export default SectionComp;
