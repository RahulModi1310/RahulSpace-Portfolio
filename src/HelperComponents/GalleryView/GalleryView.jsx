import React, { useState } from "react";
import styles from "./GalleryView.module.css";
import next_arrow from "../../assets/next_arrow.svg";

const GalleryView = (props) => {
  const imageList = props.imageList;

  const [currentImage, setCurrentImage] = useState(0);

  const currentImageHandler = (step) => {
    setCurrentImage(
      (prevImage) => (prevImage + step + imageList.length) % imageList.length
    );
  };

  return (
    <div className={styles.gallery_container}>
      <div className={styles.gallery_left_panel}>
        {[1, 2, 3].map((step) => (
          <img
            key={step}
            src={imageList[(currentImage + step) % imageList.length]}
            onClick={() => currentImageHandler(step)}
            alt=""
          />
        ))}
      </div>
      <div className={styles.gallery_main_panel}>
        <img src={imageList[currentImage]} alt="" />
        <div className={styles.control_bar}>
          <img
            src={next_arrow}
            onClick={() => currentImageHandler(-1)}
            alt="Previous"
          />
          <img
            src={next_arrow}
            onClick={() => currentImageHandler(1)}
            alt="Next"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryView;
