import { useContext } from 'react';

// import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';
// import CartContext from '../../../store/cart-context';

const MealItem = ({ price, description, name, image }) => {
  // const cartCtx = useContext(CartContext);

  const formatedPrice = `$${price.toFixed(2)}`;

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
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />

        <div>
          <h3>{name}</h3>
          <p className={styles['meal-item-price']}>{formatedPrice}</p>
          <p className={styles['meal-item-description']}>{description}</p>
        </div>
        <div className={styles['meal-item-actions']}>
          {/* <MealItemForm onAddToCart={addToCartHandler} /> */}
          <button>Add to Cart</button>
        </div>

      </article>

    </li>
  );
};

export default MealItem;
