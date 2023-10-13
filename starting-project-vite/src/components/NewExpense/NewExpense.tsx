import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
import { ExpenseFormData, Expense } from '../../types'
import { useState } from 'react'

interface NewExpenseProps {
    onAddExpense: (expense: Expense) => void
}

const NewExpense = ({ onAddExpense }: NewExpenseProps) => {
    const [showForm, setShowForm] = useState(false);
    const saveExpenseDataHandler = (data: ExpenseFormData) => {
        onAddExpense({
            ...data,
            id: Math.random().toString(),
        });
        setShowForm(false);
    }

    const addExpenseHandler = () => {
        setShowForm(true);
    }

    const cancelFormHandler = () => {
        setShowForm(false);
    }

    return (
        <div className="new-expense">
            {showForm
                ? <ExpenseForm onCancelForm={cancelFormHandler} onSavingExpenseData={saveExpenseDataHandler} />
                : <button onClick={addExpenseHandler}>Add New Expense</button>
            }
        </div>
    )
}

export default NewExpense
