import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const [filterYear, setYear] = useState("2020");

  const onFilterByYearHandler = (selectedYear) => {
    setYear(selectedYear.target.value);
    console.log(selectedYear.target.value);
  };

  let expenseContent = <p>No expenses matching selected year</p>;

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  if (filteredExpenses.length > 0) {
    expenseContent = (
      <ul>
        {filteredExpenses.map((expense) => (
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

  return (
    <div>
      <Card className="expenses">
        {/* two way binding: */}
        <ExpensesFilter
          onSelectYear={onFilterByYearHandler}
          filterYear={filterYear}
        />
        {expenseContent}
      </Card>
    </div>
  );
}

export default Expenses;
