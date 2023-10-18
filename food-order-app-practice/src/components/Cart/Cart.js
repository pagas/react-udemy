import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }]

    return (
        <Modal>
            <ul className={styles['cart-items']}>
                {cartItems.map(cartItem => (
                    <CartItem {...cartItem} />
                ))}
            </ul>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.34</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['buttons--alt']}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;