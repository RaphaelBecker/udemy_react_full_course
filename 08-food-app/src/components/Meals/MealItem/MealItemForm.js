import React from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

// All attributes on <Input> Components are default attributes from html input tag! Have a look how it is overriden in JS Input Component like {...props.iput}

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          stel: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;
