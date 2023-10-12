import './App.css'
import Expenses from './components/Expenses/Expenses'
import { expenses } from './components/Expenses/expenses-data'

const App = () => {

  return (
    <Expenses expenses={expenses} />
  )
}

export default App
