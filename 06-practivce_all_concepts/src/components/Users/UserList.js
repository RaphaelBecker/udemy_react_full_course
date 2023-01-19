import React from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  if (props.users.length === 0) {
    return <h2>No Items</h2>;
  } else {
    return (
      <Card className={styles.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              User: {user.userName} | Age: {user.userAge}
            </li>
          ))}
        </ul>
      </Card>
    );
  }
};

export default UserList;
