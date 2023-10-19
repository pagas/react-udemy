import styles from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';


const HeaderCartButton = ({ children, onClick }) => {
    const [animationRunning, setAnimationRunning] = useState(false);
    const { items } = useContext(CartContext);
    const totalAmount = items.reduce((current, item) => {
        return current + item.amount;
    }, 0)

    const btnStyles = `${styles.button} ${animationRunning ? styles.bump : ''}`;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setAnimationRunning(true)
        const timer = setTimeout(() => {
            setAnimationRunning(false)
        }, 300);
        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return (
        <button className={btnStyles} onClick={onClick}>
            <span className={styles.icon}><CartIcon /></span>
            <span>Your cart</span>
            <span className={styles.badge}>{totalAmount}</span>
        </button>
    )
}

export default HeaderCartButton;