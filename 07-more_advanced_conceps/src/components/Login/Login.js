import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "EMAIL_USER_INPUT") {
    return { value: action.value, isValid: action.value.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const enteredPasswordReducer = (state, action) => {
  if (action.type === "SET_PW") {
    return { value: action.value, isValid: action.value.trim().length >= 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length >= 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [enteredPasswordState, dispatchenteredPassword] = useReducer(
    enteredPasswordReducer,
    {
      value: "",
      isValid: null,
    }
  );

  /*  // ONLY for useEffect demo:
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
  }, [emailState.value]);

  // useEffect is a hook for handling "side effects". Side effects are: HTTP requests, key strokes, etc. In genereal to
  // execute a function in response of some other action!
  // WHAT NOT TO USE AS DEPENDENCY: updating functions from useState, "built-in" APIS, var or funcs outside the component
  // whenever enteredEmail or enteredPassword changed in the last component render cycle, setFOrmIsValid(..) will be executed:
  useEffect(() => {
    // debounce user key stroke inout: only check after 500 ms when user stops typing for valid input to save conputing
    const identifier = setTimeout(() => {
      console.log("validation check run");
      setFormIsValid(emailState.isValid && enteredPassword.trim().length > 6);
    }, 500);
    // clean up function before useEffect executes the above logic the next time! But not before the very first run.
    // Sets the timer for every key stroke to 0
    return () => {
      clearTimeout(identifier);
      console.log("restart debounce timer");
    };
  }, [emailState.value, enteredPassword]);
   */

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "EMAIL_USER_INPUT", value: event.target.value });

    setFormIsValid(emailState.isValid && enteredPasswordState.formIsValid);
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    dispatchenteredPassword({ type: "SET_PW", value: event.target.value });

    setFormIsValid(enteredPasswordState.isValid && emailState.isValid);
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchenteredPassword({ type: "INPUT_BLUR" });
    // setPasswordIsValid(enteredPasswordState.isValid);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPasswordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            enteredPasswordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPasswordState.value}
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
