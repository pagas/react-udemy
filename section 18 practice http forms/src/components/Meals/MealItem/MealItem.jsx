import { useContext } from 'react';

// import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';
// import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  // const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    // cartCtx.addItem({
    //   id: props.id,
    //   name: props.name,
    //   amount: amount,
    //   price: props.price
    // });
  };

  return (
    <li className={styles['meal-item']}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles['meal-item-description']}>{props.description}</div>
        <div className={styles['meal-item-price']}>{price}</div>
      </div>
      <div className={styles['meal-item-actions']}>
        {/* <MealItemForm onAddToCart={addToCartHandler} /> */}
      </div>
    </li>
  );
};

export default MealItem;
