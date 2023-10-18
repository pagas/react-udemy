import styles from './Header.module.css';
import meals from '../../assets/meals.jpg';
import HeaderCardButton from './HeaderCardButton';

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>React Meals</h1>
                
                <HeaderCardButton>Cart</HeaderCardButton>
            </header>
            <div className={styles['main-image']}>
                <img src={meals} alt="A table fool of delicious food!" />
            </div>
        </>
    )
}

export default Header;