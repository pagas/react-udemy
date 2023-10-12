import { Expense } from '../../types';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

interface ExpensesProps {
    expenses: Expense[]
}

const Expenses = ({ expenses }: ExpensesProps) => {
    return (
        <Card className='expenses'>
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} {...expense} />
            ))}
        </Card >
    )
}

export default Expenses
