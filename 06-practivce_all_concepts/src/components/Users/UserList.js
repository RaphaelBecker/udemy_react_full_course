import React from "react";
import UserItem from "./UserItem";

const UserList = (props) => {
  if (props.items.length === 0) {
    return <h2>No Items</h2>;
  } else {
    return (
      <ul>
        {props.items.map((user) => (
          <UserItem
            key={user.id}
            userName={user.userName}
            userAge={user.userAge}
          ></UserItem>
        ))}
      </ul>
    );
  }
};

export default UserList;
