import React, { useContext } from 'react'
import styles from './Checkout.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import { currencyFormatter } from '../../util/formating';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { UserProgressContext } from '../../store/UserProgressContext';

const Checkout = () => {
    const { totalAmount } = useContext(CartContext);
    const { hideCheckout, progress } = useContext(UserProgressContext);
    const checkoutHandler = (e) => {
        e.preventDefault();
        hideCheckout();
    }
    return (
        <Modal open={progress === 'checkout'}>
            <form>
                <h2>Checkout</h2>
                <p>Total Amount:  {currencyFormatter.format(totalAmount)}</p>


                <Input label="Full Name" id="fullname" />
                <Input label="Email" id="email" type="email" />
                <Input label="Street" id="street" />

                <div className={styles['control-row']}>
                    <Input label="Post code" id="postcode" />
                    <Input label="City" id="city" />
                </div>

                <p className={styles.modalActions}>
                    <Button textOnly className={styles.textButton} onClick={hideCheckout}>Close</Button>
                    <Button type="submit" onClick={checkoutHandler} >Submit Order</Button>
                </p>

            </form>
        </Modal>
    )
}

export default Checkout