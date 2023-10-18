import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            let updateItems = [...state.items, action.item];
            let updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

            return { items: updateItems, totalAmount: updatedTotalAmount }
        } case 'REMOVE_ITEM': {
            const foundItem = state.items.find(item => item.id === action.id)
            const updateItems = state.items.filter(item => item.id !== action.id)
            let updatedTotalAmount = state.totalAmount - foundItem.price * foundItem.amount;

            return { items: updateItems, totalAmount: updatedTotalAmount }
        } default:
    }

    return defaultCartState;
}

const totalAmount = (items) => items.reduce((current, item) => {
    return current + item.amount;
}, 0)


const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        dispatchCart({ type: 'ADD_ITEM', item })
    }

    const removeItemHandler = (id) => {
        dispatchCart({ type: 'REMOVE_ITEM', id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;