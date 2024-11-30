import React from "react";

import styles from "./SectionComp.module.css";
import ReadMore from "./ReadMore";

const SectionComp = (props) => {
  return (
    <>
      <div id={props.id} className={styles.main_block}>
        <h2 className={styles.block_heading}>
          {`<`} {props.title}
          {`/>`}
        </h2>
        {props.children}
        {props.readMore && <ReadMore url={props.url} blockName={props.blockName} />}
      </div>
    </>
  );
};

export default SectionComp;
