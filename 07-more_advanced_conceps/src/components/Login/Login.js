import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect demo:
  // runs after every component render live cycle:
  useEffect(() => {
    console.log("useEffect execution: Every render live cylce");
  });
  // runs after only after app startup component render live cycle:
  useEffect(() => {
    console.log("useEffect execution: Only after App startup");
  }, []);
  // runs after component render live cycle if enteredEmail changed:
  useEffect(() => {
    console.log("useEffect execution: on enteredEmail change");
  }, [enteredEmail]);

  // useEffect is a hook for handling "side effects". Side effects are: HTTP requests, key strokes, etc. In genereal to
  // execute a function in response of some other action!
  // WHAT NOT TO USE AS DEPENDENCY: updating functions from useState, "built-in" APIS, var or funcs outside the component
  // whenever enteredEmail or enteredPassword changed in the last component render cycle, setFOrmIsValid(..) will be executed:
  useEffect(() => {
    // debounce user key stroke inout: only check after 500 ms when user stops typing for valid input to save conputing
    const identifier = setTimeout(() => {
      console.log("validation check run");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);
    // clean up function before useEffect executes the above logic the next time! But not before the very first run.
    // Sets the timer for every key stroke to 0
    return () => {
      clearTimeout(identifier);
      console.log("restart debounce timer");
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
