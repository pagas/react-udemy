import styles from './CartItem.module.css';
import { currencyFormatter } from '../../util/formating';

const CartItem = ({ name, amount, price, onRemove, onAdd }) => {

  return (
    <li className={styles['cart-item']}>

      <p>
        {name} - {amount} - {currencyFormatter.format(price)}
      </p>

      <p className={styles['cart-item-actions']}>
        <button onClick={onRemove}>−</button>
        <span>{amount}</span>
        <button onClick={onAdd}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
