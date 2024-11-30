import React, { useState } from "react";
import closeButton from "../../assets/cross_button.png";

import styles from "./Modal.module.css";

const Modal = (props) => {
  const [modalState, setModalState] = useState(false);
  const modalHandler = () => {
    setModalState((prevState) => !prevState);
  };

  return (
    <>
      <div
        className={styles.modal_wrapper}
        onClick={modalHandler}
        key={props.key}
      >
        {props.children}
      </div>
      {modalState && (
        <div className={styles.modal_container}>
          <img
            className={styles.close_button}
            src={closeButton}
            onClick={modalHandler}
          />
          {props.modalComponent}
        </div>
      )}
    </>
  );
};

export default Modal;
