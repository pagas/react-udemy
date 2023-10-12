import './App.css'
import ExpenseItem from './components/ExpenseItem'
import { expenses } from './components/expenses-data'


function App() {

  return (
    <>
      {expenses.map((expense) => (        
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </>
  )
}

export default App
