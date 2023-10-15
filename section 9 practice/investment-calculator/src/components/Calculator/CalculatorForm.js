import { useState } from 'react';
import styles from './CalculateForm.module.css';


const initialUserInput = {
    'current-savings': 0,
    'yearly-contribution': 0,
    'expected-return': 0,
    duration: 0
}

const CalculatorForm = (props) => {
    const [userInput, setUserInput] = useState(initialUserInput);

    const calculateHandler = (e) => {
        e.preventDefault();
        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...

        const yearlyData = []; // per-year results

        let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
        const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
        const expectedReturn = +userInput['expected-return'] / 100;
        const duration = +userInput['duration'];
        let totalContribution = 0;
        let totalInterest = 0;

        // The below code calculates yearly results (total savings, interest etc)
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            totalContribution += yearlyContribution;
            totalInterest += yearlyInterest;
            yearlyData.push({
                // feel free to change the shape of the data pushed to the array!
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
                totalContribution: totalContribution,
                totalInterest: totalInterest
            });
        }

    
        props.onCalculate(yearlyData);

        // do something with yearlyData ...
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