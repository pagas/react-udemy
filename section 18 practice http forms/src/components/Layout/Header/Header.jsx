import React, { useContext } from 'react';
import styles from './Header.module.css';
import logo from '../../../assets/logo.jpg';
import Button from '../../UI/Button';
import CartContext from '../../../store/cart-context';
import { UserProgressContext } from '../../../store/UserProgressContext';


const Header = () => {
    const { items } = useContext(CartContext);
    const { showCart } = useContext(UserProgressContext);

    const totalQuantity = items.reduce((totalItems, item) => {
        return totalItems + item.amount;
    }, 0)

    const openCartHandler = () => {
        showCart();
    }

    return (
        <header id={styles['main-header']}>
            <div id={styles.title}>
                <h1>ReactFood</h1>
                <img src={logo} alt="A restaurant" />
            </div>
            <nav>
                <Button textOnly onClick={openCartHandler}> Cart ({totalQuantity})</Button>
            </nav>
        </header>
    )
}

export default Header