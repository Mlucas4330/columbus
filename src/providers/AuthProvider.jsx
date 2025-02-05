import React, { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user")
        return storedUser ? JSON.parse(storedUser) : null
    })
    const [signedIn, setSignedIn] = useState(() => { return localStorage.getItem("signedIn") === "true" })
    const navigate = useNavigate()

    const signIn = (user) => {
        const storedUser = JSON.parse(localStorage.getItem("user"))

        if (storedUser && storedUser.email === user.email && storedUser.password === user.password) {
            setSignedIn(true)
            localStorage.setItem("signedIn", "true")
            navigate("/")
        } else {
            return 'Usuário ou senha incorretos'
        }
    }

    const signUp = (user) => {
        setUser(user)
        localStorage.setItem("user", JSON.stringify(user))
        navigate("/")
    }

    const signOut = () => {
        setUser(null)
        setSignedIn(false)
        localStorage.removeItem("signedIn")
        navigate("/sign-in")
    }

    return (
        <AuthContext.Provider value={{ signedIn, user, setUser, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)