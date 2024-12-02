import React, {useContext} from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import {ApplicationContext} from "../context/ApplicationContext";

function PhotoFavButton({ photoId, className }) {
    const { state: { favoritePhotos }, updateToFavPhotoIds } = useContext(ApplicationContext);
    const isSelected = favoritePhotos.includes(photoId);

    return (
        <div className={`photo-list__fav-icon ${className}`} onClick={() => updateToFavPhotoIds(photoId)}>
            <FavIcon displayAlert={false} selected={isSelected}/>
        </div>
    );
}

export default PhotoFavButton;
