import React from "react";

import styles from "./SocialMediaCards.module.css";

const SocialMediaLinks = (props) => {
  return (
    <div className={styles.social_media_card}>
      <h3>{props.title}</h3>
      <ul>
        {props.data.map((obj, i) => {
          return (
            <li key={i}>
              <a href={obj.link} target="blank">
                {obj.image && <img src={obj.image} />}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
