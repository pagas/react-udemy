
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';
import { useRef, useState } from 'react';


const MealItemForm = ({ id, onAddItem }) => {

    const amountInputRef = useRef(null);
    const [amountIsValid, setAmountIsValid] = useState(true);

    const addHandler = (e) => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value();
        const enteredAmountNumber = +amountInputRef.current.value();
        if (enteredAmount.trim().length === 0
            || enteredAmountNumber < 1
            || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return;
        }

        onAddItem(enteredAmountNumber);
        setAmountIsValid(true)
        amountInputRef.current.reset();
    }

    return (
        <form className={styles.form} onSubmit={addHandler}>
            <Input ref={amountInputRef} label="Amount" input={{
                id: 'amount_' + id, // this changed!
                type: "number",
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button type="submit">+ Add</button>
            {!amountIsValid && <p>Please enter valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm;