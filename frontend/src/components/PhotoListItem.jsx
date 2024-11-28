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
        <div className="photo-list-item">
            <img className="photo-list-item__image" src={imageSource} alt={`Photo by ${username}`}/>
            <div className="photo-list-item__info">
                <img className="photo-list-item__profile" src={profile} alt={`${username}'s profile`}/>
                <div className="photo-list-item__details">
                    <h3>{username}</h3>
                    <p>{city}, {country}</p>
                </div>
            </div>
        </div>
    );
};

export default PhotoListItem;
