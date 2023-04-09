import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found.</p>;

  if (props.item.length > 0) {
    expensesContent =
  };
  return
  <ul className="expense-list">
  { props.item.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>
};

export default ExpensesList;
