import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user")
        return storedUser ? JSON.parse(storedUser) : null
    })
    const [token, setToken] = useState(localStorage.getItem("token") || null)
    const navigate = useNavigate()

    const signIn = async (data) => {
        try {
            const response = await fetch('/api/sign-in', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            })

            const { token, user, error } = await response.json()

            if (error) {
                return [null, error]
            }

            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setToken(token)
            setUser(user)

            navigate("/")

            return [true, null]
        } catch (error) {
            return [null, error.message]
        }
    }

    const signUp = async (data) => {
        try {
            const response = await fetch('/api/sign-up', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" }
            })

            const { success, error } = await response.json()

            if (error) {
                return [null, error]
            }

            navigate("/sign-in")

            return [success, null]
        } catch (error) {
            return [null, error.message]
        }
    }

    const signOut = () => {
        setUser(null)
        setToken(null)
        navigate("/sign-in")
    }

    return (
        <AuthContext.Provider value={{ token, user, setUser, signIn, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)