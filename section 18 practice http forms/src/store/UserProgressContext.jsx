import React, { createContext, useState } from 'react'

export const UserProgressContext = createContext({
    progress: '',  // cart, checkout
    showCart: () => { },
    hideCart: () => { },
    showCheckout: () => { },
    hideCheckout: () => { }
})


const contextValue = {
    progress: '',
    showCart: () => { },
}

const UserProgressContextProvider = ({ children }) => {
    const [progress, setProgress] = useState('');

    const showCart = () => {
        setProgress('cart');
    }

    const showCheckout = () => {
        setProgress('checkout');
    }

    const cancelProgress = () => {
        setProgress('');
    }


    return (
        <UserProgressContext.Provider value={{
            progress,
            showCart,
            showCheckout,
            hideCart: cancelProgress,
            hideCheckout: cancelProgress

        }}>
            {children}
        </UserProgressContext.Provider>
    );
}


export default UserProgressContextProvider;
