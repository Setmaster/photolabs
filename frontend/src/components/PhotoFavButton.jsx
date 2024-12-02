import React, { useContext } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { FavoritesContext } from '../context/FavoritesContext';

function PhotoFavButton({ photoId, className }) {
    const { favoritePhotos, toggleFavorite } = useContext(FavoritesContext);
    const isSelected = favoritePhotos.includes(photoId);

    return (
        <div className={`photo-list__fav-icon ${className}`} onClick={() => toggleFavorite(photoId)}>
            <FavIcon displayAlert={false} selected={isSelected}/>
        </div>
    );
}

export default PhotoFavButton;
