import React, {useContext} from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';
import {ApplicationContext} from "../context/ApplicationContext";

const FavBadge = () => {
    const { state: { favoritePhotos } } = useContext(ApplicationContext);
    const doesFavPhotoExist = favoritePhotos.length > 0;

    return (
        <div className='fav-badge'>
            <FavIcon displayAlert={doesFavPhotoExist} selected={doesFavPhotoExist} />
        </div>
    );
};

export default FavBadge;
