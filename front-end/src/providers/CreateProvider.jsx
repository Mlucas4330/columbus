import React, { createContext, useContext, useState } from 'react'

const CreateContext = createContext()

export const CreateProvider = ({ children }) => {
    const [open, setOpen] = useState(false)

    return (
        <CreateContext.Provider value={{ open, setOpen }}>
            {children}
        </CreateContext.Provider>
    )
}

export const useCreate = () => useContext(CreateContext)