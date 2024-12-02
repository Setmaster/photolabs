import { useState, useCallback } from 'react';

const useApplicationData = () => {
    // modal state
    const [isModalOpen, setModalOpen] = useState(false);
    const [photoDetails, setPhotoDetails] = useState(null);

    // favorites state
    const [favoritePhotos, setFavoritePhotos] = useState([]);

    // toggle modal state
    const toggleModal = useCallback(() => {
        setModalOpen(prevState => !prevState);
    }, []);

    // set photo details and open modal
    const openModalWithDetails = useCallback((details) => {
        setPhotoDetails(details);
        setModalOpen(true);
    }, []);

    // close photo details modal
    const onClosePhotoDetailsModal = useCallback(() => {
        setPhotoDetails(null);
        setModalOpen(false);
    }, []);

    // toggle favorite photo's ID
    const updateToFavPhotoIds = useCallback((photoId) => {
        setFavoritePhotos((prevFavorites) => {
            if (prevFavorites.includes(photoId)) {
                return prevFavorites.filter((id) => id !== photoId);
            } else {
                return [...prevFavorites, photoId];
            }
        });
    }, []);

    // placeholder
    const onLoadTopic = useCallback(() => {
        // TODO
    }, []);

    // the entire state object
    const state = {
        isModalOpen,
        photoDetails,
        favoritePhotos
    };

    return {
        state,
        updateToFavPhotoIds,
        setPhotoSelected: openModalWithDetails,
        onClosePhotoDetailsModal,
        onLoadTopic
    };
};

export default useApplicationData;
