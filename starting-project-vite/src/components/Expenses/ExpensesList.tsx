import { Expense } from '../../types';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'

interface ExpensesListProps {
    expenses: Expense[]
}

const ExpensesList = ({ expenses }: ExpensesListProps) => {
    return (
        <>
            {expenses.length === 0 && <h2 className='expenses-list__fallback'>No expenses found.</h2>}

            <ul className='expenses-list'>
                {expenses.length !== 0 && expenses.map((expense) => (
                    <ExpenseItem key={expense.id} {...expense} />
                ))}
            </ul>
        </>
    )
}

export default ExpensesList
