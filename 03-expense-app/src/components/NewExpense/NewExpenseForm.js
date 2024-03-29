import "./NewExpenseForm.css";
import { useState } from "react";

function NewExpenseForm(props) {
  // state:
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const titleInputHandler = (event) => {
    setTitle(event.target.value);
    console.log(enteredTitle);
  };

  const amountInputHandler = (event) => {
    setAmount(event.target.value);
    console.log(enteredAmount);
  };

  const dateInputHandler = (event) => {
    setDate(event.target.value);
    console.log(enteredDate);
  };

  // prevent default behaviour: Reload page when submit button was pressed
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // Passing data from child to parent component (Bottom-up):
    // props attribute is linked (onSaveExpenseData={saveExpenseDataHandler}) in parent component via props (NewExpense.js):
    props.onSaveExpenseData(expenseData);
    // clear state after submit:
    setAmount("");
    setDate("");
    setTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // two way binding:
            value={enteredTitle}
            onChange={titleInputHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            // two way binding:
            value={enteredAmount}
            onChange={amountInputHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-01-01"
            // two way binding:
            value={enteredDate}
            onChange={dateInputHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="cancle" onClick={props.onCancel}>
          Cancle
        </button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
