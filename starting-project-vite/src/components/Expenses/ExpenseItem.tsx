import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card'


interface ExpensesItemProps {
    date: Date
    title: string
    amount: number
}

const ExpenseItem = ({ date, title, amount }: ExpensesItemProps) => {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem
