import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="expenses-list__fallback">
        <h2>No Expenses Found</h2>
      </div>
    );
  }

  if (props.items.length > 0) {
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
  }
};
export default ExpensesList;
