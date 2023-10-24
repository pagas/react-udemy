import React, { useContext } from 'react';
import styles from './Header.module.css';
import logo from '../../../assets/logo.jpg';
import Button from '../../UI/Button';
import CartContext from '../../../store/cart-context';

const Header = () => {
    const { items } = useContext(CartContext);
    const totalQuantity = items.reduce((totalItems, item) => {
        return totalItems + item.amount;
    }, 0)

    return (
        <header id={styles['main-header']}>
            <div id={styles.title}>
                <h1>ReactFood</h1>
                <img src={logo} alt="A restaurant" />
            </div>
            <nav>
                <Button textOnly> Cart ({totalQuantity})</Button>
            </nav>
        </header>
    )
}

export default Header