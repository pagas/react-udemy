import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const foundItem = state.items.find(item => item.id === action.item.id)
            let updateItems;

            if (foundItem) {
                updateItems = [...state.items];
                updateItems[updateItems.indexOf(foundItem)] = {
                    ...foundItem,
                    amount: foundItem.amount + action.item.amount
                }
            } else {
                updateItems = [...state.items, { ...action.item }];
            }
            
            const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount);
            return { items: updateItems, totalAmount: updatedTotalAmount }
        } case 'REMOVE_ITEM': {
            const foundItem = state.items.find(item => item.id === action.id)
            let updateItems;

            if (foundItem.amount === 1) {
                updateItems = state.items.filter(item => item.id !== action.id)
            } else if (foundItem.amount > 1) {
                updateItems = [...state.items];
                updateItems[updateItems.indexOf(foundItem)] = {
                    ...foundItem,
                    amount: foundItem.amount - 1
                }
            }

            const updatedTotalAmount = state.totalAmount - foundItem.price;
            return { items: updateItems, totalAmount: updatedTotalAmount }
        } default:
    }

    return defaultCartState;
}

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