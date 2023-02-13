import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCLoseModal}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}> {props.children}</div>
    </div>
  );
};

// Portal: "overlays" is set over "root" in public/index.js file in roots directory! There, the Modal will then be portaled (rendered side by side to root app)
const portalElmentHelper = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCLoseModal={props.onCLoseModal}></Backdrop>,
        portalElmentHelper
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElmentHelper
      )}
    </Fragment>
  );
};

export default Modal;
