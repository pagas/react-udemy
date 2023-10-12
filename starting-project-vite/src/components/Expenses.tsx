import { Expense } from '../types';
import Card from './Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

interface ExpensesProps {
    expenses: Expense[]
}

function Expenses({ expenses }: ExpensesProps) {
    return (
        <Card className='expenses'>
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} {...expense} />
            ))}
        </Card >
    )
}

export default Expenses
