import { useContext } from 'react';

// import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';
import { currencyFormatter } from '../../../util/formating';
import Button from '../../UI/Button';
import CartContext from '../../../store/cart-context';

const MealItem = ({ meal }) => {
  const cartContext = useContext(CartContext);
  const { name, description, price, image } = meal;
  
  const addToCartHandler = () => {
    meal.amount = 1;
    cartContext.addItem(meal);
  };

  return (
    <li className={styles['meal-item']}>
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />

        <div>
          <h3>{name}</h3>
          <p className={styles['meal-item-price']}>{currencyFormatter.format(price)}</p>
          <p className={styles['meal-item-description']}>{description}</p>
        </div>
        <div className={styles['meal-item-actions']}>
          {/* <MealItemForm onAddToCart={addToCartHandler} /> */}
          <Button onClick={addToCartHandler}>Add to Cart</Button>
        </div>

      </article>

    </li>
  );
};

export default MealItem;
