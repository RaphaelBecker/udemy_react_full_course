import React from "react";
import Card from "../UI/Card";

const UserItem = (props) => {
  return (
    <li>
      <Card>
        <h2>{props.userName}</h2>
        <h3>{props.userAge}</h3>
      </Card>
    </li>
  );
};

export default UserItem;
