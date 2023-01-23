import React from "react";

const Input = (props) => {
  return (
    <div
      className={`${props.cssClass.control} ${
        props.isValidState === false ? props.cssClass.invalid : ""
      }`}
    >
      <label htmlFor={props.type}>{props.lable}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.changeHandler}
        onBlur={props.validateHandler}
      />
    </div>
  );
};

export default Input;
