import NewExpenseForm from "./NewExpenseForm";
import AddExpenseForm from "./AddExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

function NewExpense(props) {
  const [activeComponent, setActiveComponent] = useState("addExpense");
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // here expenseData is passed up to parent Expense (App.js) the second time, components cannot be skipped when passing data:
    props.onSaveExpenseData(expenseData);
  };
  return (
    <div>
      {activeComponent === "addExpense" ? (
        <AddExpenseForm onSubmit={() => setActiveComponent("newExpense")} />
      ) : (
        <div className="new-expense">
          <NewExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={() => setActiveComponent("addExpense")}
          ></NewExpenseForm>
        </div>
      )}
    </div>
  );
}

export default NewExpense;
