import React, { createContext, useContext, useState } from "react"

const ModalContext = createContext()

export const useModal = () => useContext(ModalContext)

const ModalProvider = ({ children }) => {

    const [isVisible, setShowModal] = useState(false)

    return (
        <ModalContext.Provider value={{ isVisible, setShowModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider