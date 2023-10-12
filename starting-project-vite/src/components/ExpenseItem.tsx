import './ExpenseItem.css';

interface ExpensesItemProps {
    date: Date
    title: string
    amount: number
}

function ExpenseItem({ date, title, amount }: ExpensesItemProps) {
    const month = firstLetterUppercase(date.toLocaleString(undefined, { month: 'long' }));
    const day = date.toLocaleString(undefined, { day: '2-digit' });

    function firstLetterUppercase(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{date.getFullYear()}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem
