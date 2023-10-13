import { Expense } from '../../types';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import { useState } from 'react';

interface ExpensesProps {
    expenses: Expense[]
}

const Expenses = ({ expenses }: ExpensesProps) => {
    const [filterYear, setFilterYear] = useState("2020");

    const changeFilterHandler = (year: string) => {
        setFilterYear(year);
    }

    expenses = expenses.filter(expense => expense.date.getFullYear().toString() === filterYear)

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filterYear} onChangeFilter={changeFilterHandler} />
            
            {expenses.map((expense) => (
                <ExpenseItem key={expense.id} {...expense} />
            ))}
        </Card >
    )
}

export default Expenses
