import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

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

  // ONLY for useEffect demo: --------------------------------
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
  //-----------------------------------------------------------

  // optimize useEffect() by only givin the change dependency in ",[]" the only val which should be checked for at +++
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = enteredPasswordState;

  // useEffect is a hook for handling "side effects". Side effects are: HTTP requests, key strokes, etc. In genereal to
  // execute a function in response of some other action!
  // WHAT NOT TO USE AS DEPENDENCY: updating functions from useState, "built-in" APIS, var or funcs outside the component
  // whenever enteredEmail or enteredPassword changed in the last component render cycle, setFOrmIsValid(..) will be executed:
  useEffect(() => {
    // debounce user key stroke inout: only check after 500 ms when user stops typing for valid input to save conputing
    const identifier = setTimeout(() => {
      console.log("validation check run");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    // clean up function before useEffect executes the above logic the next time! But not before the very first run.
    // Sets the timer for every key stroke to 0
    return () => {
      clearTimeout(identifier);
      console.log("restart debounce timer");
    };
  }, [emailIsValid, passwordIsValid]); // +++

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "EMAIL_USER_INPUT", value: event.target.value });

    setFormIsValid(emailIsValid && passwordIsValid);
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
        <Input
          label="E-Mail"
          cssClass={classes}
          isValidState={emailState.isValid}
          type="email"
          id="email"
          value={emailState.value}
          changeHandler={emailChangeHandler}
          validateHandler={validateEmailHandler}
        ></Input>

        <Input
          lable="Password"
          cssClass={classes}
          isValidState={emailState.isValid}
          type="password"
          id="password"
          value={enteredPasswordState.value}
          changeHandler={passwordChangeHandler}
          validateHandler={validatePasswordHandler}
        ></Input>
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
