import React, { useContext } from 'react'
import styles from './Checkout.module.css';
import modalStyles from '../UI/Modal.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import { currencyFormatter } from '../../util/formating';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { UserProgressContext } from '../../store/UserProgressContext';
import useHttp from '../../hooks/use-http';

const Checkout = () => {
    const { totalAmount, items } = useContext(CartContext);
    const { isLoading, error, sendRequest } = useHttp(
        'http://localhost:3000/orders',
        {
            method: 'POST',
            body: {
                order: {
                    // customer: customerData,
                    // items
                }
            }
        }
    );


    const { hideCheckout, progress } = useContext(UserProgressContext);
    const checkoutHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const customerData = Object.fromEntries(formData.entries());

        await sendRequest();

        console.log('ordered!')

        hideCheckout();
    }
    return (
        <Modal open={progress === 'checkout'}
            onClose={progress === 'checkout' ? hideCheckout : null}>
            <form onSubmit={checkoutHandler}>
                <h2>Checkout</h2>
                <p>Total Amount:  {currencyFormatter.format(totalAmount)}</p>

                <Input label="Full Name" id="name" />
                <Input label="Email" id="email" type="email" />
                <Input label="Street" id="street" />

                <div className={styles['control-row']}>
                    <Input label="Post code" id="postal-code" />
                    <Input label="City" id="city" />
                </div>

                <p className={modalStyles.modalActions}>
                    <Button textOnly className={modalStyles.textButton} onClick={hideCheckout}>Close</Button>
                    <Button type="submit">Submit Order</Button>
                </p>

            </form>
        </Modal>
    )
}

export default Checkout
