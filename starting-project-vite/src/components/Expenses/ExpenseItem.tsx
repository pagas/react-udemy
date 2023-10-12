import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card'
import { useState } from 'react';

interface ExpensesItemProps {
    date: Date
    title: string
    amount: number
}

const ExpenseItem = ({ date, title, amount }: ExpensesItemProps) => {

    const [_title, setTitle] = useState(title);

    const changeTitleHandler = () => {
        console.log('clicked change title')
        setTitle(previouse => previouse + '!')
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{_title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={changeTitleHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem
