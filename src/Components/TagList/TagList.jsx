import React from "react";
import secondary_color_list from "../const";

import styles from "./TagList.module.css";

const TagList = (props) => {
  return (
    <ul className={styles.tag_list}>
      {props.tags.map((tag, i) => {
        return (
          <li
            key={i}
            style={{
              backgroundColor: `var(${
                secondary_color_list[i % secondary_color_list.length]
              })`,
            }}
          >
            {tag}
          </li>
        );
      })}
    </ul>
  );
};

export default TagList;
