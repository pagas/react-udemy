import { useState } from 'react';
import styles from './CalculateForm.module.css';


const initialUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10
}

const CalculatorForm = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);

    const calculateHandler = (e) => {
        e.preventDefault();
        props.onCalculate(userInput);
    };

    const changeHandler = (e, inputField) => {
        setUserInput(prev => {
            return { ...prev, [inputField]: e.target.value }
        })
    }

    const resetHandler = () => {
        setUserInput(initialUserInput);
    }

    return (
        <form className={styles.form} onSubmit={calculateHandler}>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        type="number"
                        value={userInput['current-savings']}
                        onChange={(e) => changeHandler(e, "current-savings")}
                        id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input 
                        type="number"
                        value={userInput['yearly-contribution']}
                        onChange={(e) => changeHandler(e, "yearly-contribution")}
                        id="yearly-contribution" />
                </p>
            </div>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input 
                        type="number"
                        value={userInput['expected-return']}
                        onChange={(e) => changeHandler(e, "expected-return")}
                        id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input 
                        type="number"
                        value={userInput['duration']}
                        onChange={(e) => changeHandler(e, "duration")}
                        id="duration" />
                </p>
            </div>
            <p className={styles.actions}>
                <button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>
    )
}

export default CalculatorForm;