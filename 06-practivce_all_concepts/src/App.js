import React from "react";
import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const INITIAL_USERS = [
  {
    id: "a1",
    userName: "Test User 1",
    userAge: "23",
  },
  {
    id: "a2",
    userName: "Test User 2",
    userAge: "25",
  },
];

function App() {
  const [currentUsers, setUsers] = useState(INITIAL_USERS);

  const addUserHandler = (user) => {
    // This is a clean way to update an array by state by using a previous snapshot of state:
    // setExpenses takes a function as argument. react pics automatically prevUsers
    setUsers((prevUsers) => {
      console.log("This is App.js addUserHandler");
      return [...prevUsers, user];
    });
  };

  const saveUserHandler = (enteredUser) => {
    const user = {
      ...enteredUser,
      id: Math.random().toString(),
    };
    // This log will show up when onSaveExpenseData is called in child component as it is NewExpense bootom-up to App.js linked:
    console.log("This is App.js saveUserHandler");
    addUserHandler(user);
  };

  return (
    <div>
      <AddUser onAddUser={saveUserHandler} />
      <UserList users={currentUsers} />
    </div>
  );
}

export default App;
