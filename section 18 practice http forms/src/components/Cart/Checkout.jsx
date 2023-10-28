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
import Error from '../UI/Error';

const requestConfig = {
    method: 'POST'
}

const Checkout = () => {
    const { totalAmount, items, clearCart } = useContext(CartContext);
    const { isLoading: isSending, error, data, sendRequest, clearData } = useHttp(
        'http://localhost:3000/orders', requestConfig
    );

    const { hideCheckout, progress } = useContext(UserProgressContext);
    const checkoutHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const customerData = Object.fromEntries(formData.entries());

        await sendRequest({
            order: {
                customer: customerData,
                items
            }
        });
    }

    const handleFinish = () => {
        clearCart();
        clearData();
        hideCheckout();
    }

    let actionsContent = (<>
        <Button textOnly className={modalStyles.textButton} onClick={hideCheckout}>Close</Button>
        <Button type="submit">Submit Order</Button>
    </>);

    if (isSending) {
        actionsContent = <span>Sending order data...</span>
    }

    if (data && !error) {
        return (<Modal
            open={progress === 'checkout'}
            onClose={handleFinish}
        >
            <h2>Succeess</h2>
            <p>Your order was submitted successfully</p>
            <p>We will get back to you with more datails via email within the next few minutes</p>
            <div className='modal-actions'>
                <Button onClick={handleFinish}>Okay</Button>
            </div>
        </Modal>)
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

                {error && <Error title="Failed to submit order" message={error} />}

                <p className={modalStyles.modalActions}>
                    {actionsContent}
                </p>

            </form>
        </Modal>
    )
}

export default Checkout
