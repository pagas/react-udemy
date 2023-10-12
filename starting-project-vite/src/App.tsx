import './App.css'
import Expenses from './components/Expenses/Expenses'
import { expenses } from './components/Expenses/expenses-data'

function App() {

  return (
      <Expenses expenses={expenses} />
  )
}

export default App
