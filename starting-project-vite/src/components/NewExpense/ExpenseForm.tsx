import './ExpenseForm.css'
import { FormEvent, useState } from 'react'
import { ExpenseFormData } from '../../types'
interface ExpenseForm {
    onSavingExpenseData: (expense: ExpenseFormData) => void
    onCancelForm: () => void
}

enum FieldIdentifier { title, amount, date }


const ExpenseForm = ({ onSavingExpenseData , onCancelForm}: ExpenseForm) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: 0,
    //     enteredDate: ""
    // })


    // const titleChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    //     setEnteredTitle(event.currentTarget.value);
    //     setUserInput(previous => {
    //         return {
    //             ...previous,
    //             enteredTitle: event.currentTarget.value
    //         }
    //     });
    // }

    // const amountChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    //     setEnteredAmount(parseFloat(event.currentTarget.value));
    //     setUserInput(previous => {
    //         return {
    //             ...previous,
    //             enteredAmount: parseFloat(event.currentTarget.value)
    //         }
    //     });
    // }

    // const dateChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    //     setEnteredDate(event.currentTarget.value)
    //     setUserInput(previouse => {
    //         return {
    //             ...previouse,
    //             enteredDate: event.currentTarget.value
    //         }
    //     });
    // }

    const inputChangeHandler = (identifier: FieldIdentifier, value: string) => {
        if (identifier === FieldIdentifier.title) {
            setEnteredTitle(value)
        } else if (identifier === FieldIdentifier.date) {
            setEnteredDate(value)
        } else {
            setEnteredAmount(parseFloat(value))
        }
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        onSavingExpenseData(expenseData);
        clearForm();
    }

    const clearForm = () => {
        setEnteredTitle("");
        setEnteredAmount(0);
        setEnteredDate("")
    }

    const clickCancelHandler = () => {
        onCancelForm();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                        value={enteredTitle}
                        onChange={(event) => inputChangeHandler(FieldIdentifier.title, event.target.value)} />
                </div>

                <div className="new-expense__control">
                    <label>Mount</label>
                    <input type="number"
                        min={0.01}
                        step={0.01}
                        value={enteredAmount}
                        onChange={(event) => inputChangeHandler(FieldIdentifier.amount, event.target.value)} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"
                        min="2019-01-10"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={(event) => inputChangeHandler(FieldIdentifier.date, event.target.value)} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={clickCancelHandler}>Cancel</button>
                <button type="submit">Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
