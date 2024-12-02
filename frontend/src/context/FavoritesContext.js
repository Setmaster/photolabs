import React, {createContext, useCallback, useState} from 'react';

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
    const [favoritePhotos, setFavoritePhotos] = useState([]);

    // store/unstore favorited photo's id so we know the ones favorited
    const toggleFavorite = useCallback((photoId) => {
        setFavoritePhotos((prevFavorites) => {
            if (prevFavorites.includes(photoId)) {
                return prevFavorites.filter((id) => id !== photoId);
            } else {
                return [...prevFavorites, photoId];
            }
        });
    }, []);

    return (
        <FavoritesContext.Provider value={{ favoritePhotos, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesProvider;
