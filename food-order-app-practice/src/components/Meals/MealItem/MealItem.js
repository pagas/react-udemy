import { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';


const Meal = ({ name, description, price, id }) => {
    const priceFormated = `$${price.toFixed(2)}`;
    const { addItem } = useContext(CartContext)

    const addItemHandler = (amount) => {
        addItem({
            id,
            name,
            price,
            amount
        })
    }

    return (
        <li className={styles.meal}>
            <div>
                <h3> {name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{priceFormated}</div>
            </div>
            <div >
                <MealItemForm id={id} onAddItem={addItemHandler} />
            </div>
        </li>
    )
}

export default Meal;