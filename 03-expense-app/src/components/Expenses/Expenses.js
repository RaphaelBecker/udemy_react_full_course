import React, { useState } from "react";
import ExpenseList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const [filterYear, setYear] = useState("2020");

  const onFilterByYearHandler = (selectedYear) => {
    setYear(selectedYear.target.value);
    console.log(selectedYear.target.value);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/* two way binding: */}
        <ExpensesFilter
          onSelectYear={onFilterByYearHandler}
          filterYear={filterYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {<ExpenseList items={filteredExpenses} />}
      </Card>
    </div>
  );
}

export default Expenses;
