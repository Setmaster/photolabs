import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({
                           id,
                           location: {city, country},
                           imageSource,
                           username,
                           profile
                       }) => {
    return (
        <div className="photo-list__item">
            <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} />
            <div className="photo-list__user-info">
                <img className="photo-list__user-profile" src={profile} alt={`${username}'s profile`} />
                <div className="photo-list__user-details">
                    <h3 className="photo-list__user-username">{username}</h3>
                    <p className="photo-list__user-location">{city}, {country}</p>
                </div>
            </div>
        </div>
    );
};

export default PhotoListItem;
