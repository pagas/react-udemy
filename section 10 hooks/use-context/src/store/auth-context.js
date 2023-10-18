import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    logout: () => { },
    login: (email, password) => { }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // is executed only once, not everytime is rerendered
    useEffect(() => {
        const storedLoggendInfo = localStorage.getItem('isLoggedIn');
        if (storedLoggendInfo === '1') {
            setIsLoggedIn(true);
        }
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            logout: logoutHandler,
            login: loginHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext;