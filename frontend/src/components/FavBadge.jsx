import React, { useContext } from 'react';
import FavIcon from './FavIcon';
import { FavoritesContext } from '../context/FavoritesContext';
import '../styles/FavBadge.scss';

const FavBadge = () => {
    const { favoritePhotos } = useContext(FavoritesContext);
    const doesFavPhotoExist = favoritePhotos.length > 0;

    return (
        <div className='fav-badge'>
            <FavIcon displayAlert={doesFavPhotoExist} selected={doesFavPhotoExist} />
        </div>
    );
};

export default FavBadge;
