import React, { useState } from "react";
//import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

//  DESCRIPTION: Dynamically styled component! It is done by the props provided by the "styled-components" package
// By enabling the FomrControl attribute "invalid", individual componeents like "label", "border" etc can be styled dynamically
// <FormControl invalid={!isValidInput && "invalid"}>
// ->
// label color changes, input border and background changes!

/* const FormControl = styled.div`
  margin: 0.5rem 0;

  & {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    background: ${(props) => (props.invalid ? "salmon" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    background: #fd9898;
    border-color: red;
  }

  &.invalid label {
    color: red;
  }
`; */

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (enteredValue.trim().length >= 0) {
      setIsValidInput(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValidInput(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  /*   return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValidInput && "invalid"}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  ); */

  // DESCRIPTION: Scoped version of css and Javascript seperated approach to allpy dynamic styling:
  // 1. we use the "import styles from "./CourseInput.module.css";"
  // and access the css classes by generating dynamic access strings in the div: <div
  //    className={`${styles["form-control"]} ${
  //      !isValidInput && styles.invalid
  //    }`}
  //  >
  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${
          !isValidInput && styles.invalid
        }`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
