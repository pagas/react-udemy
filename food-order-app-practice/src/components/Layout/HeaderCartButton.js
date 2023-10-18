import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';


const HeaderCartButton = ({ children, onClick }) => {
    const { items } = useContext(CartContext);
    const totalAmount = items.reduce((current, item) => {
        return current + item.amount;
    }, 0)

    return (
        <button className={styles.button} onClick={onClick}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your cart</span>
            <span className={styles.badge}>{totalAmount}</span>
        </button>
    )
}

export default HeaderCartButton;