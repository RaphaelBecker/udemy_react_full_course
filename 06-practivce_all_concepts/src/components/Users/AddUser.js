import React, { useState } from "react"; // useState Hook!
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredName, setenteredName] = useState("");
  const [enteredAge, setenteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefaut();
    if (enteredName.trim().legth === 0 || enteredAge.trim().length === 0) {
      return;
    }
    // "+" casts String to a number
    if (+enteredAge < 1) {
      return;
    }

    console.log(enteredName, enteredAge);
    const user = {
      enteredName,
      enteredAge,
    };

    props.addUser(user);
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
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          // two way binding:
          value={enteredName}
          onChange={nameInputHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
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
