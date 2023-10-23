import React from 'react';
import styles from './Header.module.css';
import logo from '../../../assets/logo.jpg';

const Header = () => {
    return (
        <header id={styles['main-header']}>
            <div id={styles.title}>
                <h1>ReactFood</h1>
                <img src={logo} alt="A restaurant" />
            </div>
            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
    )
}

export default Header