import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // here expenseData is passed up to parent component (App.js) the second time, components cannot be skipped when passing data:
    props.onSaveExpenseData(expenseData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
      ></NewExpenseForm>
    </div>
  );
}

export default NewExpense;
