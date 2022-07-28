import React , {createContext,useState} from "react";

export const AuthContext = createContext();

export const AuthProvider =({children}) => {
    const {test2, setTest2} =  useState("Test Value");
    return (
        <AuthContext.Provider value={{test2}}>
            {children}
        </AuthContext.Provider>
    );
}