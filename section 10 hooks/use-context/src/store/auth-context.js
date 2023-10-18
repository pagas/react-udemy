import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    logout : () => {}
});

export default AuthContext;