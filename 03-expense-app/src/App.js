import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Book",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Toilet",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Pillow",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Can",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [currentExpenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    // This is a clean way to update an array by state by using a previous snapshot of state:
    // setExpenses takes a function as argument. react pics automatically prevExpenses
    setExpenses((prevExpenses) => {
      console.log("This is App.js addExpenseHandler");
      return [expense, ...prevExpenses];
    });
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // This log will show up when onSaveExpenseData is called in child component as it is NewExpense bootom-up to App.js linked:
    console.log("This is App.js saveExpenseDataHandler");
    addExpenseHandler(expenseData);
  };

  // binded bottom up from NewExpense to App via onSaveExpenseData={saveExpenseDataHandler}.
  // -> If onSaveExpenseData is called in child (NewExpense), saveExpenseDataHandlerwill be called here
  return (
    <div>
      <NewExpense onSaveExpenseData={saveExpenseDataHandler}></NewExpense>
      <Expenses items={currentExpenses}></Expenses>
    </div>
  );
};

export default App;
