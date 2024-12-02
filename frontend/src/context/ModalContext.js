import React, {createContext, useCallback, useState} from 'react';

export const ModalContext = createContext();

const ModalProvider = ({children}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [photoDetails, setPhotoDetails] = useState(null);

    // toggle modal state
    const toggleModal = useCallback(() => {
        setModalOpen(prevState => !prevState);
    }, []);

    // set photo details and open modal
    const openModalWithDetails = useCallback((details) => {
        setPhotoDetails(details);
        setModalOpen(true);
    }, []);

    return (
        <ModalContext.Provider value={{isModalOpen, photoDetails, toggleModal, openModalWithDetails}}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
