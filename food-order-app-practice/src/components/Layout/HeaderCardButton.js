import styles from './HeaderCardButton.module.css';
import CartIcon from '../Card/CardIcon';


const HeaderCardButton = ({ children, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <span className={styles.icon}><CartIcon /></span>     
            <span>Your cart</span>
            <span className={styles.badge}> 3</span>
        </button>
    )
}

export default HeaderCardButton;