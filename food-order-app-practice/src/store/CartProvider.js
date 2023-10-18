import React, { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    const [items, setItems] = useState([]);


    const addItem = (item) => {
        setItems(prev => {
            return [...prev, item]
        });
    };

    const removeItem = (itemId) => {
        setItems(prev => {
            return prev.filter(item => item.id !== itemId)
        })
    };

    return (
        <CartContext.Provider value={{
            items,
            addItem,
            totalAmount: 0,
            removeItem
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;