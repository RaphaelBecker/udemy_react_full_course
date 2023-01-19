import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
import Button from "./Button";

// Portals: Use a portal to render this component on a different place in the DOM without changing the JSX Architecture.
// In this case, Backdrop and ModalCard should be rendered on top of root level, defined in public/index.html
// in root folder. The AddUser and UserList Components should be rendered below root layer, as the Backdrop + ModalCard
// is a OVERLAY above the app in an error case.

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClearError}></div>;
};

const ModalCard = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onClearError}>Okay</Button>
      </footer>
    </Card>
  );
};

// Border layer between Card and Backgroud so its is not possible for the user to interact with
// the Background any more of ErrorModal was thrown. It is configured via css as "backdrop"
// <div className={styles.backdrop}>

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClearError={props.onClearError}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalCard
          title={props.title}
          message={props.message}
          onClearError={props.onClearError}
        ></ModalCard>,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
