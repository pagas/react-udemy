import { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expenses'
import { expenses } from './components/Expenses/expenses-data'
import NewExpense from './components/NewExpense/NewExpense'
import { Expense } from './types'

const App = () => {
  const [allExpenses, setAllExpenses] = useState(expenses);

  const onAddExpenseHandler = (expense: Expense) => {
    setAllExpenses(previouse => {
      previouse.push(expense);
      return previouse;
    })
  }

  console.log('alll regenerated!!!')

  return (
    <>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses expenses={allExpenses} />
    </>
  )
}

export default App
