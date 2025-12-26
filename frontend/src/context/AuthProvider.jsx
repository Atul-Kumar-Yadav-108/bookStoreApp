import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext = createContext();
export default function AuthProvider({children}) {
    const initialAuthUser = localStorage.getItem("users");
    const [openLogin, setOpenLogin] = useState(false);

    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    ); 

    const logout = ()=>{
        localStorage.removeItem("users");
        setAuthUser(null);
    }
    
    return <AuthContext.Provider value={[authUser, setAuthUser, logout]} >
        {children}
    </AuthContext.Provider>
}

// custom hook
export const useAuth = ()=> useContext(AuthContext);