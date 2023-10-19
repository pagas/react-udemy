import { useContext } from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

const Cart = ({ onClose }) => {
    const {items, totalAmount} = useContext(CartContext);
    const hasItems = items.length > 0;

    const closeHandler = () => {
        onClose()
    }

    return (
        <Modal onClose={closeHandler}>
            <ul className={styles['cart-items']}>
                {items.map(cartItem => (
                    <CartItem {...cartItem} />
                ))}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{`$${totalAmount.toFixed(2)}`}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['buttons--alt']} onClick={closeHandler}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;