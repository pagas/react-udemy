import { Expense } from '../types';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

interface ExpensesProps {
    expenses: Expense[]
}

function Expenses({ expenses }: ExpensesProps) {
    return (
        <div className='expenses'>
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} {...expense} />
            ))}
        </div >
    )
}

export default Expenses
