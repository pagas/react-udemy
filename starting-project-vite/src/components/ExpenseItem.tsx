import './ExpenseItem.css';

interface ExpensesItemProps {
    date: Date
    title: string
    amount: number
}

function ExpenseItem({date, title, amount}: ExpensesItemProps) {
    return (
        <div className='expense-item'>
            <div>{date.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem
