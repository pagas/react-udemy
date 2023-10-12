import './ExpenseDate.css'

interface ExpenseDateProps {
    date: Date
}

const ExpenseDate = ({ date }: ExpenseDateProps) => {
    const locale = undefined; // use default browser locale
    const month = date.toLocaleString(locale, { month: 'long' });
    const day = date.toLocaleString(locale, { day: '2-digit' });

    function firstLetterUppercase(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{firstLetterUppercase(month)}</div>
            <div className='expense-date__year'>{date.getFullYear()}</div>
            <div className='expense-date__day'>{day}</div>
        </div >
    )
}

export default ExpenseDate
