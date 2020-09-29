import React, { useContext, useReducer } from "react";
import { authReducer, initAuth, initialAuthState } from "../reducers/authReducer";
const AuthContext = React.createContext([]);

export const AuthProvider = ({ children }) => {
    const contextValue = useReducer(authReducer, initialAuthState, initAuth);
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuthContext = () => useContext(AuthContext);