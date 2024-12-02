import React, { createContext, useState } from 'react';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = ()=>{
        setModalOpen(!isModalOpen);
    }

    return (
        <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
