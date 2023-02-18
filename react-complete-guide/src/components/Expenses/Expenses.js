import ExpenseItem from "./ExpenseItem.js";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilters.js";

import "./Expenses.css";
import "./ExpensesFilters.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";


function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() == filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );

  //   return (Object.values(props.items).map((item, idx) => {
  //     <ExpenseItem
  //             className="expenses"
  //             date={item.date}
  //             title={item.title}
  //             amount={item.amount}
  //             />
  //   }))

  // props.map(prop => {
  //     <ExpenseItem date={prop.date} title={prop.title} amount={prop.amount}  />
  // })
}

export default Expenses;
