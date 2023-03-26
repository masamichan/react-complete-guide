import "./App.css";
import ExpenseItem from "./components/ExpensItem";

function App() {
  const expnese = [
    { title: "Car Insurance", amount: 294.67, date: Date(2021, 2, 28) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
