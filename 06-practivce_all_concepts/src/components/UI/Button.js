import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button} // get custom css styles from my own defined styling module, scoped to this component
      type={props.type || "button"} // if type is not defined by props, fallback option is "button"
      onClick={props.onClick} // forward the onlick funciton
    >
      {
        props.children /*  should display the 'TEXT' given to the <Button> 'TEXT' </Button> component */
      }
    </button>
  );
};

export default Button;
