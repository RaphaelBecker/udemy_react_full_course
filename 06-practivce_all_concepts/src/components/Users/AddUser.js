import React, { useState } from "react"; // useState Hook!
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setenteredName] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const [currentError, setCurrentErrorState] = useState(false);

  const submitHandler = (event) => {
    // prevent default behaviour: Reload page when submit button was pressed
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setCurrentErrorState({
        title: "Empty",
        message: "Please enter Name and Age",
      });
      return;
    }
    // "+" casts String to a number
    if (+enteredAge < 1) {
      setCurrentErrorState({
        title: "Age Error",
        message: "Please enter a age > 1",
      });
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

  const clearErrorState = () => {
    setCurrentErrorState(false);
  };

  return (
    <div>
      {currentError && (
        <ErrorModal
          onClearError={clearErrorState}
          title={currentError.title}
          message={currentError.message}
        />
      )}

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
    </div>
  );
};

export default AddUser;
