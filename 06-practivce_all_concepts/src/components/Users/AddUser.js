import React from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefaut();
    console.log("Clicked Submit");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input id="username" type="number" />
          <Button>Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
