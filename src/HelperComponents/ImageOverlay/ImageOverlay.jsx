import React from "react";
import styles from "./ImageOverlay.module.css";
import galleryIcon from "../../assets/GalleryIcon.svg";

const ImageOverlay = (props) => {
  return (
    <div className={styles.overlay_main_container}>
      {props.children}
      <div className={styles.overlay}>
        <img className={styles.icon} src={galleryIcon} alt="overlay icon" />
        {props.moreNumber && <p>+{props.moreNumber}</p>}
      </div>
    </div>
  );
};

export default ImageOverlay;
