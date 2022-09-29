import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ul>
        {props.expenses.map((expense) => (
          <ExpenseItem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          ></ExpenseItem>
        ))}
      </ul>
    </Card>
  );
}

export default Expenses;
