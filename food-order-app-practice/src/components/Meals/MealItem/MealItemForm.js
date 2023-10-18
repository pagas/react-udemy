import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = ({ name, description, price }) => {

    return (
        <form className={styles.form}>
            <Input label="Amount" input={{
                id: 'amount',
                type: "number",
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }} />
            <button onClick="">+ Add</button>
        </form>
    )
}

export default MealItemForm;