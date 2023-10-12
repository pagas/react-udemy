import './ExpenseForm.css'
import { FormEvent, useState } from 'react'
// interface NewExpenseProps {
// }

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState("");
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: 0,
    //     enteredDate: ""
    // })


    const titleChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredTitle(event.currentTarget.value);
        // setUserInput(previous => {
        //     return {
        //         ...previous,
        //         enteredTitle: event.currentTarget.value
        //     }
        // });
    }

    const amountChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredAmount(parseFloat(event.currentTarget.value));
        // setUserInput(previous => {
        //     return {
        //         ...previous,
        //         enteredAmount: parseFloat(event.currentTarget.value)
        //     }
        // });
    }

    const dateChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredDate(event.currentTarget.value)
        // setUserInput(previouse => {
        //     return {
        //         ...previouse,
        //         enteredDate: event.currentTarget.value
        //     }
        // });
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Mount</label>
                    <input type="number"
                        min={0.01}
                        step={0.01}
                        value={enteredAmount}
                        onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"
                        min="2019-01-10"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
