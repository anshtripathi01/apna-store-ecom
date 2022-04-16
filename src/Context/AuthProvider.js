import React from 'react'
import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    const [token, setToken] = useState(userToken?.token)

    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(localStorageUser?.user);

    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser }}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;