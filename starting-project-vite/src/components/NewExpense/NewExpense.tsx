import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
import { ExpenseFormData, Expense } from '../../types'

interface NewExpenseProps {
    onAddExpense: (expense: Expense) => void
}

const NewExpense = ({onAddExpense}: NewExpenseProps) => {
    const saveExpenseDataHandler = (data: ExpenseFormData) => {
        onAddExpense({
            ...data,
            id: Math.random().toString(),
        });
    }
    
    return (
        <div className="new-expense">
            <ExpenseForm onSavingExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense
