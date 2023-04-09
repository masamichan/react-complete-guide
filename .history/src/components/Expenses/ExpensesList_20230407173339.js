import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  let expensesContent = <p>No expenses found.</p>;

  if (props.item.length > 0) {
    expensesContent = props.item.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
};

export default ExpenseList;
