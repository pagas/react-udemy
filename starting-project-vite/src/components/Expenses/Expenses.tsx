import { Expense } from '../../types';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css'
import { useState } from 'react';
import ExpensesList from './ExpensesList';

interface ExpensesProps {
    expenses: Expense[]
}

const Expenses = ({ expenses }: ExpensesProps) => {
    const [filterYear, setFilterYear] = useState("2020");

    const changeFilterHandler = (year: string) => {
        setFilterYear(year);
    }

    const filteredExpenses = expenses.filter(expense => expense.date.getFullYear().toString() === filterYear)

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filterYear} onChangeFilter={changeFilterHandler} />
            <ExpensesList expenses={filteredExpenses} />
        </Card >
    )
}

export default Expenses
