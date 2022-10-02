import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // This log will shop up when onSaveExpenseData is called in child component as it is NewExpense bootom-up to App.js linked:
    console.log(expenseData);
  };

  // binded bottom up from NewExpense to App via onSaveExpenseData={saveExpenseDataHandler}.
  // -> If onSaveExpenseData is called in child (NewExpense), saveExpenseDataHandlerwill be called here
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onSaveExpenseData={saveExpenseDataHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
