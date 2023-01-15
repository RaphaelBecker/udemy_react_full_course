import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No expenses matching selected year
      </h2>
    );
  } else {
    return (
      <ul className="expense-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          ></ExpenseItem>
        ))}
      </ul>
    );
  }
};

export default ExpenseList;
