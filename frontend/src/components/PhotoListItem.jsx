import React, {useContext} from "react";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss"
import PhotoFavButton from "./PhotoFavButton";
import {ApplicationContext} from "../context/ApplicationContext";

const PhotoListItem = ({
                           id,
                           location: {city, country},
                           imageSource,
                           username,
                           profile
                       }) => {
    const {openPhotoDetailsModal} = useContext(ApplicationContext);

    const photoDetails = {
        id, city, country, imageSource, username, profile
    };

    return (
        <div className="photo-list__item">
            <PhotoFavButton photoId={id}/>
            <img
                className="photo-list__image"
                src={imageSource}
                alt={`Photo by ${username}`}
                onClick={() => {
                    openPhotoDetailsModal(photoDetails)
                }}
            />
            <div className="photo-list__user-info">
                <img className="photo-list__user-profile" src={profile} alt={`${username}'s profile`}/>
                <div className="photo-list__user-details">
                    <h3 className="photo-list__user-username">{username}</h3>
                    <p className="photo-list__user-location">{city}, {country}</p>
                </div>
            </div>
        </div>
    );
};

export default PhotoListItem;
