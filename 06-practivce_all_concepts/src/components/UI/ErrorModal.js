import React from "react";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
import Button from "./Button";

// Border alyer between Card and Backgroud so its is not possible for the user to interact with
// the Background any more of ErrorModal was thrown. It is configured via css as "backdrop"
// <div className={styles.backdrop}>

const ErrorModal = (props) => {
  const onClearError = (event) => {
    event.preventDefault();
    props.onClearError();
  };

  return (
    <div className={styles.backdrop} onClick={onClearError}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onClearError}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
