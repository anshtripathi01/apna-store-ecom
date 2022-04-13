import React from 'react'
import { createContext , useState } from 'react'

export const authContext = createContext()

const AuthContext = ({ children }) => {
    const userToken = JSON.parse(localStorage.getItem("token"));
    const [token, setToken] = useState(userToken?.token)
    return (
        <authContext.Provider value={{ token, setToken }}>{children}</authContext.Provider>
    )
}

export default AuthContext;