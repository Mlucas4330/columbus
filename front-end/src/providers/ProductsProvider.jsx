import React, { createContext, useContext, useState } from 'react'
import { useAuth } from './AuthProvider'
import { useCreate } from './CreateProvider'

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
    const { token } = useAuth()
    const { setOpen } = useCreate()
    const [products, setProducts] = useState([])

    const get = async () => {
        try {
            const response = await fetch('/api/products', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

            const { data } = await response.json()

            if (data) {
                setProducts(data)
            }
        } catch (error) {
            console.error(error.message)
        }
    }

    const create = async (body) => {
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                }
            })

            const { success, error } = await response.json()

            if (error) {
                return [null, error]
            }

            get()

            return [success, null]
        } catch (error) {
            return [null, error.message]
        } finally {
            setOpen(false)
        }
    }

    const destroy = async (id) => {
        try {
            const response = await fetch(`/api/products/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

            const { success } = await response.json()

            if (success) {
                get()
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }

    return (
        <ProductsContext.Provider value={{ products, setProducts, get, create, destroy }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)