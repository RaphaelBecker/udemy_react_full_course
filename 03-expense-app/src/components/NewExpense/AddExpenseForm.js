import "./AddExpenseForm.css";

function AddExpenseForm({ onSubmit }) {
  return (
    <div className="add-expense">
      <p>Do you want to add a new expense?</p>
      <button onClick={onSubmit}>Add Expense</button>
    </div>
  );
}

export default AddExpenseForm;
