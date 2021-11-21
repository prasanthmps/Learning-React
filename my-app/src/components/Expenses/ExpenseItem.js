import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {

    // const clickHandler = () => {
    //   console.log("clicked");
    // };
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      {/* <button onClick={ clickHandler} >Change Name</button> */}
    </Card>
    </li>
  );
}
export default ExpenseItem;
