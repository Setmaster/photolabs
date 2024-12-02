import React, {createContext, useCallback, useState} from 'react';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    // toggle modal state
    const toggleModal = useCallback(() => {
        setModalOpen(prevState => !prevState);
    }, []);

    return (
        <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
