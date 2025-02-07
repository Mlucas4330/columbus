import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
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

    return (
        <AuthContext.Provider value={{ token, user, signIn, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)