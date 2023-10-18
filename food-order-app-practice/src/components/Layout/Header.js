import styles from './Header.module.css';
import meals from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {

    const openCart = () => {
        onShowCart();
    }

    return (
        <>
            <header className={styles.header}>
                <h1>React Meals</h1>

                <HeaderCartButton onClick={openCart}>Cart</HeaderCartButton>
            </header>
            <div className={styles['main-image']}>
                <img src={meals} alt="A table fool of delicious food!" />
            </div>
        </>
    )
}

export default Header;