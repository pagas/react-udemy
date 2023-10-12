import './App.css'
import Expenses from './components/Expenses/Expenses'
import { expenses } from './components/Expenses/expenses-data'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {

  return (
    <>
      <NewExpense />
      <Expenses expenses={expenses} />
    </>
  )
}

export default App
