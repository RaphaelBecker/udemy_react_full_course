import React, { useState } from "react"; // useState Hook!
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredName, setenteredName] = useState("");
  const [enteredAge, setenteredAge] = useState("");

  const submitHandler = (event) => {
    // prevent default behaviour: Reload page when submit button was pressed
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    // "+" casts String to a number
    if (+enteredAge < 1) {
      return;
    }

    console.log(enteredName, enteredAge);
    const user = {
      userName: enteredName,
      userAge: enteredAge,
    };

    props.onAddUser(user);
    setenteredName("");
    setenteredAge("");
  };

  const nameInputHandler = (event) => {
    setenteredName(event.target.value);
    console.log(enteredName);
  };

  const ageInputHandler = (event) => {
    setenteredAge(event.target.value);
    console.log(enteredAge);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="userName">Username</label>
        <input
          id="userName"
          type="text"
          // two way binding:
          value={enteredName}
          onChange={nameInputHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="userAge"
          type="number"
          // two way binding:
          value={enteredAge}
          onChange={ageInputHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
