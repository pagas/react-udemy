import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = ({ name, description, price, id }) => {

    return (
        <form className={styles.form}>
            <Input label="Amount" input={{
                id: 'amount_' + id, // this changed!
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