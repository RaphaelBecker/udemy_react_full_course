import React from "react";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefaut();
    console.log("Clicked Submit");
  };

  return (
    <form onSubmit={addUserHandler}>
      <div className={styles["form-control"]}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="username" type="number" />
      </div>
      <button>Add User</button>
      <button>Cancle</button>
    </form>
  );
};

export default AddUser;
