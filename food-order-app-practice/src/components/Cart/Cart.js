import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }]

    return (
        <div>
            <ul className={styles['cart-itmes']}>
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
        </div>
    )
}

export default Cart;