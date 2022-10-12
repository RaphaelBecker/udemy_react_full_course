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

  return (
    <div>
      <Card className="expenses">
        {/* two way binding: */}
        <ExpensesFilter
          onSelectYear={onFilterByYearHandler}
          filterYear={filterYear}
        />
        <ul>
          {props.items.map((expense) => (
            <ExpenseItem
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            ></ExpenseItem>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default Expenses;
