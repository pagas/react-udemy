import './App.css'
import Expenses from './components/Expenses'
import { expenses } from './components/expenses-data'

function App() {

  return (
      <Expenses expenses={expenses} />
  )
}

export default App
