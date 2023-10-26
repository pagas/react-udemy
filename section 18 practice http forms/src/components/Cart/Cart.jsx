import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import styles from './Cart.module.css';
import modalStyles from '../UI/Modal.module.css';

import CartContext from '../../store/cart-context';
import { currencyFormatter } from '../../util/formating';
import Button from '../UI/Button';
import { UserProgressContext } from '../../store/UserProgressContext';

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { progress, hideCart, showCheckout } = useContext(UserProgressContext);
  const cartIsOpen = progress === 'cart';

  const totalAmount = currencyFormatter.format(cartContext.totalAmount);
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartContext.addItem(item);
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onRemove={() => cartItemRemoveHandler(item.id)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}
    </ul>
  );

  const openCheckoutHandler = () => {
    showCheckout();
  }

  return (
    <Modal className={styles.cart}
      open={cartIsOpen}
      onClose={cartIsOpen ? hideCart : null}>
      <h2>Your Cart</h2>
      {cartItems}
      <p className={styles['cart-total']}>

        <span> {totalAmount} </span>
      </p>
      <p className={modalStyles.modalActions}>
        <Button className={modalStyles.textButton} textOnly onClick={hideCart}>
          Close
        </Button>
        {hasItems && <Button onClick={openCheckoutHandler} >Go to Checkout</Button>}
      </p>
    </Modal>
  );
};

export default Cart;
