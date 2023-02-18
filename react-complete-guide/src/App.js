import './App.css';

import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

import Expenses from './components/Expenses/Expenses';


const DUMMY_EXPENSES = [
  {id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28)},
  {id: 'e2', title: 'Car Insurancesdf2', amount: 294.6, date: new Date(2021, 2, 28)},
  {id: 'e3', title: 'Car Insurancesdfsdf3', amount: 294, date: new Date(2021, 2, 28)}

]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
        {/* <Expenses props={expenses}/> */}
      </header>
    </div>
  );
}

export default App;
